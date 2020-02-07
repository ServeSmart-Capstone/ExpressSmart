import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
// const serviceAccount = require("../../servesmart-45ed1-firebase-adminsdk-ntq8c-1aac0e39ab.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://servesmart-45ed1.firebaseio.com"
// });

admin.initializeApp();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  console.log("Testing Console logging");
  response.send("Hello from Firebase!");
});

export const getAdminUsers = functions.https.onRequest((request, response) => {
  admin
    .firestore()
    .doc("users/101010")
    .get()
    .then(snapshot => {
      response.send(snapshot);
    })
    .catch(error => {
      console.log(error);
      response.status(500).send(error);
    });
});

exports.addAdminRole = functions.https.onCall((data, context) => {
  if (!context.auth) {
    return { error: "Context auth not found" };
  }

  // check request is made by an admin
  if (context.auth.token.admin !== true) {
    return { error: "Only admins can add other admins sucker" };
  }

  // get user and add custom claim (admin)
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then(user => {
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true
      });
    })
    .then(() => {
      return {
        message: `Success! ${data.email} has been made an admin`
      };
    })
    .catch(err => {
      return err;
    });
});

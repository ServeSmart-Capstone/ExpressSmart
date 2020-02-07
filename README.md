# ExpressSmart

Backend for ServeSmart using Express

## Quick Start

Get started developing...

```shell
# install deps
npm install

# run in development mode
npm run dev

# run tests
npm run test
```

## Notes from Ethan
The file Structure.md is another markdown file that explains the structure of this project.  
Please refer to it for a quick overview of how this project is put together.

Download and use postman [here](https://www.getpostman.com/)

**DO NOT WORK IN MASTER**  
**NOT ONLY IS THIS BAD PRACTICE BUT I WILL BE MAD**  
If you don't know what this means please refer to [this link](https://walton.uark.edu/future-students/future-undergraduate-students.php)

We are using *Typescript* (denoted by the .ts extension) in this project, here are some resources if you haven't used this before

- <https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html>
- <https://www.youtube.com/watch?v=ahCwqrYpIuM> <- Very Good Video
- <https://www.youtube.com/watch?v=dQw4w9WgXcQ>

## Swagger docs
[Check out Swagger Docs Here](http://localhost:3000/api-explorer/)  
*Must be running dev server*

But Ethan I can't read, can't you just hop on discord and explain this to me?
> No, switch to business

### Learn about Swagger Docs Here

- <https://swagger.io/tools/open-source/getting-started/>
- <https://spin.atomicobject.com/2018/08/30/swagger-api-intro/>
- <https://en.wikipedia.org/wiki/Swagger_(software)>
- <https://www.google.com>

---

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

## Run It
#### Run in *development* mode:
Runs the application is development mode. Should not be used in production

```shell
npm run dev
```

or debug it

```shell
npm run dev:debug
```

#### Run in *production* mode:

Compiles the application and starts it in production production mode.

```shell
npm run compile
npm start
```

## Test It

Run the Mocha unit tests

```shell
npm test
```

or debug them

```shell
npm run test:debug
```

## Try It
* Open you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/examples` endpoint 
  ```shell
  curl http://localhost:3000/api/v1/examples
  ```


## Debug It

#### Debug the server:

```
npm run dev:debug
```

#### Debug Tests

```
npm run test:debug
```

#### Debug with VSCode

Add these [contents](https://github.com/cdimascio/generator-express-no-stress/blob/next/assets/.vscode/launch.json) to your `.vscode/launch.json` file
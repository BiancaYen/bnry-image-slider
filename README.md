# bnry-image-slider

This project has been created using [Simple React Full Stack](https://github.com/crsandeep/simple-react-full-stack), a
simple boilerplate to build a full stack web application using React, Node.js, Express and Webpack. It is also configured
with webpack-dev-server, eslint and babel.

- [bnry-image-slider](#bnry-image-slider)
  - [Introduction](#introduction)
    - [Development mode](#development-mode)
    - [Production mode](#production-mode)
  - [Quick Start](#quick-start)
  - [Documentation](#documentation)
    - [Folder Structure](#folder-structure)
    - [Babel](#babel)
    - [ESLint](#eslint)
    - [Webpack](#webpack)
    - [Webpack dev server](#webpack-dev-server)
    - [Nodemon](#nodemon)
    - [Express](#express)
    - [Concurrently](#concurrently)

## Introduction

This image slider is a simple example of a full stack [React](https://reactjs.org/) application with a [Node.js](https://nodejs.org/en/),
[Express](https://expressjs.com/) and [Json Server](https://www.npmjs.com/package/json-server) backend. All styling is done
using [Emotion](https://emotion.sh/docs/introduction), a CSS in JS framework.

This application is configured with [Airbnb's ESLint rules](https://github.com/airbnb/javascript).

### Development mode

In the development mode, 2 servers will be running. The front end code will be served by the
[webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server
side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting
the server whenever server side code changes.

### Production mode

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files
using webpack and it will be served by the Node.js/Express application.

## Quick Start

```bash
# Clone the repository
git clone https://github.com/BiancaYen/bnry-image-slider

# Go inside the directory
cd bnry-image-slider

# Install dependencies
yarn install (or npm install)

# Start development server
yarn dev (or npm run dev)

# Build for production
yarn build (or npm run build)

# Start tests
yarn test (or npm start)

# Start production server
yarn start (or npm start)
```

## Documentation

### Folder Structure

All the source code will be inside **src** directory. Inside src, there is client and server directory. All the frontend
code (jsx, js and any other assets) will be in client directory. Backend Node.js/Express code will be in the server directory.

### Babel

[Babel](https://babeljs.io/) helps with writing code in the latest version of JavaScript. If an environment does not support
certain features natively, Babel will compile those features down to a supported version. It also converts JSX to Javascript.

[.babelrc file](https://babeljs.io/docs/usage/babelrc/) is used describe the configurations required for Babel.
Babel requires plugins to do the transformation. Presets are the set of plugins defined by Babel.

### ESLint

[ESLint](https://eslint.org/) is a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

[.eslintrc.json file](<(https://eslint.org/docs/user-guide/configuring)>) (alternatively configurations can we written in
Javascript or YAML as well) is used describe the configurations required for ESLint.

The configuration is based upon the [Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript) which is popular
with many JavaScript developers worldwide. A few rules have been changed to suit my needs.

### Webpack

[Webpack](https://webpack.js.org/) is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.

[webpack.config.js](https://webpack.js.org/configuration/) file is used to describe the configurations required for webpack.
### Webpack dev server

[Webpack dev server](https://webpack.js.org/configuration/dev-server/) is used along with webpack. It provides a development
server that provides live reloading for the client side code. This should be used for development only.

### Nodemon

Nodemon is a utility that will monitor for any changes in the server source code and it automatically restart the server.
This is used in development only.

### Express

Express is a web application framework for Node.js. It is used to build 1backend API's.

### Concurrently

[Concurrently](https://github.com/kimmobrunfeldt/concurrently) is used to run multiple commands concurrently.
Use it to run the webpack dev server and the backend node server concurrently in the development environment.

### Jest

[Jest](https://jestjs.io/) is used along side [Enzyme](https://airbnb.io/enzyme/) to write Unit Tests.

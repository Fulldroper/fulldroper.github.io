---
title: "Route roller"
description: "The project aims to study the functioning of static routes and to implement this mechanism practically. The application, built with JavaScript and..."
publishDate: "06 Aug 2022"
updatedDate: 01 Jul 2024
tags: ["javascript", "routing", "HTML", "web dev"]
---
## Objective

The project aims to study the functioning of static routes and to implement this mechanism practically. The application, built with JavaScript and Express, serves as a simple example of how to manage static routes efficiently.
## Repository

You can find the project repository on GitHub: https://github.com/Fulldroper/route-roller
## Main Components
### Express.js
  A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
### Static Route Handling
  Implementation of static route mechanisms to serve HTML, CSS, and JavaScript files.
## How It Works
### erver Setup
  The server is set up using Express.js and configured to handle static routes.
```js
// server.js
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
### Serving Static Files
  The application serves static files such as HTML, CSS, and JavaScript from the public directory.
```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="./script.js"></script>
</head>
<body>
</body>
</html>
```
```js
// public/script.js
Document.prototype.router = {
  host: window.location.origin,

  history: window.history,
  location: window.location,

  get path() {
    return this.location.pathname;
  },

  set path(value) {
    this.history.replaceState(null, '',
      this.host + value
    );
  }
};

const arr = [
  "Привіт",
  "як справи?",
  "чим займаєшся?"
];

let inc = 0;

setInterval(() => {
  document.router.path = "/" + arr[inc % arr.length];
  inc++;
}, 3000, inc, arr);
```
## How the Code Emulates Routes

The JavaScript code in `script.js` emulates the behavior of static routes by dynamically updating the browser's URL path every 3 seconds. Here is a breakdown of how it works:
### Router Object Definition
  A `router` object is added to the `Document.prototype`. This object contains properties and methods for handling the URL path.
```js
Document.prototype.router = {
  host: window.location.origin,

  history: window.history,
  location: window.location,

  get path() {
    return this.location.pathname;
  },

  set path(value) {
    this.history.replaceState(null, '',
      this.host + value
    );
  }
};
```
### Static Routes Array
  An array `arr` contains the different paths that will be cycled through.
```js
const arr = [
  "Привіт",
  "як справи?",
  "чим займаєшся?"
];
```
### Path Update Interval
  A `setInterval` function updates the URL path every 3 seconds by setting `document.router.path` to a new value from the `arr` array.
```js
let inc = 0;

setInterval(() => {
  document.router.path = "/" + arr[inc % arr.length];
  inc++;
}, 3000, inc, arr);
```
## Skills Acquired
### Express.js Development
  Setting up and configuring an Express.js server.
  Implementing middleware to serve static files.
### Static File Management
  Organizing and serving static files such as HTML, CSS, and JavaScript.
  Understanding the role of static routes in web applications.
### Web Development Basics
  Creating simple web pages with HTML.
  Adding interactivity with JavaScript.
### Routing Mechanisms
  Practical implementation of static route handling in a web server.
  Understanding how to map URLs to files on the server.
### Emulating Routes in the Browser
  Using JavaScript to dynamically update the browser's URL path without reloading the page.
  Understanding the use of the History API for managing browser navigation state.
## Conclusion
This project provides practical experience in setting up a basic web server with Express.js, serving static files, implementing static routes, and emulating route changes in the browser using JavaScript. It serves as a foundational exercise for understanding routing mechanisms in web development.

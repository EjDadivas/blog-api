<1 Initial Server Setup>

1. 📁blog-api

$ npm init
$ npm install express

2. 🗄️server.js
   -this is where we setup the basic Express server

```
const express = require("express");

const app = express();

app.listen(3000, () => console.log("Server is running"));

```

$ node server

'use strict';

require('dotenv').config();
const express = require('express');
const bp = require("body-parser");
const port = 20000;
const app = express();
//const path = require('path'); path.join -> join is used to normalize path
const mysql = require('mysql');


app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
//ensuring your server handles incoming requests through the express middleware. So, now parsing the body of incoming requests is part of the procedure that your middleware takes when handling incoming requests
app.use(require("morgan")("dev"));
//morgan is a middleware utility tool that logs the server events
app.use(express.static('frontend'));
//middleware: express.static('frontend') function will tell server.js to look for static files in that folder in root folder 

app.listen(port, () => {
  console.log("server fired up, listning on port " + port);
});

const database = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

database.connect((err) => {
  if (err) {
    console.log('DB connection is messed up!');
    console.log(err);
  } else {
    console.log('Kiss me, DB is ready!');
  }
});

app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname + '/')); -> __dirname is setting root folder
  res.sendFile('index.html');
  //will try to send html from root, but express.static() will search for html in frontend folder recursively 
});

app.get('/get', (req, res) => {
  //console.log('app/get');
  database.query('SELECT * FROM test;', (err, rows) => {
    if (err) {
      console.log('select all from db failed');
      res.sendStatus(501);
    } else {
      res.send(rows);
    }
  });
});

app.post('/insert', (req, res) => {
  database.query(`INSERT INTO test (quantity, price, item) VALUES (1,1,'asd');`, (err, row) => {
    if (err) {
      console.log('DB query failed');
      res.status(500).send();
    } else {  
      res.sendStatus(200);
    }
  });
});

app.delete( '/delete', (req, res) => {
  database.query('DELETE FROM test ORDER BY `item-id` DESC LIMIT 1;', (err, rows) => {
    if (err) {
      res.sendStatus(502);
    } else {
      res.sendStatus(201);
    }
  });
});
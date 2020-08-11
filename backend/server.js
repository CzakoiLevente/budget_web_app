'use strict';

require('dotenv').config();
const express = require('express');
const bp = require("body-parser");
const port = 20000;
const app = express();
//const path = require('path'); path.join -> join is used to normalize path
const mysql = require('mysql');


//ensuring your server to handle incoming requests through the express middleware. So, now parsing the body of incoming requests is part of the procedure that your middleware takes when handling incoming requests
//app.use(bp.urlencoded({ extended: false }));
//this middleware is responsible for interpreting incoming req as URL
app.use(bp.text());
//this middleware is responsible for interpreting incoming req as TEXT
app.use(bp.json());
//this middleware is responsible for interpreting incoming req as JSON

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
  //res.sendFile(path.join(__dirname + '/'));  -> __dirname is setting root folder
  res.sendFile('index.html');
  //will try to send html from root, but express.static() will search for html in frontend folder recursively 
});

app.get('/get', (req, res) => {
  database.query(`SELECT * FROM test;`, (err, rows) => {
    if (err) {
      console.log('select all records from db failed');
      res.sendStatus(501);
    } else {
      res.send(rows);
    }
  });
});

app.post('/insert', (req, res) => {
  database.query(`INSERT INTO test (quantity, price, item, shop, currency, payment_method, date) VALUES ('${req.body.quantity}', '${req.body.price}', '${req.body.item}', '${req.body.shop}', '${req.body.currency}', '${req.body.payment}', '${req.body.date}');`, (err, row) => {
    if (err) {
      console.log(err);
      console.log('DB query failed');
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  });
});

app.delete('/delete', (req, res) => {
  let idArr = JSON.parse(req.body);
  for (let i = 0; i < idArr.length; i++) {
    database.query(`DELETE FROM test WHERE \`item-id\`='${idArr[i]}';`, (err, rows) => {
      if (err) {
        console.log('DB ERROR', '\n', err);
        res.status(500).send();
      } else {
        res.status(200).send();
      }
    });
  };
});

app.post('/update', (req, res) => {
  database.query(`UPDATE test SET quantity='${req.body.quantity}', price='${req.body.price}', item='${req.body.item}', shop='${req.body.shop}', currency='${req.body.currency}', payment_method='${req.body.payment}' WHERE \`item-id\`='${req.body.id}';`, (err, row) => {
    if (err) {
      console.log(err);
      console.log('DB query failed');
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  });
});

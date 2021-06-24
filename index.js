const express = require('express');
const bodyParer = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const mysql = require('mysql');
app.use(bodyParer.urlencoded({extended: true}));
app.use(bodyParer.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'password',
    database: 'forums'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Successfully connected to Database");
});

app.listen(3001, function () {
    console.log("Listening on port 3001")
});
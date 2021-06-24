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
    database: 'financeforums'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Successfully connected to Database");
    createTables();
});

/**
 * Gets all categories return in json format
 */
app.get('/getCategories', async function (request, response) {
    connection.query("SELECT * FROM categories",
        (error, results) => {
            if (error) console.log(error);
            response.status(200).json(results);
        })
});

function createTables() {
    connection.query(
        "CREATE TABLE IF NOT EXISTS users (" +
        "id INT auto_increment," +
        "email VARCHAR(255)," +
        "first_name VARCHAR(255)," +
        "last_name VARCHAR(255)," +
        "password VARCHAR(255)," +
        "avatar LONGTEXT," +
        "role VARCHAR(255)," +
        "primary key (id)" +
        ");"
    );
    connection.query(
        "CREATE TABLE IF NOT EXISTS threads (" +
        "id INT auto_increment," +
        "author INT," +
        "title VARCHAR(255)," +
        "date DATETIME," +
        "content LONGTEXT," +
        "primary key (id)" +
        ");"
    );
    connection.query(
        "CREATE TABLE IF NOT EXISTS comments (" +
        "id INT auto_increment," +
        "author INT," +
        "thread INT," +
        "date DATETIME," +
        "content LONGTEXT," +
        "primary key (id)" +
        ");"
    );
    connection.query(
        "CREATE TABLE IF NOT EXISTS reactions (" +
        "id INT auto_increment," +
        "threadID INT," +
        "commentID INT," +
        "userID INT," +
        "reactionType VARCHAR(255)," +
        "primary key (id)" +
        ");"
    );
    connection.query(
        "CREATE TABLE IF NOT EXISTS categories (" +
        "id INT auto_increment," +
        "category_name VARCHAR(255)," +
        "category_icon VARCHAR(255)," +
        "primary key (id)" +
        ");"
    );
    console.log("Successfully created Tables");

}

app.listen(3001, function () {
    console.log("Listening on port 3001")
});
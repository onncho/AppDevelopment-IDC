/**
 * Created by onncho on 6/11/16.
 */
'use strict';
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var calcResult = 0;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'www')));
console.log(path.join(__dirname, 'www'));


function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Login API
 */
app.post("/login", function (req, resp) {
    var username = req.body.username;
    var password = req.body.password;
    username = username.toLowerCase();
    password = password.toLowerCase();
    if (username == "admin" && password == "admin") {
        resp.send("true");
    } else if (username == "300502465" && password == "onn") {
        resp.send("true");
    }
    else {
        resp.send("false");
    }
});

/**
 * Save Result API + Get Result API + Funny Quota
 */
app.post("/saveResult", function (req, resp) {
    calcResult = req.body.lastResult;
});

app.get("/getResult", function (req, resp) {
    //resp.sendStatus(200);
    resp.send(calcResult.toString());
});

app.get("/randomQuote", function (req, resp) {
    var line1 = "The Girl Has No Name...";
    var line2 = "Shame... Ding Ding Shame... Ding Ding";
    var line3 = "The Winter is Coming...";
    var array = [line1, line2, line3];
    var pick = Math.floor(Math.random() * array.length);
    resp.send(array[pick].toString());
});

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port);
console.log("Server is Listening on : " + port);

app.on('error', function (error) {
    console.log(error);
});
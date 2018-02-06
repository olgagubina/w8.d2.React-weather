var express = require('express');

var app = express();
app.use(express.static('client'));
app.use(express.static('node_modules'));

app.listen(3001, function(){
    console.log("I'm here for you babe on 3001")
});
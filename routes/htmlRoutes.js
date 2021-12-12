var app = require("express").Router();
var path = require("path");


app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
});
app.get("/notes",function(req,res){
    res.sendFile(path.join(__dirname,"notes.html"))
});
app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
});
module.exports = app;
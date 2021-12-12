var app = require("express").Router();
var db = require("../db/db.json");
var fs= require("fs");

app.get("/api/notes", function(req,res){
   db = JSON.parse(fs.readFileSync("/db/db.json")) || []
   console.log("Get", db)
   res.status(200).json(db)
});


app.post("/api/notes", function(req,res){
    var newData = {
        id: Math.floor(Math.random() * 1000),
        title : req.body.title,
        text: req.body.text
    }
    db.push(newData)
    fs.writeFileSync("db/db.json", JSON.stringify(db), function(err,data){
        if (err) throw err;
        console.log("POST",db)
    })
    res.status(200).json(db)
 });


 app.delete("/api/notes/:id", function(req,res){
    var updatedNotesList = []
   updatedNotesList = db.filter( (record) => record.id !== req.params.id)
   console.log(updatedNotesList)
    db = updatedNotesList
    fs.writeFileSync("db/db.json", JSON.stringify(db), function(err,data){
        if (err) throw err;
        console.log("POST",db)
    })
    res.status(200).json(db)
 });




module.exports = app;
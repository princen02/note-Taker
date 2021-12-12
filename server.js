var express = require("express");
const app = require("./routes/htmlRoutes");
var app = express();
var PORT = process.env.PORT || 3001


app.use(expres.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(require("./routes/apiRoutes"));
app.use(require('./routes/htmlRoutes'));


app.listien(PORT, function(){
    console.log(`App lisitening on ${PORT}`)
});
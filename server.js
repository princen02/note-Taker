var express = require("express");
var app = express();
var PORT = process.env.PORT || 3001


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(require("./routes/apiRoutes"));
app.use(require('./routes/htmlRoutes'));


app.listen(PORT, function(){
    console.log(`App lisitening on ${PORT}`)
});
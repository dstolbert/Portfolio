var express = require("express"),
    app = express();
    
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/patatap", function(req, res){
    res.render("patatap");    
});

app.get("/color", function(req, res) {
   res.render("color"); 
});

app.get("/todo", function(req, res) {
   res.render("todo"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server on!");
});
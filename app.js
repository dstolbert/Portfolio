var express = require("express"),
    app = express();
    
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

// Header Routes

app.get("/projects", function(req, res) {
   res.render("projects"); 
});

app.get("/about", function(req, res) {
   res.render("about"); 
});

app.get("/contact", function(req, res) {
    res.render("contact");    
});

// Random Projects Routes

app.get("/rest", function(req, res) {
   res.render("rest"); 
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

// Webpage Routes

app.get("/mountain", function(req, res) {
    res.render("mountain");    
});

app.get("/blog", function(req, res) {
   res.render("blog"); 
});

app.get("/photoblog", function(req, res) {
   res.render("photoblog"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server on!");
});
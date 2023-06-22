const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let ejs = require("ejs");
const date = require(__dirname + "/date.js")

app.set("view engine", "ejs");
app.use(express.static('public'))

let item = []
let workItem = []
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function (req, res) {
  
let day = date();
  
  res.render("list", { listTitle: day , newListItem: item});
});

app.get("/work",function(req,res){
  res.render("list", { listTitle: "Work List" , newListItem: workItem});
});



app.post("/", function(req,res){
  if(req.body.list === "Work"){
      workItem.push(req.body.newItem)
  res.redirect("/work")
  }else{
     item.push(req.body.newItem)
    res.redirect("/")
  }
})

app.post("/delete",function(req, res){
  if(req.body.list === "Work"){
    workItem.pop(req.body.newItem)
res.redirect("/work")
}else{
   item.pop(req.body.newItem)
  res.redirect("/")
}
})

app.get("/about",function(req,res){
  res.render("about")
})

app.listen(3000, () => {
  console.log(`listning to Port: 3000`);
});

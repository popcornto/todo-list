const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static('public'))

let item = []
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function (req, res) {
  let today = new Date();
  let day = "";
  let currentDay = today.getDay();

  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  

  res.render("list", { kindOfDay: today.toLocaleDateString("de-DE", options) , newListItem: item});
});

app.post("/", function(req,res){
    item.push(req.body.newItem)
    res.redirect("/")
})

app.post("/delete",function(req, res){
    item.pop();
    res.redirect("/")
})

app.listen(3000, () => {
  console.log(`listning to Port: 3000`);
});

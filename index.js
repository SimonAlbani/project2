const express = require("express");
const parser = require("body-parser");
const methodOverride = require("method-override");
const app = express();
require("dotenv").config;

const ingredientsController = require("./controllers/ingredients");
const recipesController = require("./controllers/recipes");
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use("/", ingredientsController);
app.use("/", recipesController);


app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`running on PORT: ${app.get("port")}`);
});

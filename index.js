const express = require("express");
const parser = require("body-parser");
const methodOverride = require("method-override");
const app = express();

const ingredientsController = require("./controllers/ingredients");
const recipesController = require("./controllers/recipes");
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use("/", ingredientsController);
app.use("/", recipesController);

app.listen(9001, () => {
  console.log("It's over 9000!");
});

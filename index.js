const express = require("express");
const parser = require("body-parser");
const methodOverride = require("method-override");
const app = express();

// I woulod space this out a little bit more, grouping statements by their type:
const ingredientsController = require("./controllers/ingredients");
const recipesController = require("./controllers/recipes");

app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// I would include these with their prefixes -- so /recipes/:recipeId/ingredients and /recipes/ this will DRY up your controller files.
app.use("/", ingredientsController);
app.use("/", recipesController);

app.listen(9001, () => {
  console.log("It's over 9000!");
});

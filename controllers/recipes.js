const express = require("express");
const router = express.Router();
const Ingredient = require("../db/connection").Ingredients;
const Recipe = require("../db/connection").Recipes;

router.get("/", (req, res) => {
  Recipe.findAll()
    .then(recipes => {
      res.render("recipes/index", {
        recipes: recipes
      });
    })
    .catch(err => console.error(err));
});

module.exports = router;

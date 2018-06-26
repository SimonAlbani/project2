const express = require("express");
const router = express.Router();
const Ingredient = require("../db/connection").Ingredients;
const Recipe = require("../db/connection").Recipes;

const queryOptions = { include: [{ model: Recipe }] };

router.get("/recipe/:recipeId/ingredients/new", (req, res) => {
  Ingredient.findById(req.params.recipeId, queryOptions).then(ingredient => {
    res.render("ingredients/new", { ingredient });
  });
});

router.post("/recipe/:recipeId", (req, res) => {
  req.body.recipeId = req.params.recipeId;
  Ingredient.create(req.body).then(recipe => {
    res.redirect("/recipe/" + req.params.recipeId);
  });
});

router.get("/recipe/:id/ingredients/:id", (req, res) => {
  Ingredient.findById(req.params.id, queryOptions).then(ingredient => {
    res.render("ingredients/show", { ingredient });
  });
});

router.get("/recipe/:id/ingredients/:id/edit", (req, res) => {
  Ingredient.findById(req.params.id, queryOptions).then(ingredient => {
    res.render("ingredients/edit", { ingredient });
  });
});

router.put("/recipe/:recipeid/ingredients/:id", (req, res) => {
  Ingredient.findById(req.params.id, queryOptions)
    .then(ingredient => {
      recipeId = req.params.recipeId;
      return ingredient.updateAttributes(req.body);
    })
    .then(ingredient => {
      res.redirect("/recipe/" + req.params.recipeid);
    });
});

router.delete("/recipe/:recipeid/ingredients/:id", (req, res) => {
  Ingredient.findById(req.params.id, queryOptions)
    .then(ingredient => {
      ingredient.recipeId = req.params.recipeId;
      return ingredient.destroy();
    })
    .then(() => {
      res.redirect("/recipe/" + req.params.recipeid);
    });
});

module.exports = router;

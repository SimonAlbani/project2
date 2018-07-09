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

// calling both :id won't work. One needs to be named something else so that you can access both variables.
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

// would camel case recipeid
router.put("/recipe/:recipeid/ingredients/:id", (req, res) => {
  Ingredient.findById(req.params.id, queryOptions)
    .then(ingredient => {
      // you aren't using the recipeId variable.
      recipeId = req.params.recipeId;
      return ingredient.updateAttributes(req.body);
    })
    .then(ingredient => {
      res.redirect("/recipe/" + req.params.recipeid);
    });
});

// would camel case recipeid
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

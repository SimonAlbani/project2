const express = require("express");
const router = express.Router();
const Ingredient = require("../db/connection").Ingredients;
const Recipe = require("../db/connection").Recipes;

const queryOptions = { include: [{ model: Ingredient }] };

router.get("/", (req, res) => {
  Recipe.findAll()
    .then(recipes => {
      res.render("recipes/index", {
        recipes: recipes
      });
    })
    .catch(err => console.error(err));
});

router.get("/recipes/new", (req, res) => {
  res.render("recipes/new", {});
});

router.post("/", (req, res) => {
  Recipe.create(req.body).then(recipe => {
    res.redirect("/");
  });
});

router.get("/recipe/:id", (req, res) => {
  Recipe.findById(req.params.id, queryOptions).then(recipe => {
    res.render("recipes/show", { recipe });
  });
});

router.get("/edit/:id", (req, res) => {
  Recipe.findById(req.params.id).then(recipe => {
    res.render("recipes/edit", {
      recipe: recipe
    });
  });
});

router.put("/recipe/:id", (req, res) => {
  req.body.complete = req.body.complete ? true : false;
  Recipe.findById(req.params.id)
    .then(recipe => {
      return recipe.updateAttributes(req.body);
    })
    .then(recipe => {
      res.redirect("/recipe/" + recipe.id);
    });
});

router.delete("/recipe/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      recipe.destroy();
    })
    .then(() => {
      res.redirect("/");
    });
});

module.exports = router;

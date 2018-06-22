const connection = require("./connection");
const recipeData = require("./seed_data/recipe_data.json");
const ingredientData = require("./seed_data/ingredient_data.json");

connection.Recipes.destroy({ where: {} }).then(() => {
  connection.Recipes.bulkCreate(recipeData).then(() => {
    connection.Ingredients.destroy({ where: {} }).then(() => {
      connection.Ingredients.bulkCreate(ingredientData).then(() => {
        process.exit();
      });
    });
  });
});

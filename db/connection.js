const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL);

const Recipes = sequelize.import("../models/Recipe");
const Ingredients = sequelize.import("../models/Ingredient");

Ingredients.belongsTo(Recipes);
Recipes.hasMany(Ingredients);

sequelize.authenticate().then(() => {
  console.log("connected");
});

module.exports = {
  Sequelize,
  sequelize,
  Ingredients,
  Recipes
};

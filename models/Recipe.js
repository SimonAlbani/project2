module.exports = function recipeModel(sequelize, DataTypes) {
  return sequelize.define("recipe", {
    recipeName: DataTypes.STRING,
    cookingTime: DataTypes.INTEGER,
    prepTime: DataTypes.INTEGER,
    instructions: DataTypes.TEXT,
  });
};

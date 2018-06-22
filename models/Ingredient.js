module.exports = function ingredientModel(sequelize, DataTypes) {
  return sequelize.define("ingredient", {
    ingredientName: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    recipe: DataTypes.ID
  });
};

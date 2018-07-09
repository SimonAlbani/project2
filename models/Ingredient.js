// this export should be an anonymous function! Would also have the field be `name` instead of ingredientName
module.exports = function ingredientModel(sequelize, DataTypes) {
  return sequelize.define("ingredient", {
    ingredientName: DataTypes.STRING,
    amount: DataTypes.STRING,
  });
};

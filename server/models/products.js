

module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
      product_name: DataTypes.STRING,
      image: DataTypes.STRING,
      price: DataTypes.INTEGER
      
    });
    return Product;
  };
  
const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const Review = sequelize.define('Review', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    performerId: {
      type: Sequelize.INTEGER
    },
    reviewerId: {
      type: Sequelize.INTEGER
    },
    rating: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.STRING
    }
  },        
  {
    classMethods: {
    serial: 1,
    associate: function(models){
      Review.belongsTo(models.User, {as:"Employee",foreignKey: 'performerId'});
      Review.belongsTo(models.User, {as:"Reviewer",foreignKey: 'reviewerId'});
    }
  }
});
  
  // force: true will drop the table if it already exists
  Review.sync({force: true}).then(() => {
    // Table created
    return Review.create({
      rating:3,
      performerId: 1,
      description:"Very good ",
      reviewerId: 2
    });
  });
  
  return Review;
};
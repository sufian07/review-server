const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  },        
  {
    classMethods: {
    serial: 1,
    associate: function(models){
      User.belongsToMany(models.User, { as: 'Reviewers', through: {model:UserReviewers}}),
      User.hasMany(models.Review, {as: 'Reviews', foreignKey: 'performer_id'});
      User.hasMany(models.Review, {as: 'GivenReviews', foreignKey: 'reviewer_id'});
    }
  }});
  
  // force: true will drop the table if it already exists
  User.sync({force: true}).then(() => {
    // Table created
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });
  
  return User;
};
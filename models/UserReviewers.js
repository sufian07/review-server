const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const UserReviewers = sequelize.define('UserReviewers', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    reviewerId: {
      type: Sequelize.INTEGER,
    }
  },        
  {
    classMethods: {
    serial: 1
  }});
  
  // force: true will drop the table if it already exists
  UserReviewers.sync({force: true});
  
  return UserReviewers;
};
const models = require('../models');
module.exports = (sequelize, Sequelize) => {
    const News = sequelize.define("news", {
      // NewsId: {
      //   type: Sequelize.INTEGER(11),
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      // },
      NewsTitle: {
        type: Sequelize.STRING(30),
        allowNull:false
      },
      News: {
        type: Sequelize.TEXT(),
        allowNull:false
      },
      City: {
        type: Sequelize.STRING(20),
        allowNull:false
      },
      Image: {
        type: Sequelize.BIGINT(10),
        allowNull:false
      },
      Count: {
        type: Sequelize.INTEGER,
        allowNull:false
      }

      
    });
    News.associate = function(models) {
      News.hasMany(models.issue, {as: 'issues'})
    };
    return News;
  };
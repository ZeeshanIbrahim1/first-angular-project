'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Case extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Case.init({
    category: DataTypes.STRING,
    purpose_of_visit: DataTypes.STRING,
    case_type: DataTypes.STRING,
    date_of_accident: DataTypes.DATE,
    deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Case',
  });
  return Case;
};
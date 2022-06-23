const { DataTypes } = require('sequelize');
const conn = require('./db');


const Pet = conn.define('pet', {
  species: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  name: {
      type: DataTypes.STRING,
      allowNull: false,
  },
});

const User = conn.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

Pet.belongsTo(User, {as: 'owner'});
User.hasMany(Pet, {as: 'pets', foreignKey: 'ownerId'});

module.exports = {
  Pet, 
  User
};
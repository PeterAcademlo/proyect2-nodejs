const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 

const User = sequelize.define('user', {
    firt_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.STRING
    },
}, {
		// opciones AQUI!
});

module.exports = User;
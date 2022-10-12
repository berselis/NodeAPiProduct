const { Sequelize } = require('sequelize');
const config = require('../../config');

const db = new Sequelize({
    dialect: 'postgres',
    host: config.db.hots,
    username: config.db.userName,
    password: config.db.password,
    database: config.db.nameDb
});

module.exports = db;
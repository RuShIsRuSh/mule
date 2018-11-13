const Sequelize = require('sequelize');

const Database = new Sequelize('loveless_discord', 'loveless', 'nat4para1', {
    host: 'tommy.heliohost.org',
    port: 3306,
    dialect: 'mysql',

  pool: {
    max: 10,
    min: 0,
    acquire: 30 * 1000
  },

  logging: false,
  omitNull: true,
  define: { freezeTableName: true },
  operatorsAliases: Sequelize.Op
  //storage: `${__dirname}/Eros.db`
});

module.exports = Database;

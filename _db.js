const Sequelize = require('sequelize')

const db = new Sequelize('postgres', 'postgres', 'mysecretpassword', {
  dialect: 'postgres'
})

module.exports = db

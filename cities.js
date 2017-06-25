const Sequelize = require('sequelize')
const db = require('./_db')

const Cities = db.define('Cities', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  reflexId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  weight: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  coordinates: {
    type: Sequelize.GEOGRAPHY('POINT', 4326),
    allowNull: false
  }
}, {
  indexes: [{
    name: 'coordinates_index',
    fields: ['coordinates'],
    using: 'gist'
  }]
})

module.exports = Cities

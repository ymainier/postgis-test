const fs = require('fs')
const Cities = require('./cities')

const lines = fs.readFileSync('./export_yann.csv', 'utf-8').split('\n')
const bulkData = lines.filter(line => !!line).map(line => {
  const [reflexId, name, weight, latitude, longitude] = line.split('|')
  return {
    name,
    weight,
    reflexId,
    coordinates: {
      type: 'Point',
      coordinates: [ parseFloat(latitude), parseFloat(longitude) ],
      crs: { type: 'name', properties: { name: 'EPSG:4326'} }
    }
  }
})

Cities.sync().then(() => {
  Cities.bulkCreate(bulkData).then(() => {
    return Cities.findAll()
  }).then(cities => console.log(cities.length))
})

const db = require('./_db')
const Cities = require('./cities')

Cities.sync().then(() => {
  console.time('query')
  db.query(`
  SELECT "name", ST_DistanceSphere(ST_MakePoint(:latitude, :longitude), "coordinates") AS distance
  FROM "Cities"
  ORDER BY distance
  LIMIT 20
  `, {
    // replacements: {
    //   latitude: 6.81772,
    //   longitude: 47.4887
    // },
    replacements: {
      latitude: 2.23812,
      longitude: 48.81222
    },
    type: db.QueryTypes.SELECT
  }).then((...args) => {
    console.timeEnd('query')
    console.log('pouet')
    console.log(...args)
  })
})

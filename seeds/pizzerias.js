const pizzerias = require('./data/pizzerias.json');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pizzerias')
    .del()
    .then(function() {
      // formats data
      const locations = pizzerias.map(({ properties, geometry }, i) => ({
        city: properties.city,
        name: properties.pizzeria,
        website: properties.website,
        address: properties.address,
        lng: geometry.coordinates[0],
        lat: geometry.coordinates[1],
      }));
      // Inserts seed entries
      return knex('pizzerias').insert(locations);
    });
};

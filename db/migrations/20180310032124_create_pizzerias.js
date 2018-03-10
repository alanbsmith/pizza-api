exports.up = function(knex) {
  return knex.schema.createTable('pizzerias', function(t) {
    t.increments('id').primary();
    t.string('address').notNullable();
    t.string('city').notNullable();
    t.string('geoType').defaultTo('Point');
    t.string('lat').notNullable();
    t.string('lng').notNullable();
    t.string('markerColor').defaultTo('#1FB6FF');
    t.string('markerSize').defaultTo('medium');
    t.string('markerSymbol').defaultTo('restaurant');
    t.string('name').notNullable();
    t.string('type').defaultTo('Feature');
    t.string('website').notNullable();
    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pizzerias');
};

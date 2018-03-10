const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    fetchPizzerias(city: String): [Pizzeria],
    fetchPizzeria(id: ID, name: String): Pizzeria,
  }

  type Pizzeria {
    address: String,
    city: String,
    geoType: String,
    id: ID,
    lat: String,
    lng: String,
    markerColor: String,
    markerSize: String,
    markerSymbol: String,
    name: String,
    type: String,
    type: String,
    website: String,
  }

  type Mutation {
    createPizzeria(input: PizzeriaInput!): Pizzeria,
    updatePizzeria(input: PizzeriaInput!): Pizzeria,
    # destroyPizzeria(id: ID!): Pizzeria,
  }

  input PizzeriaInput {
    id: ID,
    address: String,
    city: String,
    name: String,
    website: String,
  }
`);

module.exports = schema;

// input PizzeriaInput {
//   id: ID,
//   text: String,
//   complete: Boolean,
// }

const resolvers = {
  fetchPizzerias: async (data = {}, { db }) => {
    let response;
    if (data.city) {
      response = await db('pizzerias').where('city', data.city);
    } else {
      response = await db('pizzerias').select('*');
    }
    return Object.assign(response);
  },

  fetchPizzeria: async (data, { db }) => {
    const param = Object.keys(data)[0];
    const response = await db('pizzerias').where(param, data[param]);
    return Object.assign(response[0]);
  },

  createPizzeria: async ({ input }, { db }) => {
    const response = await db('pizzerias').insert(input, '*');
    return Object.assign(response[0]);
  },

  updatePizzeria: async ({ input }, { db }) => {
    const response = await db('pizzeria').where('id', input.id).update(input, '*');
    return Object.assign(response[0]);
  },

  // this function is currently disabled.
  // destroyPizzeria: async (data, { db }) => {
  //   await db('todos').where('id', data.id).del();
  //   return Object.assign(data);
  // },
};

module.exports = resolvers;

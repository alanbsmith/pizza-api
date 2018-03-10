# Pizza GraphQL API 🍕

## OVERVIEW

This is an example GraphQL API for finding the best pizza around the world. The seed data comes from GeoJSON data

### Tech Stack

* PostgreSQL / Knex (DB layer)
* Node / Express (Server layer)
* Nodemon (to auto-restart the server)
* GraphQL / Express GraphQL (API layer)

## UP & RUNNING

### Install Dependencies

```
$ npm install
```

_or_

```
$ yarn
```

### Database Setup

_**NOTE:** This assumes you have the Knex CLI installed. If not, first run:_

```
$ npm install -g knex
```

#### Creating your Database

Change the database name on line 7 of `knexfile.js` from `react-graphql-starter` to whatever you'd like. Then in your terminal run:

```
$ createdb your-db-name
```

You'll also need to create a `.env` file at the root of your project and add a username and password for your database. This file is already added to the `.gitignore`. You can follow the example in `.env.sample` to see how to set it up.

```
$ touch .env
```

```
//.env
DB_USER="your-username"
DB_PASSWORD="your-secret-password"
```

#### Updating Migrations

Currently, there is a single migration file in `db/migrations` for creating Pizzerias. You're welcome to change it to whatever you'd like by running:

```
$ knex migrate:make your-migration-name
```

To run the migrations:

```
knex migrate:latest
```

#### Using Seeds

Currently, there is a single seed file in `seeds/pizzerias` to generate some initial data. You're welcome to change it to whatever you'd like by running:

```
$ knex seed:make your-seed-file-name
```

To run the seed file:

```
$ knex seed:run
```

### Fire Up Your Server

```
$ npm start
```

You can view the GraphiQL UI at `http://localhost:8080/graphql`.

If you'd like more information on using `express-graphql`, you can find great docs [here](http://graphql.org/graphql-js/running-an-express-graphql-server/) and [here](https://github.com/graphql/express-graphql).

#### Example Requests

**FETCH PIZZERIAS**

```
{
  fetchPizzerias {
    id
    name
		website
    city
    address
    lat
    lng
  }
}
```

**FETCH PIZZERIA**

```
{
  fetchPizzeria(id: 1) {
    id
    name
		website
    city
    address
    lat
    lng
  }
}
```

**CREATE PIZZERIA**

```
mutation {
  createPizzeria(input: {
    text: "get groceries",
  }) {
    id
    name
		website
    city
    address
    lat
    lng
  }
}
```

**UPDATE PIZZERIA**

```
mutation {
  updatePizzeria(input: {
    id: 1
    website: "https://brooklyn-pizza.com"
  }) {
    id
    name
		website
    city
    address
    lat
    lng
  }
}
```

**DESTROY PIZZERIA**

_This is currently disabled, because why would you destroy a pizzeria, you monster??_

```js
mutation {
  destroyPizzeria(id: 4) {
    id
  }
}
```

**Note:** _This is only setup for development at the moment. Nodemon is set to restart the server and GraphiQL UI is running by default._

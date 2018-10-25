var dotenv = require('dotenv');
dotenv.load();

module.exports = {
  development: {
      client: 'pg',
      connection: {
        database: "TMPJr",
        host: "transaction-app-rds.c0ydwbpkwrn0.us-east-2.rds.amazonaws.com",
        user: process.env.HOST_USERNAME,
        password: process.env.HOST_PASSWORD
      },
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds/production',
        },
    },
};

module.exports = {
  development: {
      client: 'pg',
      connection: {
        database: "TMPJr",
        host: "transaction-app-rds.c0ydwbpkwrn0.us-east-2.rds.amazonaws.com"
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

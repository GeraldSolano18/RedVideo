require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'produccion',
  port: process.env.PORT || 3001,
  cors: process.env.CORS,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbConnectionType: process.env.DB_CONNECTION_TYPE,

};

module.exports = { config };

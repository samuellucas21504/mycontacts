const fs = require('fs');

const readFileSync = (filename) => fs.readFileSync(filename).toString('utf8');

// Constants
module.exports = {
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 5432,
    database: process.env.DATABASE_DB || 'mycontacts',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD
      ? readFileSync(process.env.DATABASE_PASSWORD)
      : 'root',
  },
  port: process.env.PORT || 8080,
  // if you're not using docker compose for local development, this will default to 8080
  // to prevent non-root permission problems with 80. Dockerfile is set to make this 80
  // because containers don't have that issue :),
};

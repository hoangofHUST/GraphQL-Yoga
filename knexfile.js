module.exports = {
  database: {
    development: {
      client: "mysql",
      connection: {
        database: "graphql",
        user: "root",
        password: "hoanghuy1609",
        host: "127.0.0.1",
        port: 3306
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: "migrations"
      }
    }
  }
};

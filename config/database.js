module.exports = ({ env }) => {
  let dbConfig;

  if (env("NODE_ENV") === "production") {
    dbConfig = {
      connection: {
        client: "postgres",
        connection: {
          host: env("PROD_DATABASE_HOST", "localhost"),
          port: env.int("PROD_DATABASE_PORT", 5432),
          database: env("PROD_DATABASE_NAME", "prod_bank"),
          user: env("PROD_DATABASE_USERNAME", "prod_postgres"),
          password: env("PROD_DATABASE_PASSWORD", "prod_0000"),
        },
      },
    };
  } else {
    dbConfig = {
      connection: {
        client: "postgres",
        connection: {
          host: env("DATABASE_HOST", "localhost"), // dev keys
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME", "bank"),
          user: env("DATABASE_USERNAME", "postgres"),
          password: env("DATABASE_PASSWORD", "0000"),
        },
      },
    };
  }
  return {
    connection: dbConfig.connection,
    debug: false,
  };
};

module.exports = ({ env }) => {
  let dbConfig;

  dbConfig = {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'localhost'), // dev keys
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'bank'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', '0000'),
      },
    },
  };
  return {
    connection: dbConfig.connection,
    debug: false,
  };
};

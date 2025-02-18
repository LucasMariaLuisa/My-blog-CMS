module.exports = ({ env }) => {
  const isLocal = env('NODE_ENV') === 'development'; // ou algum outro parâmetro para identificar o ambiente local

  if (isLocal) {
    return {
      connection: {
        client: 'sqlite',
        connection: {
          filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        },
        useNullAsDefault: true,
      },
    };
  }

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: env.bool('DATABASE_SSL', false)
          ? {
              rejectUnauthorized: false,
            }
          : false,
      },
    },
  };
};

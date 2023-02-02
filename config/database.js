module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf8s7bpmbjss4mdskq3g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_c5uz'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '3KOHqypdOzQBmopeJJ418bx3Lmpr0DfS'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

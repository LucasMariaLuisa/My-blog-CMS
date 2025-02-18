module.exports = ({ env }) => ({
    url: env('RENDER_EXTERNAL_URL'),
    proxy: true,
    app: {
      keys: env.array('APP_KEYS'),
    },
    host: '0.0.0.0',
    port: process.env.PORT || 1337,
  });
export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'CJ2SK1BWluO0vkz6l6XrvQ=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '47z9d/4A+JTtq8Q62HD8xQ=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});

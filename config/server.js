require('events').EventEmitter.defaultMaxListeners = 15;
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ea0fb45c73c8032d7f8704b6daf89596'),
    },
  },
});

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '21916881bfcda5dbb3634408bef45dcc'),
  },
});

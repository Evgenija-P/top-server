export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.MONGO_HOST,
    port: parseInt(process.env.MONGO_PORT, 10) || 5432,
  },
  login: process.env.MONGO_LOGIN,
  password: process.env.MONGO_PASSWORD,
});

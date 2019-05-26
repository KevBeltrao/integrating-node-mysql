const app = require('./config/server');

const homeRoute = require('./app/routes/home');
homeRoute(app);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
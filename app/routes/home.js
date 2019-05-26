const dbConnection = require('../../config/dbConnection');

module.exports = app => {
  const connection = dbConnection();
  app.get('/', (req, res) => {
    connection.connect((err) => { //essa parte não é obrigatória mas é bom para validar
      if(err) {
        console.log('Error');
      }
      else {
          console.log('Connected');
        }
    });
    
    connection.query('SELECT * FROM pessoas', (err, result) => {
      if(err) {
        console.log('Error in the query');
      }
      else {
        console.log('Successful query');
        res.render('../views/home', {pessoas: result});
      }
    });
  });
}
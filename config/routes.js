//Update the name of the controller below and rename the file.
const transactions = require("../controllers/transactions.js")
const users = require("../controllers/users.js")
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

module.exports = function(app){
//LOGIN
  app.post('/users/login', users.login);

  app.use(verifyToken);
  
  //TRANSACTIONS
  app.get('/transactions', transactions.selectAll);
  app.get('/transactions/:id', transactions.singleSelect);
  app.post("/transactions/new", transactions.new);
  app.patch("/transactions/update/:id", transactions.update);
  app.delete("/transactions/:id", transactions.delete);


  //USERS
  app.post('/users/new', users.new);
  app.patch('/users/:id', users.update);
  app.delete("/users/:id", users.delete);

}
 


function verifyToken(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, secret.jwt, function (err, decoded) {
      if (err) {
        return res.status(401).send({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(401).send({
      success: false,
      message: 'No token provided.'
    });

  }
}


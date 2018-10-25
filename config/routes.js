//Update the name of the controller below and rename the file.
const transactions = require("../controllers/transactions.js")
const users = require("../controllers/users.js")
module.exports = function(app){

//TRANSACTIONS
  app.get('/transactions', transactions.selectAll);

//USERS
app.post('/users/new', users.new);
app.post('/users/:id', users.update);

}

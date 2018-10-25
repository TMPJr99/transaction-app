//Update the name of the controller below and rename the file.
const transactions = require("../controllers/transactions.js")
const users = require("../controllers/users.js")
module.exports = function(app){

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

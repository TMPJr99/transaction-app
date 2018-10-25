//Update the name of the controller below and rename the file.
const transactions = require("../controllers/transactions.js")
module.exports = function(app){

  app.get('/transactions', transactions.selectAll);
  app.post("/transactions/new", transactions.new);
  app.patch("/transactions/update/:id", transactions.update);
  app.delete("/transactions/:id", transactions.delete);

  app.get('/transactions/:id', transactions.singleSelect);

}

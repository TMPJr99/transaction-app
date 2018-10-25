//Update the name of the controller below and rename the file.
const transactions = require("../controllers/transactions.js")
module.exports = function(app){

  app.get('/transactions', transactions.selectAll);

}

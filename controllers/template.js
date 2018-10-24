const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex('transactions').insert(req.body).then((result)=> {
      res.send(result)
    })
  },
}

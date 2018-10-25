const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  selectAll: function(req, res) {
    knex('transactions').innerJoin('users', 'users.id', 'transactions.user_id').orderBy('transactions.id', 'asc').limit(50).offset(req.query.page ? 50 * (req.query.page - 1) : 0)
          .then((result)=>{
            res.json(result)
          })
  },
}

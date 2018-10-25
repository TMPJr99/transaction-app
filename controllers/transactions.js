const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  selectAll: function(req, res) {
    if(!req.query){
      knex('transactions').orderBy('id', 'asc').limit(50).offset(req.query.offset)
        .then((result)=>{
          res.json(result)
        })
      }else{
        knex('transactions').orderBy('id', 'asc').limit(50).offset(0)
          .then((result)=>{
            res.json(result)
          })
      }
  },
}

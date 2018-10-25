const knex = require("../db/knex.js");

module.exports = {
  

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

  singleSelect: function(req, res) {
    knex('transactions').where('id', req.params.id)
    .then((result) => {
      res.json(result[0])
    })
  },


  new: (req, res) => {
    knex("transactions")
      .insert({
        user_id: req.body.user_id,
        amount: req.body.amount,
        type: req.body.type,
        business_name: req.body.business_name,
      })
      .then(() => {
        res.json(req.body);
      });
  },

  update: (req, res) => {
    knex("transactions")
      .where('id', req.params.id).update({
        user_id: req.body.user_id,
        amount: req.body.amount,
        type: req.body.type,
        business_name: req.body.business_name
      }, '*')
      .then((result) => {
        res.json(result)
      })
  },

  delete: (req, res) => {
    knex("transactions")
      .where("id", req.params.id)
      .delete()
      .then(result => {
        res.json(result);
      });
  },
}





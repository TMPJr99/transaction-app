const knex = require("../db/knex.js");
const jwt = require('jsonwebtoken');

module.exports = {

  selectAll: (req, res) => {
    knex('transactions')
      .orderBy('transactions.id', 'asc').limit(50).offset(req.query.page ? 50 * (req.query.page - 1) : 0)
      .then((results) => {
        res.json(results)
      })
      .catch((err) => {
        console.error(err)
      });
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

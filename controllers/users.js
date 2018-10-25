const knex = require("../db/knex.js");


module.exports = {

  new: (req, res) => {
    let body = req.body;
    knex('users').insert({
      email: body.email,
      password: body.password
    }).then(() => {
      res.sendStatus(200)
    })
  },

  update: (req, res) => {
    let body = req.body;
    knex('users').where('id', req.params.id).update({
      email: body.email,
      password: body.password
    }).then(()=>{
      res.sendStatus(200)
    })
  },

}

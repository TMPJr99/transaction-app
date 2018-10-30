const knex = require("../db/knex.js");
const jwt = require('jsonwebtoken');
const secret = require('../config/secret');


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

  delete: (req, res) => {
    knex("users")
      .where("id", req.params.id)
      .delete()
      .then(() => {
        res.sendStatus(200);
      });
  },

  login:(req,res)=>{
   knex('users').where("email", req.body.email)
   .then((result)=>{
     let user = result[0];
     if (user.password === req.body.password) {

       let token = jwt.sign(user, secret.jwt, { expiresIn: '1h' })
       res.json({token})
     }else{
       res.sendStatus(400).send({message: 'invalid email/password'})
     }
   })
  }

}

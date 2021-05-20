var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll(function (err, data) {
      if (err) {
        console.log('controller get error', err);
      }
      res.json(data);
    });
  },
  // a function which handles a get request for all messages
  // invoke model from messages
  // use error first callback model
  //then response - should all include all messages
  // send back to client, through routes, via app
  // flow: client app routes controller models database
  post: function (req, res) {  // a function which handles posting a message to the database
    console.log(req.body)
    let params = [req.body.the_text, req.body.the_user_name, req.body.roomname];
    models.messages.create(params, function (err, data) {
      if (err) { console.log('error at controller message post'); }
      res.sendStatus(201);
    });
  }

};



var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll(function (err, data) {
      if (err) { console.log('error at controller GET'); }
      res.json(results)
    });

  },

  post: function (req, res) {
    var params = [req.body.the_user_name];
    models.users.create(params, function (err, data) {
      if (err) { console.log('error at controller POST'); }
      res.sendStatus(201);
    });
  }

};
var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = 'SELECT * FROM users';
    db.query(queryStr, function (err, data) {
      callback(err, data);
    });

  },
  create: function () {
    var queryStr = 'insert into users(the_user_name) values (?)';
    db.query(queryStr, params, function (err, results) {
      callback(err, results);
    });
  }
};

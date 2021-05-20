var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = 'SELECT * FROM messages';
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err);//???? maybe
      } else {
        callback(err, data);//send data back up the chain to the client
      }
    });
  },

  // a function which produces all the messages
  // where we are actually querying the database
  // importing db <-- lookup methods

  /* Empty the db table before each test so that multiple tests
   * (or repeated runs of the tests) won't screw each other up: */
  create: function (params, callback) {
    var queryStr = 'INSERT INTO messages(the_text, the_message_user_id, roomname) \
                    VALUES(?,(SELECT the_user_id FROM users WHERE the_user_name = ? LIMIT 1), ?)';
    db.query(queryStr, params, (err, data) => {
      callback(err, data);
    });
  }
};



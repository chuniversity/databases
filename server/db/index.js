var mysql = require('mysql');

var db = mysql.createConnection({
  user: 'root',
  password: 'GalvinX22',
  database: 'chat'
});

db.connect();

module.exports = db;




// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
  // user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
  // user: 'root', password: ''
  // OR
  // user: 'root', password: 'some_password_you_created_at_install'



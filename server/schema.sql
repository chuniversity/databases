CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
    the_user_id INT AUTO_INCREMENT PRIMARY KEY,
    the_user_name VARCHAR(20),
    github_handle VARCHAR(20),
    campus VARCHAR(20)
    );

CREATE TABLE messages (
       message_id INT AUTO_INCREMENT PRIMARY KEY,
       the_text VARCHAR(20),
       the_message_user_id INT,
       created_at TIMESTAMP,
       roomname VARCHAR(20),
       FOREIGN KEY(the_message_user_id) REFERENCES users(the_user_id)
);

/* Create other tables and define schemas for them here! */

-- CREATE TABLE users (
--        users VARCHAR(20),
--        the_user_id INT PRIMARY KEY;
-- );

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql;
 * mysql -u root < path/to/schema.sql;
 *  to create the database and the tables.*/


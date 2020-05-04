CREATE DATABASE burgereat;
USE burgereat;
CREATE TABLE burger
(
	burger_id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(60) NOT NULL,
    eaten BOOLEAN,
	PRIMARY KEY (burger_id)
);
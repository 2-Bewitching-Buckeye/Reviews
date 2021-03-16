DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

CREATE TABLE review (
id int NOT NULL AUTO_INCREMENT,
product_id INT NOT NULL,
page INT NOT NULL,
tally INT NOT NULL,
PRIMARY KEY (ID)
);

CREATE TABLE results (
review_id INT NOT NULL,
rating INT NOT NULL,
summary varchar(500) NOT NULL,
recommend boolean not null default 0,
body text(3000) NOT NULL,
date datetime NOT NULL,
reviewer_name varchar(25) NOT NULL,
helpfulness INT NOT NULL
);

CREATE TABLE photos (
photo_id int NOT NULL
url varchar(200) NOT NULL
);

CREATE TABLE meta (
product_id INT NOT NULL,
ratings int NOT NULL,
recommended int NOT NULL
);

CREATE TABLE characteristics (
product_id INT NOT NULL,
size int NOT NULL,
id int NOT NULL,
value decimal(10, 4)
);

CREATE TABLE width (
product_id INT NOT NULL,
id int NOT NULL,
value decimal(10, 4)
);

CREATE TABLE comfort (
product_id INT NOT NULL,
id int NOT NULL,
value decimal(10, 4)
);


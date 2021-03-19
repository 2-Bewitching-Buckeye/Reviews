DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;


CREATE TABLE products (
  product_id INT NOT NULL PRIMARY KEY
);

CREATE TABLE reviews (
review_id INT NOT NULL PRIMARY KEY,
product_id INT NOT NULL,
rating INT NOT NULL,
date datetime NOT NULL,
summary varchar(500) NOT NULL,
body text(3000) NOT NULL,
recommend bit NOT NULL,
reported bit NOT NULL,
reviewer_name varchar(25) NOT NULL,
reviewer_email varchar(25) NOT NULL,
response varchar(500) NOT NULL,
helpfulness INT NOT NULL
);

CREATE TABLE photos (
photo_id INT NOT NULL PRIMARY KEY,
review_id INT NOT NULL,
photo_link varchar(2000) NOT NULL,
FOREIGN KEY (review_id)
  REFERENCES reviews(review_id)
  ON DELETE CASCADE
);


CREATE TABLE characteristics (
characteristic_id INT NOT NULL PRIMARY KEY,
product_id INT NOT NULL,
value varchar(5000),
FOREIGN KEY (product_id)
    REFERENCES products(product_id)
    ON DELETE CASCADE

);

CREATE TABLE product_characteristics (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  characteristic_id INT NOT NULL,
  FOREIGN KEY (characteristic_id)
    REFERENCES characteristics(characteristic_id)
    ON DELETE CASCADE
);

CREATE TABLE reviews_characteristics (
  id INT NOT NULL PRIMARY KEY,
  product_charac_id INT NOT NULL,
  review_id INT NOT NULL,
  value INT NOT NULL,
  FOREIGN KEY (product_charac_id)
    REFERENCES product_characteristics(id)
    ON DELETE CASCADE,
  FOREIGN KEY (review_id)
  REFERENCES reviews(review_id)
  ON DELETE CASCADE

);



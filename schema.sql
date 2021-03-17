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
helpfulness INT NOT NULL,
characteristic_id INT NOT NULL,
FOREIGN KEY (product_id)
  REFERENCES products(product_id)
  ON DELETE CASCADE

);

CREATE TABLE photos (
photo_id int NOT NULL PRIMARY KEY,
photo_link varchar(200) NOT NULL,
review_id INT NOT NULL,
FOREIGN KEY (review_id)
  REFERENCES reviews(review_id)
  ON DELETE CASCADE
);


CREATE TABLE characteristics (
value varchar(50),
characteristic_id INT NOT NULL PRIMARY KEY
);

CREATE TABLE product_characteristics (
  id INT NOT NULL PRIMARY KEY,
  product_id INT NOT NULL,
  characteristic_id INT NOT NULL,
  value decimal(10, 4),
  FOREIGN KEY (product_id)
    REFERENCES products(product_id)
    ON DELETE CASCADE,
  FOREIGN KEY (characteristic_id)
    REFERENCES characteristics(characteristic_id)
    ON DELETE CASCADE
);

CREATE TABLE reviews_characteristics (
  product_charac_id INT NOT NULL,
  review_id INT NOT NULL,
  value INT NOT NULL,
  FOREIGN KEY (product_charac_id)
    REFERENCES product_characteristics(id)
    ON DELETE CASCADE

);



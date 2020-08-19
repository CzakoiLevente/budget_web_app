CREATE DATABASE test_project;

USE test_project;

CREATE TABLE IF NOT EXISTS `test` (
  `item-id` int (10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `quantity` int (10) NOT NULL,
  `price` int (10) NOT NULL,
  `item` VARCHAR (200) CHARACTER SET utf8 NOT NULL,
  `timestamp` TIMESTAMP,
  `shop` VARCHAR (30) NOT NULL,
  `payment_method` VARCHAR (30) NOT NULL,
  `currency` VARCHAR (5) NOT NULL,
  `date` DATE NOT NULL
);

/*
INSERT INTO test (quantity, price, item) VALUES (1,1,'asd');

DELETE FROM test ORDER BY `item-id` DESC LIMIT 1;

select * from test order by `item-id` desc limit 1;

ALTER TABLE test MODIFY item CHAR(50) CHARACTER SET utf8;

ALTER TABLE test ADD date DATE;
*/
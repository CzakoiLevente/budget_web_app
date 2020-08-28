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
  `currency` VARCHAR (10) CHARACTER SET utf8 NOT NULL,
  `date` DATETIME NOT NULL
);

INSERT INTO test (quantity, price, item, shop, payment_method, currency, date) 
VALUES (1,1,'apple','LIDL','cash','€','2020-08-10 12:44:26'),
(3,100000,'tesla model S','TESLA Zürich','transfer','€','2020-06-23 08:32:02'),
(2,20,'pear','market','cash','Ft','2020-06-23 09:12:34'),
(3,5,'gas','SHELL','crypto transfer','BTC','2020-06-23 11:34:53'),
(10,1.5,'bucket','PRAKTIKER','cash','ECU','2020-06-23 06:41:07'),
(1,10000,'mobile phone','t-mobile','card','CZSK','2020-06-23 14:13:17'),
(2,43.65,'telephone bill','VODAFONE','other','€','2020-06-23 18:55:49');

/*
INSERT INTO test (quantity, price, item) VALUES (1,1,'asd');

DELETE FROM test ORDER BY `item-id` DESC LIMIT 1;

select * from test order by `item-id` desc limit 1;

ALTER TABLE test MODIFY item CHAR(50) CHARACTER SET utf8;

ALTER TABLE test ADD date DATE;
*/

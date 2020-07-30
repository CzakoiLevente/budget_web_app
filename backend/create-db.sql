CREATE TABLE IF NOT EXISTS `test` (
  `item-id` int (10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `quantity` int (10),
  `price` int (10),
  `item` VARCHAR (200) NOT NULL
);


CREATE TABLE IF NOT EXISTS `test` (
  `item-id` int (10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `quantity` int (10) NOT NULL,
  `price` int (10) NOT NULL,
  `item` VARCHAR (200) NOT NULL,
  `timestamp` TIMESTAMP,
  `shop` VARCHAR (30)
);

INSERT INTO test (quantity, price, item) VALUES (1,1,'asd');

DELETE FROM test ORDER BY `item-id` DESC LIMIT 1;

select * from test order by `item-id` desc limit 1;


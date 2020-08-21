#!/bin/bash

export $(cat .env | xargs)
MYSQL_USER=$DB_USER
MYSQL_PASS=$DB_PASS

if [ $MYSQL_PASS ]
then
  mysql -u "$MYSQL_USER" -p"$MYSQL_PASS" < /backend/create-db.sql
else
  echo "connection to DB failed"
fi
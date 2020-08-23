#!/bin/bash

#install mysql
apk update
apk add mysql

#login to mysql, then pass queries from .sql
export $(cat .env | xargs)

if [ $MYSQL_PASS ]
then
  mysql -u "$DB_USER" -p "$DB_PASS" < /backend/create-db.sql
else
  echo "connection to DB failed"
fi


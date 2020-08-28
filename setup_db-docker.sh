#!/bin/bash
echo ////////////////////////////
echo / DOCKER-SETUP.SH  STARTING /
echo ////////////////////////////


#install mysql
apk update
apk add mysql-server
#mysql.server start
#/etc/init.d/mysql start
cd /var/run/mysqld/
ls -la

echo
echo
echo

#login to mysql, then pass queries from .sql
export $(cat .env | xargs)

if [ $DB_PASS ]
then
  mysql -u"$DB_USER" -p"$DB_PASS" < /usr/bin/budget-app/backend/create-db.sql
else
  echo "connection to DB failed"
fi


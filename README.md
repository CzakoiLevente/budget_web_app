# budget web app

This project's aim is to collect, store and visualize data from expenses. Simple CRUD application.

<br>

## Preview of version 1.0 

### basic use case

Buy various things in a store and make a photo of the receipt. 
The app will be able to read it, then create a list of purchased items with all the data, and send to database.
The UI will visualize various statistics.

<br>

### operation: (manual insertion only for now)
  - [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) (manual input also possible): photo -> preview for edit (CRUD) -> Save DATA
  - DATA: json -> server -> validation -> send DB
  - visualization: [D3](https://d3js.org/) / [C3](https://c3js.org/)
  
<br>

### components

  - DB: mysql
  - backend: nodeJS express server
  - frontent:
      - HTML5
      - css / [bootsrap 4](https://www.w3schools.com/bootstrap4/default.asp) / theme: [greyson](https://bootstrap.themes.guide/greyson/)
      - JS

<br>

### additional tools will be used in the project:

  - **docker** I removed the files from this repo, and will create an artifactory for it, 
  meanwhile you can checkout in [this repository](https://github.com/CzakoiLevente/budget_web_app-phoenix).
  - **jenkins** 
  
<br>

### features to be implemented

  - [currency.js](https://currency.js.org/)
  - teach different store receipt layouts
  - user profile
  - reuse cards, bank account deatils
  - validation
  - tests  
  - implement as mobile application

<br>

----

## install guide for Linux
`TT = type in terminal`

**PREREQUISITE: [git](https://git-scm.com/downloads), [mysql](https://dev.mysql.com/doc/refman/8.0/en/linux-installation.html), [node](https://nodejs.org/en/download/package-manager/) needs to be installed.**

<br>

**1.** &nbsp; to download the repository, TT:

```javascript
$ git clone https://github.com/CzakoiLevente/budget_web_app
``` 
  
**2.** &nbsp; go to the project folder, TT:

```javascript
$ cd budget_web_app/backend
```

**3.** &nbsp; to install all dependecies, TT:

```javascript
$ npm install
```

**4.** &nbsp; to create DB with mysql default root password, TT: 

```javascript
$ mysql -u root -p"password" < create-db.sql
```

**5.** &nbsp; create .env file with variables for mysql:
```javascript
 echo -e "DB_HOST=localhost\nDB_USER=root\nDB_PASS=password\nDB_NAME=test_project" >> .env 
```

**6.** &nbsp; to run the project, TT:

```javascript
$ node server.js
```

**7.** &nbsp; to use app, go to link:

http://localhost:20000/

<br>

### uninstall

**0.** &nbsp; stop project from running, go back to terminal: `CTRL-C`

**1.** &nbsp; remove project folder:
 
```javascript
$ cd ../..
```
then
```javascript
$ rm -rf budget_web_app
```

**2.** &nbsp; remove database:

log into mysql as root:
```javascript
$ mysql -u root -p"password"
```

remove database:
```javascript
$ DROP DATABASE test_project;
```

exit mysql:
```javascript
$ exit
```

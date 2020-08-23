# budget web app

This project's aim is to collect, store and visualize data from expenses. Simple CRUD application.

<br>

## basic use case

Buy various things in a store and make a photo of the receipt. 
The app will be able to read it, then create a list of purchased items with all the data, and send to database.
The UI will visualize various statistics.

<br>

## operation: (manual insertion only for now)
  - [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) (manual input also possible): photo -> preview for edit (CRUD) -> Save DATA
  - DATA: json -> server -> validation -> send DB
  - visualization: [D3](https://d3js.org/) / [C3](https://c3js.org/)
  
<br>

## components

  - DB: mysql
  - backend: nodeJS express server
  - frontent:
      - HTML5
      - css / [bootsrap 4](https://www.w3schools.com/bootstrap4/default.asp) / theme: [greyson](https://bootstrap.themes.guide/greyson/)
      - JS
  
additional tools will be used in the project:

  - docker
  - jenkins
  
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

## install guide
`TT = type in terminal`

1) create a testing folder and open in terminal

2) to download the repository, TT:

`$ git init https://github.com/CzakoiLevente/budget_web_app` 

3) to create DB with mysql default root password, TT then enter password:"password" 

`$ mysql -u root -p < backend/create-db.sql`

4) create .env file and copy/paste:
```javascript
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=test_project
```
5) to install all dependecies, TT:

`$ npm install`

6) run the project, TT:

`$ node backend/server.js`

7) to use app, click link:

http://localhost:20000/

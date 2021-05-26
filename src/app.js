const express = require("express");
const mysql = require("mysql");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config({ path: './.env'});

const app = express();
const port =process.env.PORT || 3000;

const db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
  
});


app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(cookieParser());


db.getConnection( (error) => {
  if(error) {
    console.log(error)
  } else {
    console.log("MYSQL Connected...")
  }
})

app.use('/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Server started on Port ${port}`);
})
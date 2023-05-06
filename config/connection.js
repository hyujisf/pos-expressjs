const mysql = require('mysql')
const env = require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

connection.connect((err) =>{
    if(err){
        console.log("error", err)
    }
    console.log('connect')
})

module.exports = connection
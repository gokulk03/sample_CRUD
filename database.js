class Database{
    constructor(){
        this.connected = true;
    }

    isConnected(){
        return this.connected;
    }
    
}

const mysql = require('mysql2/promise')
require('dotenv').config();
const mysqlPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

module.exports.mysqlPool = mysqlPool;
module.exports.databaseInstance = new Database();
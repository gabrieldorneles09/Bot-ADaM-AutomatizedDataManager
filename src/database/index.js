const { Client } = require('pg');
const config = require('../config/database');

class Database{
    constructor(){
        this.dbConfig = config;
        this.client = new Client(this.dbConfig);
    }
}

module.exports = new Database().client;
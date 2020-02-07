const { Pool } = require('pg');
const config = require('../config/database');

class Database{
    constructor(){
        this.dbConfig = config;
        this.client = new Pool(this.dbConfig);
    }

    async conn(){
        try {
            
            await this.client.connect();

        } catch (error) {

        console.log(error);

            await this.client.end();

        }
    }

    async disconn(){
        try {
            
            await this.client.end();

        } catch (error) {
            
            console.log(error);
            
        }
    }
}

module.exports = new Database().client;
const db = require('../../database');
const fs = require('fs');
const path = require('path');

class Diretos{
    constructor(){
        this.startDate = '';
        this.finalDate = '';
        this.queryPath = path.resolve(__dirname);
        this.query = fs.readFileSync(`${this.queryPath}/query.sql`)
            .toString()
            .replace(/(\r\n|\n|\r)/gm,' ')
            .replace(/\s+/g, ' ');
    }

    async getDiretosCases(){
        try {
            await db.connect();
            
            const response = await db.query(`${this.query}`);
            
            await db.end();

            return response.rows;
        } catch (error) {
            console.log(error);
            await db.end();
        }
    }
}

module.exports = new Diretos();
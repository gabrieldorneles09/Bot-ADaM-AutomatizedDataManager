const fs = require('fs');
const path = require('path');

class Institucional{
    constructor(){
        this.startDate = '';
        this.finalDate = '';
        this.queryPath = path.resolve(__dirname);
        this.query = fs.readFileSync(`${this.queryPath}/query.sql`)
            .toString()
            .replace(/(\r\n|\n|\r)/gm,' ')
            .replace(/\s+/g, ' ');
    }

    async getInstitucionalCases(client){
        try {
            
            const response = await client.query(`${this.query}`);
            
            return response.rows;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new Institucional();
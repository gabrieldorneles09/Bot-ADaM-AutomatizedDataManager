const axios = require('axios').default;
const Institucional = require('./model');
const qs = require('querystring');

class InstitucionalController{
    constructor(){
        this.url = 'https://script.google.com/macros/s/AKfycbxXXwpZbTOfR90ldeJaN4p8TZlQG7Odr5daH6aESg3BiH86hRY/exec';
        this.config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
        }

    async postToSheet(client){
        console.log(`Executando query Institucional em: ${new Date()}`);
        var res = await Institucional.getInstitucionalCases(client);
        console.log(`Query Institucional finalizada em: ${new Date()}`);
        console.log(`Inserindo dados Institucional em: ${new Date()}`);
        for(var i = 0; i < res.length; i++){
            await axios.post(this.url, qs.stringify({
                operacao: res[i].operacao,
                data: res[i].data,
                recebidas: res[i].recebidas,
                atendidas: res[i].atendidas,
                abandonadas: res[i].abandonadas
            }), this.config);
        }
        console.log(`Execução Institucional finalizada em: ${new Date()}`);
        return 1;
    }
}

module.exports = new InstitucionalController();
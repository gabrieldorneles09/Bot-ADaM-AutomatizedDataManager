const axios = require('axios').default;
const Gts = require('./model');
const qs = require('querystring');

class GtsController{
    constructor(){
        this.url = 'https://script.google.com/macros/s/AKfycbzNyCwQtTt7xQyarVz_8za_FR2x7TqwR4QirIc50Kn46t5b8xQ5/exec';
        this.config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
        }

    async postToSheet(client){
        console.log(`Executando query GTS em: ${new Date()}`);
        var res = await Gts.getGtsCases(client);
        console.log(`Query GTS finalizada em: ${new Date()}`);
        for(var i = 0; i < res.length; i++){
            await axios.post(this.url, qs.stringify({
                data_hora_abertura: res[i].data_hora_abertura,
                numero_manifestacao: res[i].numero_manifestacao,
                tipo: res[i].tipo,
                subtipo: res[i].subtipo,
                categoria: res[i].categoria,
                areanegocio: res[i].areanegocio,
                status: res[i].status,
                motivo: res[i].motivo,
                codigoidentificacao: res[i].codigoidentificacao,
                nomerazaosocial: res[i].nomerazaosocial,
                sla: res[i].sla,
                datafechamento: res[i].datafechamento,
                criadopor: res[i].criadopor,
                proprietariomanifestacao: res[i].proprietariomanifestacao,
            }), this.config);
        }
        console.log(`Execução GTS finalizada em: ${new Date()}`);
        return 1;
    }
}

module.exports = new GtsController();
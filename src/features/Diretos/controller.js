const axios = require('axios').default;
const Diretos = require('./model');
const qs = require('querystring');

class DiretosController{
    constructor(){
        this.url = 'https://script.google.com/macros/s/AKfycbw1F8gIhuGLXRnNEX80NHvuHrYNIVbzgLacKVpE-hBxG_Z-Fv1F/exec';
        this.config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
        }

    async postToSheet(){
        console.log(`Executando query em: ${new Date()}`);
        var res = await Diretos.getDiretosCases();
        console.log(`Query finalizada em: ${new Date()}`);
        for(var i = 0; i < res.length; i++){
            await axios.post(this.url, qs.stringify({
                data_hora_abertura: res[i].data_hora_abertura,
                numero_manifestacao: res[i].numero_manifestacao,
                codigo_identificacao: res[i].codigo_identificacao,
                origem_manifestacao: res[i].origem_manifestacao,
                plano: res[i].plano,
                cpfcnpj: res[i].cpfcnpj,
                nome_razao_social: res[i].nome_razao_social,
                tipo_registro: res[i].tipo_registro,
                tipo: res[i].tipo,
                subtipo: res[i].subtipo,
                categoria: res[i].categoria,
                area_negocio: res[i].area_negocio,
                tipo_solicitante: res[i].tipo_solicitante,
                assunto: res[i].assunto,
                cod_empresa: res[i].cod_empresa,
                nome_empresa: res[i].nome_empresa,
                proprietario: res[i].proprietario,
                criado_por: res[i].criado_por
            }), this.config);
        }
        console.log(`Execução finalizada em: ${new Date()}`);
    }
}

module.exports = new DiretosController();
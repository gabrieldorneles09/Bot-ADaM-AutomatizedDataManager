//this file will execute synchronous routines, one after another
const db = require('./database');
const GtsController = require('./features/GTS/controller');
const DiretosController = require('./features/Diretos/controller');

async function start(client){    
    await Promise.all([DiretosController.postToSheet(client), GtsController.postToSheet(client)]);
}

(async () => {
    const client = await db.connect();
    await start(client);
    client.release();
    await db.end();
})();
//this file will execute in case of need to run multiple routines 
//at the same time on the task scheduler.
const db = require('../../database');
const InstitucionalController = require('./controller');

async function start(){   
    const client = await db.connect();
    
    await InstitucionalController.postToSheet(client);

    client.release();
    await db.end();
}

start();


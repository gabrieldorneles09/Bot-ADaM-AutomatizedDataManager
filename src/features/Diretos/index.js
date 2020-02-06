//this file will execute in case of need to run multiple routines 
//at the same time on the task scheduler.

const DiretosController = require('./controller');

DiretosController.postToSheet();

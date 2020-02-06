//this file will execute synchronous routines, one after another

const GtsController = require('./features/GTS/controller');
const DiretosController = require('./features/Diretos/controller');

GtsController.postToSheet();
DiretosController.postToSheet();

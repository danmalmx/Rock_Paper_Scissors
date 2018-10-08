const  fs = require('fs');
const  chai = require('chai');
global.expect = chai.expect;

let  rbs = fs.readFileSync('./src/js/rbs.js');
eval( rbs + `\nexports.RBS = RBS;`)  
const level1a2a = require('./level1a2a');

function l1a() {
  console.log('This is: Level-1A');
}

let objExport = {
  l1a: l1a,
  l1a2a: level1a2a
};

module.exports = objExport;
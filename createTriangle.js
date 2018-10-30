const {createTriangle} = require('./src/patternLib.js');
const {extractInputs} = require('./src/patternUtil.js');

const main = function(){
  const {type, height} = extractInputs(process.argv);
  console.log( createTriangle(type, height) );
}

main();

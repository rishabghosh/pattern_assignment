const {createRectangle} = require('./src/patternLib.js');
const {extractInputs} = require('./src/patternUtil.js');

const main = function(){
  const {type, height, width} = extractInputs(process.argv);
  console.log( createRectangle(type, width, height) );
}

main();

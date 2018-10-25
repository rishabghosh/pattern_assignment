const {createTriangle} = require('./src/patternLib.js');

const main = function(){
  const triangleType = process.argv[2];
  const inputHeight = +process.argv[3];
  console.log( createTriangle(triangleType, inputHeight) );
}

main();

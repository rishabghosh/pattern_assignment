const {createDiamond} = require('./src/patternLib.js');

const main = function(){
  const diamondType =  process.argv[2];
  const diamondHeight = +process.argv[3];
  console.log( createDiamond(diamondType, diamondHeight) );
}

main();


const {createRectangle} = require('./src/patternLib.js');
const main = function(){
  const rectangleType = process.argv[2];
  const inputWidth = +process.argv[3];
  const inputHeight = +process.argv[4];
  console.log(createRectangle(rectangleType, inputHeight, inputWidth) );
}

main();

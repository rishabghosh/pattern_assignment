const createDash = function(){ return "-" } 
const createStar = function(){ return "*" } 
const createSpace = function(){ return " " }
const createSlash = function(){ return "/" }
const createFrontSlash = function(){ return "\\" }

//generate strings of  given length and return value of internal function

const generateLine = function(internalFunc, length){
  let validLength = (length < 1? 0:length);
  return new Array(validLength).fill( internalFunc() ).join("");
}

const generateDashLine = function(length){
  return generateLine(createDash, length);
}

const generateStarLine = function(length){
  return generateLine(createStar, length);
}

const generateSpaces = function (length){
  return generateLine( createSpace, length);
}

const createHollowLine = function(length){
  if(length < 2){
    return generateStarLine(length);
  }
  return "*" + generateSpaces(length-2) + "*";
}

const generateActualHeight = function(height){
  if(height < 1){return 0};
  if(height % 2 === 0){
  return height - 1;
  }
  return height;
}

const heightOfTriangle = function(diamondHeight){
  return Math.floor(generateActualHeight(diamondHeight) / 2);
}

const trianglesMaxLength = function(diamondHeight){
  if(diamondHeight < 3){return 0}
  return generateActualHeight(diamondHeight) - 2;
}

const createSlashedStructure = function(leftSide, rightSide, length){
  if(length < 2){return ""};
  return leftSide + generateSpaces(length-2) + rightSide;
}

const topBottomLine = function(diamondHeight){
  let trianglesHeight = heightOfTriangle(diamondHeight);
  if(diamondHeight < 1){return ""};
  return generateSpaces(trianglesHeight) + "*" + generateSpaces(trianglesHeight);
}

const extractInputs = function(listOfInput){
  let type = listOfInput[2];
  let width = +listOfInput[3];

  let index = (listOfInput.length === 5? 4:3);
  let height = +listOfInput[index];
  return {type, height, width};
}

/* ----------- EXPORTS ------------ */

exports.createHollowLine = createHollowLine;
exports.generateActualHeight = generateActualHeight;
exports.heightOfTriangle = heightOfTriangle;
exports.trianglesMaxLength = trianglesMaxLength;
exports.createSlashedStructure = createSlashedStructure;
exports.topBottomLine = topBottomLine;
exports.extractInputs = extractInputs;

exports.generateStarLine = generateStarLine;
exports.generateSpaces = generateSpaces;
exports.generateDashLine = generateDashLine;
exports.createDash = createDash;
exports.createStar = createStar;
exports.createSpace = createSpace;
exports.generateLine = generateLine;
exports.createSlash = createSlash;
exports.createFrontSlash = createFrontSlash;

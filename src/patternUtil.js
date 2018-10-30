const createDash = function(){ return "-" } 
const createStar = function(){ return "*" } 
const createSpace = function(){ return " " }

const generateLine = function(internalFunc, length){
  let currLine = "";
  for( let currLen = 0; currLen < length; currLen ++){
    currLine += internalFunc();
  }
  return currLine;
}

const generateDashWidth = function(width){
  generateDash = "";
  for(let currentWidth = 1; currentWidth <= width; currentWidth ++){
    generateDash += "-";
  }
  return generateDash;
}

const generateStar = function(starLimit){
  let starCount = 0;
  let addStar = "";
  while(starCount < starLimit){
    addStar += "*";
    starCount ++
  }
  return addStar;
}

const generateSpace = function (spaceLimit){
  let spaceCount = 0;
  let addSpace = "";
  while(spaceCount < spaceLimit){
    addSpace += " ";
    spaceCount ++
  }
  return addSpace;
}

const createHollowLine = function(width){
  if(width < 2){
    return generateLine(createStar,width); 
  }
  return "*" + generateLine(createSpace,width-2) + "*";
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

const createSlashedStructure = function(leftSide, rightSide, width){
  if(width < 2){return ""};
  return leftSide + generateLine(createSpace,width-2) + rightSide;
}

const topBottomLine = function(diamondHeight){
  let trianglesHeight = heightOfTriangle(diamondHeight);
  if(diamondHeight < 1){return ""};
  return generateLine(createSpace,trianglesHeight) + "*" + generateLine(createSpace,trianglesHeight);
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
exports.generateDashWidth = generateDashWidth;
exports.generateStar = generateStar;
exports.generateSpace = generateSpace;
exports.generateActualHeight = generateActualHeight;
exports.heightOfTriangle = heightOfTriangle;
exports.trianglesMaxLength = trianglesMaxLength;
exports.createSlashedStructure = createSlashedStructure;
exports.topBottomLine = topBottomLine;
exports.extractInputs = extractInputs;

exports.createDash = createDash;
exports.createStar = createStar;
exports.createSpace = createSpace;
exports.generateLine = generateLine;

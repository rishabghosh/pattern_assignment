const {generateHollowWidth,
  generateDashWidth,
  generateStar,
  generateSpace,
  generateActualHeight,
  heightOfTriangle,
  createSlashedStructure,
  topBottomLine,
  trianglesMaxLength} = require('./patternUtil.js');


/* -------- FILLED RECTANGLE -------- */

const generateFilledRectangle = function(height, width){
  let currentRectangle = "";
  let delimitter = "";

  for(let currentHeight = 1; currentHeight <= height; currentHeight ++){
    currentRectangle += delimitter + generateStar(width); 
    delimitter = "\n";
  }
  return currentRectangle;
}

/* -------- EMPTY RECTANGLE --------- */

const generateEmptyRectangle = function(height, width){
  let currentRectangle = "";
  let delimitter = "";

  for(let currentHeight = 1; currentHeight <= height; currentHeight ++){
    currentLine = generateHollowWidth(width);
    if(currentHeight === 1 || currentHeight === height){
      currentLine = generateStar(width);
    }
    currentRectangle += delimitter + currentLine;
    delimitter = "\n";
  }
  return currentRectangle;
}

/* --------- ALTERNATING RECTANGLE ---------- */

const generateAltRectangle = function(height, width){
  let currentRectangle = "";
  let currentLine = "";
  let delimiter = "";

  for(currentHeight = 1; currentHeight <= height; currentHeight ++){
    currentLine = generateStar(width);
    if(currentHeight % 2 === 0){
      currentLine = generateDashWidth(width);
    }
    currentRectangle += delimiter + currentLine;
    delimiter = "\n";
  }
  return currentRectangle;
}

/* ---------- CREATE RECTANGLE --------- */

const createRectangle = function(rectangleType, inputWidth, inputHeight){

  if(rectangleType === "alternating"){
    return generateAltRectangle(inputHeight, inputWidth);
  }

  if(rectangleType === "empty"){
    return generateEmptyRectangle(inputHeight, inputWidth) ;
  }

  if(rectangleType === "filled"){
    return  generateFilledRectangle (inputHeight, inputWidth);
  }
}

/* -------- LEFT ALIGNED TRIANGLE ---------- */

const leftAlignedTriangle = function(height){
  let currentTriangle = "";
  let delimiter = "";
  for(let currentHeight = 1; currentHeight <= height; currentHeight ++){
    currentTriangle += delimiter + generateStar(currentHeight)
      + generateSpace(height - currentHeight);

    delimiter = "\n";
  }
  return currentTriangle;
}

/* -------- RIGHT ALIGNED TRIANGLE --------- */

const rightAlignedTriangle = function(height){
  let currentTriangle = "";
  let delimiter = "";
  let currentLine = "";

  for(let currentHeight = 1; currentHeight <= height; currentHeight ++){
    currentLine = generateSpace(height - currentHeight) + generateStar(currentHeight); 
    currentTriangle += delimiter + currentLine;
    delimiter = "\n";
  }
  return currentTriangle;
}

/* ------------ CREATE TRIANGLE --------------- */

const createTriangle = function(triangleType, inputHeight){

  if(triangleType === "left"){
    return leftAlignedTriangle(inputHeight);
  }

  if(triangleType === "right"){
    return rightAlignedTriangle(inputHeight);
  }
}

/* ------------- FILLED DAIMOND ------------ */

const topFilledTriangle = function(diamondHeight){
  let currentLine = "";
  let trLen = trianglesMaxLength(diamondHeight);
  let spaceLen = Math.floor(trLen / 2);
  let currentTriangle = "";
  let delimiter = "";
  let counter = 0;

  for(let length = 1; length <= trLen; length += 2){
    currentLine = generateSpace(spaceLen - counter +1)+ generateStar(length)
      + generateSpace(spaceLen - counter +1);

    currentTriangle += delimiter + currentLine;
    delimiter = "\n";
    counter ++;
  }
  return currentTriangle;
}

const createMiddleLine = function(diamondHeight){
  let lineLength = trianglesMaxLength(diamondHeight) + 2;
  return "\n" + generateStar(lineLength) + "\n"; 
}

const bottomFilledTriangle = function(diamondHeight){
  let currentLine = "";
  let trLen = trianglesMaxLength(diamondHeight);
  let spaceLen = Math.floor(trLen / 2);
  let currentTriangle = "";
  let delimiter = "";
  let counter = 1;

  for(let length = trLen; length >= 1; length -= 2){
    currentLine = generateSpace(counter) + generateStar(length)
      + generateSpace(counter) ;
    currentTriangle += delimiter + currentLine;
    delimiter = "\n";
    counter ++;
  }
  return currentTriangle;
}

/* ------------ HOLLOW DAIMOND ------------- */

const topHollowTriangle = function(diamondHeight){
  let delimiter = "\n";
  let currentTriangle = topBottomLine(diamondHeight);
  let counter = heightOfTriangle(diamondHeight) - 1;

  for(let length = 3; length < generateActualHeight(diamondHeight); length += 2){

    currentTriangle += delimiter + generateSpace(counter) 
      + generateHollowWidth(length) + generateSpace(counter);

    counter --;
  }
  return currentTriangle;
}

const middleHollowLine = function(diamondHeight){
  let createdLine = generateHollowWidth(trianglesMaxLength(diamondHeight) +2);
  createdLine = "\n" + createdLine + "\n";
  return createdLine;
}

const bottomHollowTriangle = function(diamondHeight){
  let delimiter = "";
  let currentTriangle = "";
  let counter = 1;

  for(let length = generateActualHeight(diamondHeight); length > 3; length -= 2){

    currentTriangle += delimiter + generateSpace(counter) 
      + generateHollowWidth(length -2) + generateSpace(counter);

    delimiter = "\n";
    counter ++;
  }
  currentTriangle += "\n" + topBottomLine(diamondHeight);
  return currentTriangle;
}

/* -------- ANGLED HOLLOW DAIMOND ---------- */

const topSlashedTriangle = function(diamondHeight){
  let delimiter = "\n";
  let currentTriangle = topBottomLine(diamondHeight);
  let counter = heightOfTriangle(diamondHeight) - 1;

  for(let length = 3; length < generateActualHeight(diamondHeight); length += 2){
    currentTriangle += delimiter + generateSpace(counter) 
      + createSlashedStructure("/", "\\", length) + generateSpace(counter);

    counter --;
  }
  return currentTriangle;
}

const bottomSlashedTriangle = function(diamondHeight){
  let delimiter = "";
  let currentTriangle = "";
  let counter = 1;

  for(let length = generateActualHeight(diamondHeight); length > 3; length -= 2){
    currentTriangle += delimiter + generateSpace(counter) + 
      createSlashedStructure("\\", "/", length -2) + generateSpace(counter);

    delimiter = "\n";
    counter ++;
  }
  currentTriangle += "\n" + topBottomLine(diamondHeight);
  return currentTriangle;
}

/* ----------- CREATE DIAMOND ------------- */

const createDiamond = function(diamondType, diamondHeight){

  let filledDiamond = topFilledTriangle(diamondHeight) + 
    createMiddleLine(diamondHeight) + bottomFilledTriangle(diamondHeight);

  let hollowDiamond = topHollowTriangle(diamondHeight) 
    + middleHollowLine(diamondHeight) + bottomHollowTriangle(diamondHeight);

  let angledDiamond = topSlashedTriangle(diamondHeight)
    + middleHollowLine(diamondHeight) + bottomSlashedTriangle(diamondHeight);

  if(generateActualHeight(diamondHeight) === 1){
    filledDiamond = hollowDiamond = angledDiamond = topBottomLine(diamondHeight);
  }
  if(generateActualHeight(diamondHeight) === 3){
    hollowDiamond  = angledDiamond = topBottomLine(diamondHeight) 
      + middleHollowLine(diamondHeight) + topBottomLine(diamondHeight);
  }

  if(diamondHeight < 1){
    filledDiamond = hollowDiamond = angledDiamond = "";
  }

  if(diamondType === "filled"){
    return filledDiamond;
  }

  if( diamondType === "hollow"){
    return hollowDiamond;
  }

  if(diamondType === "angled"){
    return angledDiamond;
  }
}

exports.createRectangle = createRectangle;
exports.createTriangle = createTriangle;
exports.createDiamond = createDiamond;


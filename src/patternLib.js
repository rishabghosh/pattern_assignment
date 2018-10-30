const {createDash,
  createStar,
  createSpace,
  generateLine,
  generateHollowWidth,
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
  let currRectangle = "";
  let delimitter = "";

  for(let currHeight = 1; currHeight <= height; currHeight ++){
    currRectangle += delimitter + generateLine(createStar, width); 
    delimitter = "\n";
  }
  return currRectangle;
}

/* -------- EMPTY RECTANGLE --------- */

const generateEmptyRectangle = function(height, width){
  let currRectangle = "";
  let delimitter = "";

  for(let currHeight = 1; currHeight <= height; currHeight ++){
    currLine = generateHollowWidth(width);
    if(currHeight === 1 || currHeight === height){
      currLine = generateLine(createStar,width);
    }
    currRectangle += delimitter + currLine;
    delimitter = "\n";
  }
  return currRectangle;
}

/* --------- ALTERNATING RECTANGLE ---------- */

const generateAltRectangle = function(height, width){
  let currRectangle = "";
  let currLine = "";
  let delimiter = "";

  for(currHeight = 1; currHeight <= height; currHeight ++){
    currLine = generateLine(createStar,width);
    if(currHeight % 2 === 0){
      currLine = generateLine(createDash, width);
    }
    currRectangle += delimiter + currLine;
    delimiter = "\n";
  }
  return currRectangle;
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
  let currTriangle = "";
  let delimiter = "";
  for(let currHeight = 1; currHeight <= height; currHeight ++){
    currTriangle += delimiter + generateLine(createStar, currHeight)
      + generateLine(createSpace, height - currHeight);

    delimiter = "\n";
  }
  return currTriangle;
}

/* -------- RIGHT ALIGNED TRIANGLE --------- */

const rightAlignedTriangle = function(height){
  let currTriangle = "";
  let delimiter = "";
  let currLine = "";

  for(let currHeight = 1; currHeight <= height; currHeight ++){
    currLine = generateLine(createSpace, height - currHeight)
      + generateLine(createStar, currHeight); 
    currTriangle += delimiter + currLine;
    delimiter = "\n";
  }
  return currTriangle;
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
  let currLine = "";
  let trLen = trianglesMaxLength(diamondHeight);
  let spaceLen = Math.floor(trLen / 2);
  let currTriangle = "";
  let delimiter = "";
  let counter = 0;

  for(let length = 1; length <= trLen; length += 2){
    currLine = generateLine(createSpace, spaceLen - counter +1)
      + generateLine(createStar, length)
      + generateLine(createSpace,spaceLen - counter +1);

    currTriangle += delimiter + currLine;
    delimiter = "\n";
    counter ++;
  }
  return currTriangle;
}

const createMiddleLine = function(diamondHeight){
  let lineLength = trianglesMaxLength(diamondHeight) + 2;
  return "\n" + generateLine(createStar, lineLength) + "\n"; 
}

const bottomFilledTriangle = function(diamondHeight){
  let currLine = "";
  let trLen = trianglesMaxLength(diamondHeight);
  let spaceLen = Math.floor(trLen / 2);
  let currTriangle = "";
  let delimiter = "";
  let counter = 1;

  for(let length = trLen; length >= 1; length -= 2){
    currLine = generateLine(createSpace,counter) + generateLine(createStar,length)
      + generateLine(createSpace,counter) ;
    currTriangle += delimiter + currLine;
    delimiter = "\n";
    counter ++;
  }
  return currTriangle;
}

/* ------------ HOLLOW DAIMOND ------------- */

const topHollowTriangle = function(diamondHeight){
  let delimiter = "\n";
  let currTriangle = topBottomLine(diamondHeight);
  let counter = heightOfTriangle(diamondHeight) - 1;

  for(let length = 3; length < generateActualHeight(diamondHeight); length += 2){

    currTriangle += delimiter + generateLine(createSpace,counter) 
      + generateHollowWidth(length) + generateLine(createSpace,counter);

    counter --;
  }
  return currTriangle;
}

const middleHollowLine = function(diamondHeight){
  let createdLine = generateHollowWidth(trianglesMaxLength(diamondHeight) +2);
  createdLine = "\n" + createdLine + "\n";
  return createdLine;
}

const bottomHollowTriangle = function(diamondHeight){
  let delimiter = "";
  let currTriangle = "";
  let counter = 1;

  for(let length = generateActualHeight(diamondHeight); length > 3; length -= 2){

    currTriangle += delimiter + generateLine(createSpace,counter) 
      + generateHollowWidth(length -2) + generateLine(createSpace,counter);

    delimiter = "\n";
    counter ++;
  }
  currTriangle += "\n" + topBottomLine(diamondHeight);
  return currTriangle;
}

/* -------- ANGLED HOLLOW DAIMOND ---------- */

const topSlashedTriangle = function(diamondHeight){
  let delimiter = "\n";
  let currTriangle = topBottomLine(diamondHeight);
  let counter = heightOfTriangle(diamondHeight) - 1;

  for(let length = 3; length < generateActualHeight(diamondHeight); length += 2){
    currTriangle += delimiter + generateLine(createSpace,counter) 
      + createSlashedStructure("/", "\\", length) + generateLine(createSpace,counter);

    counter --;
  }
  return currTriangle;
}

const bottomSlashedTriangle = function(diamondHeight){
  let delimiter = "";
  let currTriangle = "";
  let counter = 1;

  for(let length = generateActualHeight(diamondHeight); length > 3; length -= 2){
    currTriangle += delimiter + generateLine(createSpace,counter) + 
      createSlashedStructure("\\", "/", length -2) + generateLine(createSpace,counter);

    delimiter = "\n";
    counter ++;
  }
  currTriangle += "\n" + topBottomLine(diamondHeight);
  return currTriangle;
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


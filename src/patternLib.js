/* -------- FILLED RECTANGLE -------- */

const generateStarWidth = function(width){
  let generateLine = "";
  for(let currentWidth = 1; currentWidth <= width; currentWidth ++){
    generateLine += "*";
  }
  return generateLine;
}

const generateFilledRectangle = function(height, width){
  let currentRectangle = "";
  let delimitter = "";

  for(let currentHeight = 1; currentHeight <= height; currentHeight ++){
    currentRectangle += delimitter + generateStarWidth(width); 
    delimitter = "\n";
  }
  return currentRectangle;
}

/* -------- EMPTY RECTANGLE --------- */

const generateHollowWidth = function(width){
  let generateLine = ""
  for(let currentWidth = 1; currentWidth <= width; currentWidth ++){
    character = " ";
    if(currentWidth === 1 || currentWidth === width){
      character = "*";
    }
    generateLine += character;
  }
  return generateLine;
}

const generateEmptyRectangle = function(height, width){
  let currentRectangle = "";
  let delimitter = "";

  for(let currentHeight = 1; currentHeight <= height; currentHeight ++){
    currentLine = generateHollowWidth(width);
    if(currentHeight === 1 || currentHeight === height){
      currentLine = generateStarWidth(width);
    }
    currentRectangle += delimitter + currentLine;
    delimitter = "\n";
  }
  return currentRectangle;
}

/* --------- ALTERNATING RECTANGLE ---------- */

const generateDashWidth = function(width){
  generateDash = "";
  for(let currentWidth = 1; currentWidth <= width; currentWidth ++){
    generateDash += "-";
  }
  return generateDash;
}

const generateAltRectangle = function(height, width){
  let currentRectangle = "";
  let currentLine = "";
  let delimiter = "";

  for(currentHeight = 1; currentHeight <= height; currentHeight ++){
    currentLine = generateStarWidth(width);
    if(currentHeight % 2 === 0){
      currentLine = generateDashWidth(width);
    }
    currentRectangle += delimiter + currentLine;
    delimiter = "\n";
  }
  return currentRectangle;
}

/* ---------- CREATE RECTANGLE --------- */
const createRectangle = function(rectangleType, inputHeight, inputWidth){

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

exports.createRectangle = createRectangle;

/* -------- LEFT ALIGNED TRIANGLE ---------- */

const generateFilledWidth = function(width){
  let generateWidth = "";
  for(let currentWidth = 1; currentWidth <= width; currentWidth ++){
    generateWidth += "*";
  }
  return generateWidth;
}

const leftAlignedTriangle = function(height){
  let currentTriangle = "";
  let delimiter = "";
  for(let currentHeight = 1; currentHeight <= height; currentHeight ++){
    currentTriangle += delimiter + generateFilledWidth(currentHeight);
    delimiter = "\n";
  }
  return currentTriangle;
}

/* -------- RIGHT ALIGNED TRIANGLE --------- */

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

exports.createTriangle = createTriangle;

/* ----------- PRIMARY FUNCTIONS ------------ */
const generateActualHeight = function(height){ 
  let actualHeight = height;
  if(height % 2 === 0){
    actualHeight = height -1;
  }
  return actualHeight;
}

const repeatActualHeight = function(){
  return generateActualHeight(+process.argv[3]);
}

const topBottomLine = function(){
  let currentLine = "";
  for(let currentWidth = 1; currentWidth < heightOfTriangle() + 1; currentWidth ++){
    currentLine += " ";
  }
  currentLine += "*";
  return currentLine;
}

const heightOfTriangle = function(){
  return Math.floor(repeatActualHeight() / 2);
}

const trianglesMaxLength = function(){
  let counter = 1;
  let maxTriangleLength = 1;
  while(counter < heightOfTriangle()){
    maxTriangleLength += 2;
    counter ++;
  }
  return maxTriangleLength;
}

const createStar = function(countLimit){
  let starCount = 0;
  let addStar = "";
  while(starCount < countLimit){
    addStar += "*";
    starCount ++;
  }
  return addStar;
}

const createSpace = function (spaceLimit){
  let spaceCount = 0;
  let addSpace = "";
  while(spaceCount < spaceLimit){
    addSpace += " ";
    spaceCount ++
  }
  return addSpace;
}

/* ------------- FILLED DAIMOND ------------ */

const topFilledTriangle = function(){
  let currentLine = "";
  let trLen = trianglesMaxLength();
  let spaceLen = Math.floor(trLen / 2);
  let currentTriangle = "";
  let delimiter = "";
  let counter = 0;

  for(let currentLength = 1; currentLength <= trLen; currentLength += 2){
    currentLine = createSpace(spaceLen - counter +1)+ createStar(currentLength);
    currentTriangle += delimiter + currentLine;
    delimiter = "\n";
    counter ++;
  }
  return currentTriangle;
}

const createMiddleLine = function(){
  let addStar = "";
  let lineLength = trianglesMaxLength() + 2;

  for(let currentWidth = 1; currentWidth <= lineLength; currentWidth ++){
    addStar += "*";
  }
  addStar = "\n" + addStar + "\n";
  return addStar;
}

const bottomFilledTriangle = function(){
  let currentLine = "";
  let trLen = trianglesMaxLength();
  let spaceLen = Math.floor(trLen / 2);
  let currentTriangle = "";
  let delimiter = "";
  let counter = 1;

  for(let currentLength = trLen; currentLength >= 1; currentLength -= 2){
    currentLine = createSpace(counter) + createStar(currentLength);
    currentTriangle += delimiter + currentLine;
    delimiter = "\n";
    counter ++;
  }
  return currentTriangle;
}

/* ------------ HOLLOW DAIMOND ------------- */

const createHollowWidth = function(width){
  let createLine = ""
  for(currentWidth = 1; currentWidth <= width; currentWidth ++){
    character = " ";
    if(currentWidth === 1 || currentWidth === width){
      character = "*";
    }
    createLine += character;
  }
  return createLine;
}

const topHollowTriangle = function(){
  let delimiter = "\n";
  let currentTriangle = topBottomLine();
  let counter = heightOfTriangle() - 1;

  for(let currentLength = 3; currentLength < repeatActualHeight(); currentLength += 2){

    currentTriangle += delimiter + createSpace(counter) 
      + createHollowWidth(currentLength);

    counter --;
  }
  return currentTriangle;
}

const middleHollowLine = function(){
  let createdLine = createHollowWidth(trianglesMaxLength() +2);
  createdLine = "\n" + createdLine + "\n";
  return createdLine;
}

const bottomHollowTriangle = function(){
  let delimiter = "";
  let currentTriangle = "";
  let counter = 1;

  for(let currentLength = repeatActualHeight(); currentLength > 3; currentLength -= 2){

    currentTriangle += delimiter + createSpace(counter) 
      + createHollowWidth(currentLength -2);

    delimiter = "\n";
    counter ++;
  }
  currentTriangle += "\n" + topBottomLine();
  return currentTriangle;
}

/* -------- ANGLED HOLLOW DAIMOND ---------- */

const createSlashedStructure = function(leftSide, rightSide, width){
  let createLine = "";
  let character = "";

  for(currentWidth = 1; currentWidth <= width; currentWidth ++){
    character = " ";

    if(currentWidth === 1){
      character = leftSide;
    }
    if(currentWidth === width){
      character = rightSide;
    }

    createLine += character;
  }
  return createLine;
}

const topSlashedTriangle = function(){
  let delimiter = "\n";
  let currentTriangle = topBottomLine();
  let counter = heightOfTriangle() - 1;

  for(let currentLength = 3; currentLength < repeatActualHeight(); currentLength += 2){
    
    currentTriangle += delimiter + createSpace(counter) 
      + createSlashedStructure("/", "\\", currentLength);

    counter --;
  }
  return currentTriangle;
}

const bottomSlashedTriangle = function(){
  let delimiter = "";
  let currentTriangle = "";
  let counter = 1;

  for(let currentLength = repeatActualHeight(); currentLength > 3; currentLength -= 2){
    
    currentTriangle += delimiter + createSpace(counter) + 
      createSlashedStructure("\\", "/", currentLength -2);
    
    delimiter = "\n";
    counter ++;
  }
  currentTriangle += "\n" + topBottomLine();
  return currentTriangle;
}

/* ----------- CREATE DIAMOND ------------- */

const createDiamond = function(diamondType, diamondHeight){

let filledDiamond = topFilledTriangle() + 
  createMiddleLine() + bottomFilledTriangle();

let hollowDiamond = topHollowTriangle() 
  + middleHollowLine() + bottomHollowTriangle();

let angledDiamond = topSlashedTriangle()
  + middleHollowLine() + bottomSlashedTriangle();

if(generateActualHeight(diamondHeight) === 1){
  filledDiamond = hollowDiamond = angledDiamond = topBottomLine();
}
if(generateActualHeight(diamondHeight) === 3){
  hollowDiamond  = angledDiamond = topBottomLine() 
    + middleHollowLine() + topBottomLine();
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

exports.createDiamond = createDiamond;

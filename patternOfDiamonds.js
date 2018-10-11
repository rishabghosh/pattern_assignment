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

/* --------------ASSEMBLE DIAMONDS ---------- */

let filledDiamond = topFilledTriangle() + 
  createMiddleLine() + bottomFilledTriangle();

let hollowDiamond = topHollowTriangle() 
  + middleHollowLine() + bottomHollowTriangle();

let angledDiamond = topSlashedTriangle()
  + middleHollowLine() + bottomSlashedTriangle();

if(repeatActualHeight() === 1){
  filledDiamond = hollowDiamond = angledDiamond = topBottomLine();
}
if(repeatActualHeight() === 3){
  hollowDiamond  = angledDiamond = topBottomLine() 
    + middleHollowLine() + topBottomLine();
}

/* ------------------ MAIN ---------------- */

const main = function(diamondType){

  if(diamondType === "filled"){
    console.log(filledDiamond);
  }
  if( diamondType === "hollow"){
    console.log(hollowDiamond);
  }
  if(diamondType === "angled"){
    console.log(angledDiamond);
  }
}

main(process.argv[2]);





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

/* -------------------- MAIN ------------------ */

const main = function(triangleType, inputHeight){

  if(triangleType === "left"){
    console.log(leftAlignedTriangle(inputHeight));
  }
  if(triangleType === "right"){
    console.log(rightAlignedTriangle(inputHeight));
  }
}

main(process.argv[2], +process.argv[3]);

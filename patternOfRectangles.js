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

/*----------------- MAIN -------------- */

const main = function(rectangleType, inputWidth, inputHeight){

  if(rectangleType === "alternating"){
    console.log(generateAltRectangle(inputHeight, inputWidth));
  }
  if(rectangleType === "empty"){
    console.log(generateEmptyRectangle(inputHeight, inputWidth) );
  }
  if(rectangleType === "filled"){
    console.log( generateFilledRectangle (inputHeight, inputWidth) );
  }
}

main(process.argv[2], +process.argv[3], +process.argv[4]);







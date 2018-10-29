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

const generateActualHeight = function(height){ 
  if(height % 2 === 0){
  return height - 1;
  }
  return height;
}

const heightOfTriangle = function(diamondHeight){
  return Math.floor(generateActualHeight(diamondHeight) / 2);
}

const trianglesMaxLength = function(diamondHeight){
  let counter = 1;
  let maxTriangleLength = 1;
  while(counter < heightOfTriangle(diamondHeight)){
    maxTriangleLength += 2;
    counter ++;
  }
  return maxTriangleLength;
}

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

const topBottomLine = function(diamondHeight){
  let trianglesHeight = heightOfTriangle(diamondHeight);
  return generateSpace(trianglesHeight) + "*";
}

/* ----------- EXPORTS ------------ */

exports.generateHollowWidth = generateHollowWidth;
exports.generateDashWidth = generateDashWidth;
exports.generateStar = generateStar;
exports.generateSpace = generateSpace;
exports.generateActualHeight = generateActualHeight;
exports.heightOfTriangle = heightOfTriangle;
exports.trianglesMaxLength = trianglesMaxLength;
exports.createSlashedStructure = createSlashedStructure;
exports.topBottomLine = topBottomLine;

const generateStarWidth = function(width){
  let generateLine = "";
  for(let currentWidth = 1; currentWidth <= width; currentWidth ++){
    generateLine += "*";
  }
  return generateLine;
}

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
  let actualHeight = height;
  if(height % 2 === 0){
    actualHeight = height -1;
  }
  return actualHeight;
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
  let currentLine = "";
  let trianglesHeight = heightOfTriangle(diamondHeight);
  for(let currentWidth = 1; currentWidth < trianglesHeight + 1; currentWidth ++){
    currentLine += " ";
  }
  currentLine += "*";
  return currentLine;
}











exports.generateStarWidth = generateStarWidth;
exports.generateHollowWidth = generateHollowWidth;
exports.generateDashWidth = generateDashWidth;
exports.generateStar = generateStar;
exports.generateSpace = generateSpace;
exports.generateActualHeight = generateActualHeight;
exports.heightOfTriangle = heightOfTriangle;
exports.trianglesMaxLength = trianglesMaxLength;
exports.createHollowWidth = createHollowWidth;
exports.createSlashedStructure = createSlashedStructure;
exports.topBottomLine = topBottomLine;

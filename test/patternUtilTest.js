const assertEq = require('assert').equal;
const {createDash,
  createStar,
  createSpace,
  generateLine,
  createHollowLine,
  generateDashWidth,
  generateStar,
  generateSpace,
  generateActualHeight,
  heightOfTriangle,
  createSlashedStructure,
  topBottomLine,
  trianglesMaxLength} = require('../src/patternUtil.js');

/* ------- LOGGING ------- */

const generateLog = function(input, expected, actual){
  console.log("For input : ", input);
  console.log("expected :\n"+ expected);
  console.log("actual :\n"+ actual);
  console.log("------------");
}

/* ------ TEST GENERATE DASH WIDTH ------- */

const testGenerateDashWidth = function(width, expected){
  let actual = generateDashWidth(width);
  generateLog({width: width}, expected, actual);
  assertEq(actual, expected);
}

testGenerateDashWidth(0, "");
testGenerateDashWidth(-1, "");
testGenerateDashWidth(1, "-");
testGenerateDashWidth(2, "--");
testGenerateDashWidth(3, "---");

/* ----- TEST GENERATE STAR ----- */

const testGenerateStar = function(width, expected){
  let actual = generateStar(width);
  generateLog({width: width}, expected, actual);
  assertEq(actual, expected);
}

testGenerateStar(-1, "");
testGenerateStar(0, "");
testGenerateStar(1, "*");
testGenerateStar(2, "**");
testGenerateStar(3, "***");

/* ------ TEST GENERATE SPACE ------- */

const testGenerateSpace = function(width, expected){
  let actual = generateSpace(width);
  generateLog({width: width}, expected, actual);
  assertEq(actual, expected);
}

testGenerateSpace(-1, "");
testGenerateSpace(0, "");
testGenerateSpace(1, " ");
testGenerateSpace(2, "  ");
testGenerateSpace(3, "   ");

/* ------ TEST GENERATE HOLLOW WIDTH -------- */

const testGenerateHollowWidth = function(width, expected){
  let actual = createHollowLine(width);
  generateLog({width: width}, expected, actual);
  assertEq(actual, expected);
}

testGenerateHollowWidth(-1, "");
testGenerateHollowWidth(0, "");
testGenerateHollowWidth(1, "*");
testGenerateHollowWidth(2, "**");
testGenerateHollowWidth(3, "* *");
testGenerateHollowWidth(10, "*        *");

/* ------- TEST GENERATE ACTUAL HEIGHT ------- */

const testGenerateActualHeight = function(height, expected){
  let actual = generateActualHeight(height);
  generateLog({height: height}, expected, actual);
  assertEq(actual, expected);
}

testGenerateActualHeight(-1 , 0);
testGenerateActualHeight(0, 0);
testGenerateActualHeight(1, 1);
testGenerateActualHeight(2, 1);
testGenerateActualHeight(3, 3);

/* ----------- TEST HEIGHT OF TRIANGLE ------------ */

const testHeightOfTriangle = function(height, expected){
  let actual = heightOfTriangle(height);
  generateLog({height: height}, expected, actual);
  assertEq(actual, expected);
}

testHeightOfTriangle(-1 , 0);
testHeightOfTriangle(0, 0);
testHeightOfTriangle(1, 0);
testHeightOfTriangle(2, 0);
testHeightOfTriangle(3, 1);
testHeightOfTriangle(4, 1);
testHeightOfTriangle(5, 2);

/* ----- TEST TRIANGLES MAX LENGTH ------ */

const testTrianglesMaxLength = function(length, expected){
  let actual = trianglesMaxLength(length);
  generateLog({length: length}, expected, actual);
  assertEq(actual, expected);
}

testTrianglesMaxLength(-1 , 0);
testTrianglesMaxLength(0, 0);
testTrianglesMaxLength(1, 0);
testTrianglesMaxLength(2, 0);
testTrianglesMaxLength(3, 1);
testTrianglesMaxLength(4, 1);
testTrianglesMaxLength(5, 3);

/* --------- TEST CREATE SLASHED STRUCTURE --------- */

const testCreateSlashedStructure = function(rightSide, leftSide, width, expected){
  let actual = createSlashedStructure(rightSide, leftSide, width);
  generateLog({rightSide: rightSide, leftSide: leftSide, width: width}, expected, actual);
  assertEq(actual, expected);
}

testCreateSlashedStructure("/", "\\", -1, "");
testCreateSlashedStructure("/", "\\", 0, "");
testCreateSlashedStructure("/", "\\", 1, "");
testCreateSlashedStructure("/", "\\", 2, "/\\");
testCreateSlashedStructure("/", "\\", 3, "/ \\");
testCreateSlashedStructure("\\", "/", 1, "");
testCreateSlashedStructure("\\", "/", 2, "\\/");
testCreateSlashedStructure("\\", "/", 3, "\\ /");

/* ------ TEST TOP BOTTOM LINE ------ */

const testTopBottomLine = function(length, expected){
  let actual = topBottomLine(length);
  generateLog({length: length}, expected, actual);
  assertEq(actual, expected);
}

testTopBottomLine(-1, "");
testTopBottomLine(0, "");
testTopBottomLine(1, "*");
testTopBottomLine(2, "*");
testTopBottomLine(3, " * ");
testTopBottomLine(4, " * ");
testTopBottomLine(5, "  *  ");

/* ------ Test Atomic Functions ------- */

assertEq(createDash(), "-");
assertEq(createStar(), "*");
assertEq(createSpace(), " ");

/* ------ Test generateLine ------- */

const testGenerateLine = function(internalFunc, length, expected){
  let actual = generateLine(internalFunc, length);
  generateLog({internalFunc, length}, expected, actual);
  assertEq(actual, expected);
}

testGenerateLine( createSpace, -1, "");
testGenerateLine( createStar, 0, "");
testGenerateLine( createStar, 1, "*");
testGenerateLine( createStar, 2, "**");
testGenerateLine( createDash, 1, "-");
testGenerateLine( createDash, 2, "--");
testGenerateLine( createSpace, 0, "");
testGenerateLine( createSpace, 1, " ");
testGenerateLine( createSpace, 2, "  ");

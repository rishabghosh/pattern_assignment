const assertEq = require('assert').equal;
const patternLib = require('../src/patternLib.js');

const {createRectangle} = patternLib;
const {createTriangle} = patternLib;
const {createDiamond} = patternLib;

/* --------- LOGGING --------- */

const generateLog = function(input, expected, actual){
  console.log("For input : ", input);
  console.log("expected :\n"+ expected);
  console.log("actual :\n"+ actual);
  console.log("------------");
}

/* ------- TEST RECTANGLE -------- */

const testRectangle = function(type, width, height, expected){
  let actual = createRectangle(type, width, height);
  generateLog({type: type, width: width, height: height}, expected, actual);
  assertEq(actual, expected);
}

/* ----- RECTANGLE EDGE CASES ----- */

{
  testRectangle("filled", 0, 0, "");
  testRectangle("filled", 0, 1, "");
  testRectangle("filled", 1, 0, "");
  testRectangle("filled", 1, 1, "*");
  testRectangle("filled", 1, 2, "*\n*");
  testRectangle("filled", 2, 1, "**");

  testRectangle("empty", 0, 0, "");
  testRectangle("empty", 1, 0, "");
  testRectangle("empty", 0, 1, "");
  testRectangle("empty", 1, 1, "*");
  testRectangle("empty", 2, 2, "**\n**");

  testRectangle("alternating", 0, 0, "");
  testRectangle("alternating", 0, 1, "");
  testRectangle("alternating", 1, 0, "");
  testRectangle("alternating", 1, 1, "*");
  testRectangle("alternating", 1, 2, "*\n-");
  testRectangle("alternating", 2, 1, "**");
  testRectangle("alternating", 2, 2, "**\n--");
}

/* -------- FILLED RECTANGLE ---------- */

{
  let expectedOutput = "*****\n";
  expectedOutput += "*****\n";
  expectedOutput += "*****\n";
  expectedOutput += "*****\n";
  expectedOutput += "*****";

  testRectangle("filled", 5, 5, expectedOutput);
}

{
  let expectedOutput = "********************\n";
  expectedOutput += "********************\n";
  expectedOutput += "********************\n";
  expectedOutput += "********************\n";
  expectedOutput += "********************\n";
  expectedOutput += "********************\n";
  expectedOutput += "********************";

  testRectangle("filled", 20, 7, expectedOutput);
}

/* ------------ EMPTY RECTANGLE ------------- */

{
  let expectedOutput = "*****\n";
  expectedOutput += "*   *\n";
  expectedOutput += "*   *\n";
  expectedOutput += "*   *\n";
  expectedOutput += "*****";

  testRectangle("empty", 5, 5, expectedOutput);
}

{
  let expectedOutput = "********************\n";
  expectedOutput += "*                  *\n";
  expectedOutput += "*                  *\n";
  expectedOutput += "*                  *\n";
  expectedOutput += "*                  *\n";
  expectedOutput += "*                  *\n";
  expectedOutput += "********************";

  testRectangle("empty", 20, 7, expectedOutput);
}

/* --------- ALTERNATING RECTANGLE ---------- */

{
  let expectedOutput = "*****\n";
  expectedOutput += "-----\n";
  expectedOutput += "*****\n";
  expectedOutput += "-----";

  testRectangle("alternating", 5, 4, expectedOutput);
}

{
  let expectedOutput = "********************\n";
  expectedOutput += "--------------------\n";
  expectedOutput += "********************\n";
  expectedOutput += "--------------------\n";
  expectedOutput += "********************\n";
  expectedOutput += "--------------------\n";
  expectedOutput += "********************";

  testRectangle("alternating", 20, 7, expectedOutput);
}

/* ------------- TEST TRIANGLE --------------- */

const testTriangle = function(type, height, expected){
  let actual = createTriangle(type, height);
  generateLog( {type: type, height: height}, expected, actual ); 
  assertEq(actual, expected);
}

/* ------- TRIANGLE EDGE CASES --------- */
{
  testTriangle("left", 0, "");
  testTriangle("left", 1, "*");
  testTriangle("left", 2, "* \n**");
  testTriangle("right", 0, "");
  testTriangle("right", 1, "*");
  testTriangle("right", 2, " *\n**");
}

/* -------- LEFT TRIANGLE ---------- */

{
  let expectedOutput = "";
  expectedOutput += "*     \n";
  expectedOutput += "**    \n";
  expectedOutput += "***   \n";
  expectedOutput += "****  \n";
  expectedOutput += "***** \n";
  expectedOutput += "******";

  testTriangle("left", 6, expectedOutput);
}

/* ----------- RIGHT TRIANGLE -------------- */

{
  let expectedOutput = "  *\n";
  expectedOutput += " **\n";
  expectedOutput += "***";

  testTriangle("right", 3, expectedOutput);
}

{
  let expectedOutput = "     *\n";
  expectedOutput += "    **\n";
  expectedOutput += "   ***\n";
  expectedOutput += "  ****\n";
  expectedOutput += " *****\n";
  expectedOutput += "******";

  testTriangle("right", 6, expectedOutput);
}

/* ------- TEST DIAMOND -------- */

const testDiamond = function(type, height, expected){
  let actual = createDiamond(type, height);
  generateLog({type: type, height: height}, expected, actual);
  assertEq(actual, expected);
}

/* ---------- DIAMOND EDGE CASES ---------- */
{
  testDiamond("filled", 0, "");
  testDiamond("filled", 1, "*");
  testDiamond("filled", 2, "*");

  testDiamond("hollow", 0, "");
  testDiamond("hollow", 1, "*");
  testDiamond("hollow", 2, "*");

  testDiamond("angled", 0, "");
  testDiamond("angled", 1, "*");
  testDiamond("angled", 2, "*");
}

/* ------------ FILLED DIAMOND ---------- */

{
  let expectedOutput = " *\n";
  expectedOutput += "***\n";
  expectedOutput += " *";

  testDiamond("filled", 3, expectedOutput); 
}

{
  let expectedOutput = "  *\n";
  expectedOutput += " ***\n";
  expectedOutput += "*****\n";
  expectedOutput += " ***\n";
  expectedOutput += "  *";

  testDiamond("filled", 6, expectedOutput);
}

{
  let expectedOutput = "    *\n";
  expectedOutput += "   ***\n";
  expectedOutput += "  *****\n";
  expectedOutput += " *******\n";
  expectedOutput += "*********\n";
  expectedOutput += " *******\n";
  expectedOutput += "  *****\n";
  expectedOutput += "   ***\n";
  expectedOutput += "    *";

  testDiamond("filled", 9, expectedOutput);
}

/* ------------ HOLLOW DIAMOND ----------- */

{
  let expectedOutput = " *\n";
  expectedOutput += "* *\n";
  expectedOutput += " *";

  testDiamond("hollow", 3, expectedOutput);
}

{
  let expectedOutput = "  *\n";
  expectedOutput += " * *\n";
  expectedOutput += "*   *\n";
  expectedOutput += " * *\n";
  expectedOutput += "  *";

  testDiamond("hollow", 6, expectedOutput);
}

{
  let expectedOutput = "    *\n";
  expectedOutput += "   * *\n";
  expectedOutput += "  *   *\n";
  expectedOutput += " *     *\n";
  expectedOutput += "*       *\n";
  expectedOutput += " *     *\n";
  expectedOutput += "  *   *\n";
  expectedOutput += "   * *\n";
  expectedOutput += "    *";

  testDiamond("hollow", 9, expectedOutput);
}

/* -------- ANGLED DIAMOND --------- */

{
  let expectedOutput = " *\n";
  expectedOutput += "* *\n";
  expectedOutput += " *";

  testDiamond("angled", 3, expectedOutput); 
}

{
  let expectedOutput = "  *\n";
  expectedOutput += " / \\\n";
  expectedOutput += "*   *\n";
  expectedOutput += " \\ /\n";
  expectedOutput += "  *";

  testDiamond("angled", 6, expectedOutput);
}

{
  let expectedOutput = "    *\n";
  expectedOutput += "   / \\\n";
  expectedOutput += "  /   \\\n";
  expectedOutput += " /     \\\n";
  expectedOutput += "*       *\n";
  expectedOutput += " \\     /\n";
  expectedOutput += "  \\   /\n";
  expectedOutput += "   \\ /\n";
  expectedOutput += "    *";

  testDiamond("angled", 9, expectedOutput);
}


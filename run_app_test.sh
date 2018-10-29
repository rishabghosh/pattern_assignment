#! /bin/bash

./run_test.sh createRectangle.js appTestData/inputForRectangles.txt appTestData/outputForRectangles.txt
./run_test.sh createTriangle.js appTestData/inputForTriangle.txt appTestData/outputForTriangle.txt
./run_test.sh createDiamond.js appTestData/inputForDiamond.txt appTestData/outputForDiamonds.txt

echo "--------------"
echo "tests for rectangle "
./run_test.sh createRectangle.js appTestData/inputForRectangles.txt appTestData/outputForRectangles.txt | tail -1
echo "tests for triangles "
./run_test.sh createTriangle.js appTestData/inputForTriangle.txt appTestData/outputForTriangle.txt | tail -1
echo "tests for diamonds "
./run_test.sh createDiamond.js appTestData/inputForDiamond.txt appTestData/outputForDiamonds.txt | tail -1


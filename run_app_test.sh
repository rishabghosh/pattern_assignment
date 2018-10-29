#! /bin/bash

./run_test.sh createRectangle.js appTestData/inputForRectangles.txt appTestData/outputForRectangles.txt
./run_test.sh createTriangle.js appTestData/inputForTriangle.txt appTestData/outputForTriangle.txt
./run_test.sh createDiamond.js appTestData/inputForDiamond.txt appTestData/outputForDiamonds.txt


./run_test.sh createRectangle.js appTestData/inputForRectangles.txt appTestData/outputForRectangles.txt | tail -1
./run_test.sh createTriangle.js appTestData/inputForTriangle.txt appTestData/outputForTriangle.txt | tail -1



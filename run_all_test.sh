#! /bin/bash

initial="Run test for"
pattern1="Rectangle"
pattern2="Triangle"
pattern3="Diamond"
status0="failed"
status1="passed"

message1="$initial $pattern1 $status0"
message2="$initial $pattern2 $status0"
message3="$initial $pattern3 $status0"
message4="Pattern Library assertion test $status0"
message5="Pattern Utility assertion test $status0"

# ------- RUN TESTS -------- #

./scripts/run_test.sh createRectangle.js appTestData/inputForRectangles.txt appTestData/outputForRectangles.txt

result1=$?

./scripts/run_test.sh createTriangle.js appTestData/inputForTriangle.txt appTestData/outputForTriangle.txt

result2=$?

./scripts/run_test.sh createDiamond.js appTestData/inputForDiamond.txt appTestData/outputForDiamonds.txt

result3=$?

node ./test/patternLibTest.js

result4=$?

node ./test/patternUtilTest.js

result5=$?

# ------ CONDITIONS ------ #

if [ $result1 = 0 ]; then 
  message1="$initial $pattern1 $status1"
fi

if [ $result2 = 0 ]; then
  message2="$initial $pattern2 $status1"
fi

if [ $result3 = 0 ]; then
  message3="$initial $pattern3 $status1"
fi

if [ $result4 = 0 ]; then
  message4="Pattern Library assertion test $status1"
fi

if [ $result5 = 0 ]; then
  message5="Pattern Utility assertion test $status1"
fi

# ------ PRINT LOGS ------ #

echo "$message1" 
echo "$message2"
echo "$message3"
echo "$message4"
echo "$message5"

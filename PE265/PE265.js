var convertBinaryToDecimal,
    checkEndOfLoop,
    binarySorter,
    findArrangements,
    S;

convertBinaryToDecimal = function (binaryString) {
  return Number("0b" + binaryString);
};

checkEndOfLoop = function (n, binaryString) {
  var uncheckedArrangements = [],
      currentArrangement = binaryString.split('');

  for (i = 0; i < n - 1; i += 1) {
    currentArrangement.push(currentArrangement.shift());
    uncheckedArrangements.push(currentArrangement.join('').slice(-1 * n));
  }

  return uncheckedArrangements.every(function (arrangement) {
    return !binaryString.includes(arrangement);
  });
};

binarySorter = function (n, numberOfDigits, currentString, arrangements) {
  if (!(currentString.length >= Math.pow(2, n))) {

    [0, 1].map(function (possibleAddition) {
      var potentialNode = currentString + possibleAddition;

      if (!currentString.includes((potentialNode).slice(-1 * n))) {
        binarySorter(n, numberOfDigits, potentialNode, arrangements);   
      }
    });

  }

  else if (checkEndOfLoop(n, currentString)) {
    arrangements.push(currentString);
  }

};

findArrangements = function (n) {
  var arrangements = [],
      starterString = ('0'.repeat(n)) + ('1'),
      starterNumberOfDigits = Math.pow(2, n) - starterString.length;

  binarySorter(n, starterNumberOfDigits, starterString, arrangements);
  
  return arrangements;
};

S = function (n) {
  var sum = 0;

  findArrangements(n).map(function (arrangement) {
    sum += convertBinaryToDecimal(arrangement);
  });

  return sum;
};

console.log(S(Number(process.argv[2]) || 5));


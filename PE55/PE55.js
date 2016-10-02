var reverseNumber = function (n) {
  var reversedNumber = '',
      numberLength,
      i = 0;

  n = String(n);
  numberLength = n.length;

  for (i = 0; i < numberLength; i += 1) {
    reversedNumber = n[i] + reversedNumber;
  }

  return Number(reversedNumber);
};

reverseNumber = function (n) {
  return Number(String(n).split('').reverse().join(''));
};

var isPalindrome = function (candidate) {
  return (candidate === reverseNumber(candidate));
};

var checkForLychrel = function (n) {
  var total = 0;
  var runningCheck;
  var isLychrel;

  for (i = 0; i <= n; i += 1) {
    runningCheck = i;
    isLychrel = true;

    for (j = 0; j <= 50; j+=1) {
      runningCheck += reverseNumber(runningCheck);

      if(isPalindrome(runningCheck)) {
        isLychrel = false;
        break;
      }
    }

    if (isLychrel) {
      total += 1;
    }
  }

  return total;
};

console.log(checkForLychrel(process.argv[2] || 10000));

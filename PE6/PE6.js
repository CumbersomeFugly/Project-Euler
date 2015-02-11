var numberOfIterations = 100,
    
    sumOfSquares = function () {
        var runningTotal = 0;
        for (i = 1; i <= numberOfIterations; i+=1) {
            runningTotal += (i*i);
        }
        
        return runningTotal;
    },
    squareOfSums = function () {
        var runningTotal = 0;
        for (i = 1; i <= numberOfIterations; i += 1) {
            runningTotal += i;
        }
        
        return (runningTotal * runningTotal);
    };

var sum = sumOfSquares(),
    square = squareOfSums(),
    total = sum;

    total = square - sum;

console.log(total);
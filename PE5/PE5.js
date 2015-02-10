var checkDivisibleByAll = function (n) {

    for (i = 2; i < 20; i++) {
        if (n % i !== 0) { return false; }
    }
    
    return true;
}


var j = 2,
    done = false;

while (done !== true) {
    if (checkDivisibleByAll(j)) {
         console.log(j);
         done = true;
    } else {
        j += 1;
    }
}
var findTriplet = function (target) {
    var a = 0,
        b = 0,
        c = 0;
    
    while ((a+b+c) !== target) {
        if (a >= b) {
            a = 0;
            b += 1;
        } else { a += 1 }
        
        c = Math.sqrt((a * a) + (b*b));
        
    }
    
    console.log(a*b*c);
};

findTriplet(1000);
var checkPalindrome = function (n) {
    var m = n.toString(),
        regular = "",
        backwards = "";

    for (i = 0; i < (m.length); i++) {
        regular += m.charAt(i);
        backwards += m.charAt((m.length - i - 1));
    }
    
    if (regular === backwards) {return true;} else {return false;}
}

for (a = 100; a < 1000; a += 1) {
    for (b = 100; b < 1000; b += 1) {
        if(checkPalindrome(a * b)) { console.log(a + " * " + b + " = " + (a * b))}        
    }
}
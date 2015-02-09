
var oldFib = 1,
    newFib = 1,
    temp = 0,
    evens = 0;

while ((newFib + oldFib) <= 4000000) {
    temp = newFib;
    newFib += oldFib;
    oldFib = temp;
    
    if (newFib % 2 === 0) {
        evens += newFib;
    }
    
    console.log("newFib =", newFib);
    
    console.log("evens =", evens);
}
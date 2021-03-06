/*var isPrime = function (n) {
    var m = Math.sqrt(n);
    for (var i=2; i<=m; i++) {
        if (n % i == 0) { return false; }
    }
 return true;
}
*/

var isPrime = function(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 if (n==leastFactor(n)) return true;
 return false;
}

// leastFactor(n)
// returns the smallest prime that divides n
//     NaN if n is NaN or Infinity
//      0  if n=0
//      1  if n=1, n=-1, or n is not an integer

leastFactor = function(n){
 if (isNaN(n) || !isFinite(n)) return NaN;  
 if (n==0) return 0;  
 if (n%1 || n*n<2) return 1;
 if (n%2==0) return 2;  
 if (n%3==0) return 3;  
 if (n%5==0) return 5;  
 var m = Math.sqrt(n);
 for (var i=7;i<=m;i+=30) {
  if (n%i==0)      return i;
  if (n%(i+4)==0)  return i+4;
  if (n%(i+6)==0)  return i+6;
  if (n%(i+10)==0) return i+10;
  if (n%(i+12)==0) return i+12;
  if (n%(i+16)==0) return i+16;
  if (n%(i+22)==0) return i+22;
  if (n%(i+24)==0) return i+24;
 }
 return n;
}

console.log(isPrime(7));

var target = 600851475143,
    iterator = 0,
    biggest = 0;

while (iterator < 10000) {
    if (isPrime(iterator)) {
        if (target % iterator == 0) {
            console.log("Prime Factor: ", iterator);
            if (iterator > biggest) { biggest = iterator; }
        }
    }
    iterator += 1;
}

console.log("Biggest Prime Factor: ", biggest);
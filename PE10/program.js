var isPrime = function(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 if (n==leastFactor(n)) return true;
 return false;
};

// leastFactor(n)
// returns the smallest prime that divides n
//     NaN if n is NaN or Infinity
//      0  if n=0
//      1  if n=1, n=-1, or n is not an integer

var leastFactor = function(n) {
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
};

var primes = [],
    sumOfPrimes = 0;

for (i = 2; i < 2000000; i += 1) {
    if (isPrime(i)) { primes.push(i); }
}

for (j = 0; j < primes.length; j += 1) {
    sumOfPrimes += primes[j];
}

console.log(sumOfPrimes);
function primeNumber(n: number): boolean {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(primeNumber(11)); 
  console.log(primeNumber(13)); 
  console.log(primeNumber(17)); 
  console.log(primeNumber(20)); 
  console.log(primeNumber(35)); 



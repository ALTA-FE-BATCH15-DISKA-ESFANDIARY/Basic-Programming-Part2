function Palindrome(word: string): boolean {
    let len: number = word.length;
    let i: number;
    for (let i: number = 0; i < Math.floor(len / 2); i++) {
      if (word[i] !== word[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(Palindrome('civic')); 
  console.log(Palindrome('katak')); 
  console.log(Palindrome('kasur rusak')); 
  console.log(Palindrome('kupu-kupu')); 
  console.log(Palindrome('lion')); 
  
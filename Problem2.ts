let bilangan: number = 20;
let faktorBilangan: number[] = [];

for (let i: number = 1; i <= bilangan; i++) {
  if (bilangan % i === 0) {
    faktorBilangan.push(i);
  }
}

console.log(faktorBilangan);





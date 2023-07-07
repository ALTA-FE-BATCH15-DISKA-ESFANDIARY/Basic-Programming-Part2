function checkGrade(score: number): void {
    switch (true) {
      case score >= 80 && score <= 100:
        console.log("Nilai: A");
        break;
      case score >= 65 && score <= 79:
        console.log("Nilai: B+");
        break;
      case score >= 50 && score <= 64:
        console.log("Nilai: B");
        break;
      case score >= 35 && score <= 49:
        console.log("Nilai: C");
        break;
      case score >= 0 && score <= 34:
        console.log("Nilai: D");
        break;
      default:
        console.log("INVALID");
        break;
    }
  }
  
  checkGrade(30);
  checkGrade(80)
  checkGrade(70)





// function checkGrade(score: number): void {
//     if (score >= 80 && score <= 100) {
//       console.log("Nilai: A");
//     } else if (score >= 65 && score <= 79) {
//       console.log("Nilai: B+");
//     } else if (score >= 50 && score <= 64) {
//       console.log("Nilai: B");
//     } else if (score >= 35 && score <= 49) {
//       console.log("Nilai: C");
//     } else if (score >= 0 && score <= 34) {
//       console.log("Nilai: D");
//     } else {
//       console.log("INVALID");
//     }
//   }
  
//   checkGrade(30);













// function checkGrade(score: number): void {
//     switch(score){
//         case 38 :
//             console.log("cum laude")
//             break;
//         case 33 :
//             console.log("good and excellent")
//             break;
//         case 30 :
//             console.log("good")
//             break;
//         default :
//             console.log("don't give up!")
//             break
//     }
// }

// checkGrade(30)
// checkGrade(36)
// checkGrade(27)
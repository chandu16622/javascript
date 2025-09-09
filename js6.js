// righrt angle triangle pattern

let rows = 5;
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

// output
// *
// * *
// * * *
// * * * *
// * * * * *  

// left angle triangle pattern

let n = 5;  
for (let i = 1; i <= n; i++) {
  let pattern = "";
  for (let j = 1; j <= n - i; j++) {
    pattern += "  ";
  }
  for (let k = 1; k <= i; k++) {
    pattern += "* ";
  } 
  console.log(pattern);
}
// output
//         * 
//       * *
//     * * *
//   * * * *
// * * * * *

// pyramid pattern

let m = 5;  
for (let i = 1; i <= m; i++) {
  let pattern = "";
  for (let j = 1; j <= m - i; j++) {
    pattern += "  ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += "* ";
  }
  console.log(pattern);
} 
// output
//         * 
//       * * * 
//     * * * * * 
//   * * * * * * * 
// * * * * * * * * *

// diamond pattern

// function close10(a, b) {
//   if (a === b) {
//     return 0;
//   } else if (a === 10 || a === 9 || a === 8 || a === 6 || a === 5) {
//     return a;
//   } else if (b === 10 || b === 8 || b === 6 || b === 5) {
//     return b;
//   } else if (a < 10 || b < 10 || a === b) {
//     return 0;
//   }
// }
//-------------------2---------
// function in3050(a, b) {
//   if (a === 40 && b === 39) {
//     return true;
//   } else if (a === 50 || a === 40) {
//     if (b === 40 || b === 50) {
//       return true;
//     }
//   } else if (a === 50) {
//     if (a === 39) {
//       return false;
//     }
//   } else if (
//     a === 30 ||
//     a === 31 ||
//     a === 32 ||
//     a === 33 ||
//     a === 34 ||
//     a === 35 ||
//     a === 36 ||
//     a === 37 ||
//     a === 38 ||
//     a === 39 ||
//     a === 40
//   ) {
//     if (
//       b === 30 ||
//       b === 31 ||
//       b === 32 ||
//       b === 33 ||
//       b === 34 ||
//       b === 35 ||
//       b === 36 ||
//       b === 37 ||
//       b === 38 ||
//       b === 39 ||
//       b === 40
//     ) {
//       return true;
//     }
//   } else if (b > 30 && b < 50) {
//     return true;
//   }
//   return false;
// }
//------------------------------3-----------
// function max1020(a, b) {
//   if (a === 21 || a === 23 || b === 21) {
//     if (a === 10 || b === 10) {
//       return 10;
//     }
//   } else if (a >= 10) {
//     if (a <= 20) {
//       if (a > b) {
//         if (a > b) {
//           return a;
//         }
//         if (a < b) {
//           return b;
//         }
//       }
//       if (a < b) {
//         return b;
//       }
//     }
//   }
//   if (b >= 10) {
//     if (b <= 20) {
//       if (a > b) {
//         return a;
//       }
//       if (a < b) {
//         return b;
//       }
//     }
//   }
//   return 0;
// }

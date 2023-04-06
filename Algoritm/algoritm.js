// function hasTeen(a, b, c) {
//   if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19)) {
//     return true;
//   }
//   return false;
// }
//-------------------2---------
// function loneTeen(a, b) {
//   if (
//     a == b ||
//     (a === 13 && b === 19) ||
//     (b > 13 && b < 19 && a > 13 && a < 19)
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// }
//------------------------------3-----------
// function delDel(str) {
//   if (str.charAt(1) + str.charAt(2) + str.charAt(3) === "del") {
//     return str.charAt(0) + str.slice(4);
//   }
//   return str;
// }
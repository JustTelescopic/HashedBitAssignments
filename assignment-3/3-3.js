
let string = 'INDIA';
let arr = string.split('');
arr.splice(2, 1, 'O', 'N', 'E', 'S', 'I', 'A');
let result = arr.join('');
console.log(result); // "INDONESIA"
  
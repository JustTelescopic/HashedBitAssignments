
function repeatedSumOfDigits(num) {
  while (num >= 10) {
    num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return num;
}

console.log(repeatedSumOfDigits(456)); // 6
  
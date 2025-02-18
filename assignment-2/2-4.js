function sumOfDigitProducts(n1, n2) {
    // Convert both numbers to strings for easier digit manipulation
    const strN1 = n1.toString();
    const strN2 = n2.toString();
  
    // Make both strings the same length by padding the shorter one with leading zeros
    const maxLength = Math.max(strN1.length, strN2.length);
    const paddedN1 = strN1.padStart(maxLength, '0');
    const paddedN2 = strN2.padStart(maxLength, '0');
  
    let sum = 0;
  
    // Iterate through the digits of both numbers and calculate the product of corresponding digits
    for (let i = 0; i < maxLength; i++) {
      sum += parseInt(paddedN1[i]) * parseInt(paddedN2[i]);
    }
  
    return sum;
  }
  
  // Example usage:
  const n1 = 63;
  const n2 = 34;
  console.log(`The sum of the products of corresponding digits is: ${sumOfDigitProducts(n1, n2)}`);
  
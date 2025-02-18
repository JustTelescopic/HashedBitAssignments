const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findTax(salary) {
  let taxRate;
  let taxPercentage;

  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxRate = 0;
      taxPercentage = '0%';
      break;
    case (salary > 500000 && salary <= 1000000):
      taxRate = 0.10;
      taxPercentage = '10%';
      break;
    case (salary > 1000000 && salary <= 1500000):
      taxRate = 0.20;
      taxPercentage = '20%';
      break;
    case (salary > 1500000):
      taxRate = 0.30;
      taxPercentage = '30%';
      break;
    default:
      taxRate = 0;  // If salary is 0 or less, no tax
      taxPercentage = '0%';
  }

  const taxAmount = salary * taxRate;
  return { taxAmount, taxPercentage };
}

// Prompt the user to enter salary
rl.question('Please enter your salary: ', (input) => {
  const salary = parseFloat(input);

  if (!isNaN(salary) && salary > 0) {
    const { taxAmount, taxPercentage } = findTax(salary);
    console.log(`For a salary of ₹${salary}, the tax rate is ${taxPercentage}, and the tax amount is ₹${taxAmount}`);
  } else {
    console.log("Please enter a valid salary.");
  }

  rl.close(); // Close the readline interface
});

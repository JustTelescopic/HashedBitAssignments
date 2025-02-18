// question1.js - Display even numbers from 1 to 100

function displayEvenNumbers() {
    // Method 1: Using a for loop with increment of 2
    console.log("Method 1: Using for loop with increment of 2");
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }
    
    // Method 2: Using a for loop with conditional check
    console.log("\nMethod 2: Using for loop with conditional check");
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
    
    // Method 3: Using Array.filter
    console.log("\nMethod 3: Using Array.filter");
    const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log(evenNumbers.join('\n'));
}

// Execute the function
displayEvenNumbers();
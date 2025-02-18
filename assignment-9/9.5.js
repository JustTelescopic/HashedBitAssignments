
      // Using filter() to remove even numbers from an array
      function filterEvenNumbers(arr) {
        return arr.filter(num => num % 2 !== 0);
      }

      const numbers = [1, 2, 3, 4, 5];
      console.log("Odd numbers:", filterEvenNumbers(numbers));
    
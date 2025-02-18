
      // Function that modifies an array by adding and removing an element
      function modifyArray(arr) {
        arr.push('New Fruit');
        arr.pop();
        return arr;
      }

      const fruits = ['Apple', 'Banana', 'Orange'];
      console.log("Modified array:", modifyArray(fruits));
    
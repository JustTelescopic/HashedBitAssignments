
      // Function that merges two objects using Object.assign()
      function mergeObjects(obj1, obj2) {
        return Object.assign({}, obj1, obj2);
      }

      const obj1 = { name: "John" };
      const obj2 = { age: 30 };
      console.log("Merged object:", mergeObjects(obj1, obj2));
    
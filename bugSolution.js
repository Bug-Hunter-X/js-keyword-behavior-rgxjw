function myFunc() {
  console.log(this);
}

// Explicitly set 'this' using bind()
const boundMyFunc = myFunc.bind({ name: "Bound Object" });
boundMyFunc(); // Logs { name: "Bound Object" }

// Set 'this' using call()
myFunc.call({ name: "Called Object" }); // Logs { name: "Called Object" }

// Set 'this' using apply()
myFunc.apply({ name: "Applied Object" }); // Logs { name: "Applied Object" }

// In a method
const myObject = {
  myMethod: function() {
    console.log(this); // 'this' refers to myObject
  }
};
myObject.myMethod(); // Logs myObject
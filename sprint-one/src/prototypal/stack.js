var Stack = function() {
  // need a newStack to store methods
    // create with Objects.create(**insert stackMethods here**)
  var newStack = Object.create(stackMethods);
  // declare shared 'variables'
    // in our case, definitions of the property
  newStack.count = 0;
  newStack.storage = {};
  
  // return the newStack
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  // count = this.count;
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  this.count--;
  return this.storage[this.count];
};

stackMethods.size = function() {
  return this.count > 0 ? this.count : 0;
};

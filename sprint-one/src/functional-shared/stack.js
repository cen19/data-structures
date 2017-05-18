var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newStack = {};
  newStack.storage = {};
  newStack.count = 0;
  extend(newStack, stackMethods);
  
  return newStack;
  
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
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

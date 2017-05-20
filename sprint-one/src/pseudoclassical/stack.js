var Stack = function() {
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};
Stack.prototype.pop = function () {
  this.count--;
  return this.storage[this.count];
};
Stack.prototype.size = function() {
  return this.count < 0 ? 0 : this.count;
};



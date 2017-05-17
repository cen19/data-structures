var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let nextPerson = 0;
  var first = -1;
  let size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[nextPerson] = value;
    size++;
    nextPerson++;
  };

  someInstance.dequeue = function() {
    size--;
    first++;
    return storage[first];

    // return storage;
  };

  someInstance.size = function() {
    return size < 0 ? 0 : size;
  };

  return someInstance;
};

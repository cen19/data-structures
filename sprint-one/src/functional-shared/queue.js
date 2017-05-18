var Queue = function() {
  // declaring a new variable_Object to store functions as values
  var newQueue = {};
  // declaring shared 'variables' to be used in the methods/functions
  newQueue.storage = {};
  newQueue.queueSize = 0; // size of the queue
  newQueue.firstPlace = -1; // position of 'first person'
  newQueue.nextQueuePerson = 0;
  
  extend(newQueue, queueMethods);
  // return the answers produced from invoking functions?
  return newQueue;
};

// define extend function
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};
// creating methods inside queueMethods
queueMethods.enqueue = function(value) {
  this.storage[this.nextQueuePerson] = value;
  this.queueSize++;
  this.nextQueuePerson++;
};

queueMethods.dequeue = function() {
  // returns the next person whom will leave the queue
  this.queueSize--;
  this.firstPlace++;
  return this.storage[this.firstPlace];
};

// can't have newQueue key's have the same name as queueMethod's key
queueMethods.size = function() {
  return this.queueSize > 0 ? this.queueSize : 0;
};

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.queueSize = 0; // size of the queue
  newQueue.firstPlace = -1; // position of 'first person'
  newQueue.nextQueuePerson = 0;
  
  return newQueue;
  
};

var queueMethods = {};

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

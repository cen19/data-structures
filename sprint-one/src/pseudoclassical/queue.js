var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  this.storage = {};
  this.queueSize = 0;
  this.firtPlace = -1;
  this.nextQueuePerson = 0;
  
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.nextQueuePerson] = value;
  this.queueSize++;
  this.nextQueuePerson++;
  
};

Queue.prototype.dequeue = function() {
  this.queueSize--;
  this.firtPlace++;
  return this.storage[this.firtPlace];
};

Queue.prototype.size = function() {
  return this.queueSize > 0 ? this.queueSize : 0;
};



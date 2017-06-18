var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);


  // check if there is a bucket at the key
    // bucket is an element at the array index (storage in this case)
  // get the bucket
  var bucket = this._storage.get(index);
  if (!bucket) { // if no bucket, we need to make one
    bucket = [];
    this._storage.set(index, bucket);
  }

  var checker = false; // checking if the key exists in the bucket

  // check if the key already exists
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i]; // sets tuple to equal to current element of bucket
    if (tuple[0] === k) { // if tuple's key exists
      tuple[1] = v;  // update value to avoid collision?
      checker = true; // key is found so we change it to true
      break; // break out of loop because we want to only have one unique key for each bucket
    }
  }
  // loop finished checking for existing key and updating
    // if it didn't find a matching key
  if (!checker) { // if not found, insert it now
    // push it in now
    bucket.push([k, v]);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // check if bucket exists
  var bucket = this._storage.get(index); // looks up in the storage array to look for the bucket
  if (!bucket) { // if bucket doesn't exist, make it
    return null; // there is no bucket meaning it was never made after the hash gave us our index, no bucket = no tuple
  }

  // iterate over the bucket's tuples for the [0] index key
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

  // if not found, return undefined
  return undefined;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // check for bucket
  var bucket = this._storage.get(index);
  if (!bucket) {
    return null;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      // key is found so remove it
      bucket.splice(i, 1);
      return tuple[1];
    }
  }

  return undefined;
 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



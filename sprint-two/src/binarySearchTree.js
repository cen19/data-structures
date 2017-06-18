var BinarySearchTree = function(value) {
  // need to have a Object.create to make the prototype of the tree
  var binaryTree = Object.create(binaryTreePrototype);
  binaryTree.value = value;
  // traversing left and right
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
};

var binaryTreePrototype = {};

binaryTreePrototype.insert = function(value) {
  // inserts a value into the tree which is in itself a tree
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    // goes to the right because it is greater than the 'root'
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    // do nohting: the tree already contains this value
  }
};

binaryTreePrototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.valueue) {
    return !!(this.left && this.left.contains(value));
  } else if (value > this.value) {
    return !!(this.right && this.right.contains(value));
  }
};

binaryTreePrototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

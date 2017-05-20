var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) { // target the value prop inside the first tree
    return true;
  }
  // console.log(this);
  // console.log(this.value);

};



/*
 * Complexity: What is the time complexity of the above functions?

  Time complexity for :

  addChild:

  contains:

 */



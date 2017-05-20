var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 
  
  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var exists = false;
  var childrenChecker = function (array, target) {

    for (var i = 0; i < array.length; i++) {
      if (array[i].value === target) {
        exists = true; // if true, return boolean
      }
      childrenChecker(array[i].children, target);
    }
    return exists;
  };
  
  return childrenChecker(this.children, target);
};



/*
 * Complexity: What is the time complexity of the above functions?

  Time complexity for :

  addChild:

  contains:

 */



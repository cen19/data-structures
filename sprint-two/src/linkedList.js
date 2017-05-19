var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null && list.tail === null) {
      var beginningNode = Node(value);
      list.head = beginningNode;
      list.tail = beginningNode;
    }
    var newNode = Node(value);
    
    // if (list.head.next === null) {
    //   list.head.next = newNode;
    // }

    list.tail = newNode;
    
    // #1 situation : list is empty
      // we need to have one 'node' which can be considered both head and tail
    // #2 situation : we have one 'node' so far
  };

  list.removeHead = function() {
    // var finalVal = list.head.value;
    // new head designated below
    list.head = list.head.next;
    return list.head.value;
  };

  list.contains = function(target) {
    // start from head
      // look up value
        // if it exists
        // return boolean === true;
          // if it reaches end without matches, return false
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 
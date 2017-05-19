var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.previousNode = null;
  
  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail = Node(value);
      list.previousNode = list.tail;
      if (list.head.next === null) {
        list.head.next = list.previousNode;
      } else {
        list.previousNode.next = list.tail;
      }
    }
  };

  list.removeHead = function() {
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
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
 
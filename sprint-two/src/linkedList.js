var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      var nextNode = Node(value);
      if (list.head.next === null) {
        list.head.next = nextNode;
      } else {
        list.tail.next = nextNode;
      }
      list.tail = nextNode;
    }
   
  };

  list.removeHead = function() {
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };   

  list.contains = function(target) {
    var starter = list.head;
    var exists = false;

    while (starter) {
      if (starter.value === target) {
        exists = true;
        break;
      } else {
        starter = starter.next;
      }
    }

    return exists;
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
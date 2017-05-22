// Instantiate a new graph
var Graph = function() {
  // this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // goes into storage and sets property to [node]
    // 'value' is an object-literal with prop has [node]: node
  // this.storage[node] = {[node]: node};
  this[node] = {[node]: node};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // mental map 
  // storage: {
  //   [node]: {
  //     [node]: node;
  //   }
  // }
  // return this.storage[node][node] === node;
  return !!this[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // check if the node object has any other things
  
  // delete the pointers
  // delete this[node][!node];
  delete this[node];


};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // var exists = (this.storage[fromNode] && this.storage[toNode]);
  // if (exists) {
  //   return (this.storage[fromNode][toNode] === toNode) && (this.storage[toNode][fromNode] === fromNode);
  // }
  // return exists;

  var exists = this[fromNode] && this[toNode];
  if (exists) {
    // debugger;
    return (this[fromNode][toNode] === this[toNode]) && this[toNode][fromNode] === this[fromNode];
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // console.log(this);
  // // console.log(this.storage);
  // this.storage[fromNode][toNode] = toNode;
  // this.storage[toNode][fromNode] = fromNode; 
  this[fromNode][toNode] = this[toNode];
  this[toNode][fromNode] = this[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // // determine if there is an edge between them at all
  if ((this[fromNode][toNode] === this[toNode]) && (this[toNode][fromNode] === this[fromNode])) {
    delete this[fromNode][toNode];
    delete this[toNode][fromNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // debugger;

  for (var node in this) {
    cb(node);
  }
  console.log(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */ 



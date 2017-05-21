// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  // this.count = 0;
  
  

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // this.storage.edge = null; 
  this.storage[node] = node;
  // this.count++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node] === node) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.storage[node] === node) {
    delete this.storage[node;
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // var exists = this.storage.fromNode && this.storage.toNode;
  // if (exists) {
  //   //check if it has an edge
  //   if (this.storage.fromNode.edge === this.storage.toNode && this.storage.toNode.edge === this.storage.fromNode) {
  //     return true;
  //   } else {
  //     return false;
  //   }
    
  // } else {
  //   return false;
  // }
  
  console.log(this.storage);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage.fromNode.edge = this.storage.toNode;
  this.storage.toNode.edge = this.storage.fromNode; 
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



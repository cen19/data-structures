// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {node: node};
  // add edges property as object when invoking addEdges
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage[node].node === node;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.storage[node].node === node) {
    delete this.storage[node].node;
  }
  if ()
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  // check if both nodes even exist right now
  var exists = (this.storage[fromNode] && this.storage[toNode]);
  if (exists) {
    // debugger;
    return (this.storage[fromNode][toNode] === toNode) && (this.storage[toNode][fromNode] === fromNode);
  }   
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  console.log(this.storage);
  // console.log(this.storage);
  this.storage[fromNode][toNode] = toNode;
  this.storage[toNode][fromNode] = fromNode; 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // determine if there is an edge between them at all
  if ((this.storage[fromNode][toNode] === toNode) && (this.storage[toNode][fromNode] === fromNode)) {
    delete this.storage[fromNode][toNode];
    delete this.storage[toNode][fromNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



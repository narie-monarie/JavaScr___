"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdjacencyList = void 0;
class AdjacencyList {
    constructor(numVertices) {
        this.adjacencyList = new Map();
        for (let i = 0; i < numVertices; i++) {
            this.adjacencyList.set(i, []);
        }
    }
    get numVertices() {
        return this.adjacencyList.size;
    }
    addEdge(v, w) {
        this.adjacencyList.get(v).push(w);
        this.adjacencyList.get(w).push(v);
    }
    getNeighbors(v) {
        return this.adjacencyList.get(v);
    }
}
exports.AdjacencyList = AdjacencyList;
const graph = new AdjacencyList(5);
graph.addEdge(0, 1);
graph.addEdge(0, 4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
console.log(graph.getNeighbors(0)); // [1, 4]
console.log(graph.getNeighbors(1)); // [0, 2, 3, 4]
console.log(graph.getNeighbors(2)); // [1, 3]
console.log(graph.getNeighbors(3)); // [1, 2, 4]
console.log(graph.getNeighbors(4)); // [0, 1, 3]

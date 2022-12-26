interface Graph {
    // Number of vertices in the graph
    readonly numVertices: number;
    // Add an edge between two vertices
    addEdge(v: number, w: number): void;
    // Get the list of neighbors for a given vertex
    getNeighbors(v: number): number[];
}

export class AdjacencyList implements Graph {
    private adjacencyList: Map<number, number[]>;

    constructor(numVertices: number) {
        this.adjacencyList = new Map();
        for (let i = 0; i < numVertices; i++) {
            this.adjacencyList.set(i, []);
        }
    }

    get numVertices(): number {
        return this.adjacencyList.size;
    }

    addEdge(v: number, w: number): number | any {
        this.adjacencyList.get(v).push(w);
        this.adjacencyList.get(w).push(v);
    }

    getNeighbors(v: number): any {
        return this.adjacencyList.get(v);
    }
}
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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
exports.Node = Node;
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                else {
                    currentNode = currentNode.left;
                }
            }
            else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                else {
                    currentNode = currentNode.right;
                }
            }
        }
    }
    find(value) {
        let currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            }
            else if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }
}
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);
console.log(tree.find(5)); // true
console.log(tree.find(7)); // true
console.log(tree.find(20)); // false

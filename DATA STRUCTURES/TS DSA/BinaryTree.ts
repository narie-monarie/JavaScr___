export class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    insert(value: number) {
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
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    find(value: number): boolean {
        let currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
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
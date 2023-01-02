export class Node {
    public value: number;
    public right: Node | null;
    public left: Node | null;

    constructor(value: number) {
        this.value = value;
    }
}
class BinaryTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    public insert(value: number) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left == null) {
                        current.left = newNode;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right == null) {
                        current.right = newNode;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
}

const Binary = new BinaryTree();
Binary.root = new Node(12);
Binary.root.right = new Node(10);
Binary.root.left = new Node(8);

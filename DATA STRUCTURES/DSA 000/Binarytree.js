class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (this.value > value) {
            if (this.left === null) {
                this.left = new BinaryTree(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BinaryTree(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    contains(value) {
        if (this.value === value) {
            return true;
        }

        if (value < this.value) {
            if (this.left === null) {
                return false;
            } else {
                return this.left.contains(value);
            }
        } else {
            if (this.right === null) {
                return false;
            } else {
                return this.right.contains(value);
            }
        }
    }

    preOrder() {
        console.log(this.value);

        if (this.left !== null) {
            this.left.preOrder();
        }

        if (this.right !== null) {
            this.right.preOrder();
        }
    }

    inOrder() {
        if (this.left !== null) {
            this.left.inOrder();
        }
        console.log(this.value);

        if (this.right !== null) {
            this.right.inOrder();
        }
    }

    postOrder() {
        if (this.left !== null) {
            this.left.postOrder();
        }

        if (this.right !== null) {
            this.right.postOrder();
        }

        console.log(this.value);
    }
}

const tree = new BinaryTree(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log(tree.contains(7)); // true
console.log(tree.contains(1)); // false

console.log("Pre-order traversal:");
tree.preOrder();
// Output: 5 3 2 4 7 6 8

console.log("In-order traversal:");
tree.inOrder();
// Output: 2 3 4 5 6 7 8

console.log("Post-order traversal:");
tree.postOrder();
// Output: 2 4 3 6 8 7 5

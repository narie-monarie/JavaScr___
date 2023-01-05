"use strict";
//It is non-linear unlike LinkedLists
exports.__esModule = true;
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
    return Node;
}());
exports.Node = Node;
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.add = function (value) {
        var newNode = new Node(value);
        //if the root is empty use the newNode as the new root
        if (!this.root) {
            this.root = newNode;
        }
        var temp = this.root;
        while (true) {
            //if the new node is in the tree, we cannot insert
            //the Node in the tree
            if (newNode.value === temp.value) {
                return false;
            }
            //if the newNode's value is less than the root value
            //then move it to the left
            if (newNode.value < temp.value) {
                //if there's no Node on the left of the root,
                //we insert on the left
                if (!temp.left) {
                    temp.left = newNode;
                    return true;
                }
                temp = temp.left;
            }
            else {
                if (!temp.right) {
                    temp.right = newNode;
                    return true;
                }
                temp = temp.right;
            }
        }
    };
    BinarySearchTree.prototype.contains = function (val) {
        if (!this.root) {
            console.log("No value in the Tree");
        }
        var temp = this.root;
        while (temp) {
            if (val === temp.value) {
                return true;
            }
            else if (temp.value > val) {
                temp = temp.left;
            }
            else {
                temp = temp.right;
            }
        }
        return false;
    };
    return BinarySearchTree;
}());
var tree = new BinarySearchTree();
tree.add(12);
tree.add(121);
tree.add(1);
tree.add(7);
tree.add(5);
console.log(tree.contains(12));
console.log(tree.contains(5));

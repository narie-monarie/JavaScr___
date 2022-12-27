"use strict";
exports.__esModule = true;
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    LinkedList.prototype.prepend = function (val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    };
    LinkedList.prototype.traverse = function () {
        var current = this.head;
        while (current) {
            console.log("".concat(current.value));
            current = current.next;
        }
    };
    return LinkedList;
}());
var list = new LinkedList;
list.prepend(12);
list.prepend(8);
list.traverse();
console.log("The length of the LinkedList is ".concat(list.length));

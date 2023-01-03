"use strict";
exports.__esModule = true;
exports.Node = void 0;
console.log("Implementation using arrays");
var stack = [];
stack.push("google");
stack.push("instagram");
stack.push("youtube");
console.log(stack);
console.log('popping the stack');
stack.pop();
console.log(stack);
console.log();
console.log();
console.log();
console.log("Implementing using a linked list");
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var Stack = /** @class */ (function () {
    function Stack() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    Stack.prototype.push = function (value) {
        var newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return this.size++;
    };
    Stack.prototype.printlist = function () {
        var current = this.first;
        var x = 0;
        while (current != null) {
            console.log("Current ".concat(x, " of stack ").concat(current.value, " "));
            current = current.next;
            x--;
        }
    };
    Stack.prototype.pop = function () {
        if (!this.first) {
            return 0;
        }
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    };
    return Stack;
}());
stack = new Stack();
stack.push(1);
stack.push(12);
stack.push(2);
stack.push(120);
stack.push(111);
stack.pop();
stack.printlist();

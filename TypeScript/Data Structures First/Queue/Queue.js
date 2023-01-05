"use strict";
//implementing stacks using arrays
exports.__esModule = true;
exports.Node = void 0;
var list = [];
list.push(12);
list.push(20);
list.push(11);
list.push(21);
list.shift();
console.log(list);
console.log();
console.log();
console.log();
console.log();
//implementing using a linkedlist
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var Queue = /** @class */ (function () {
    function Queue() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    Queue.prototype.enqueue = function (value) {
        var newNode = new Node(value);
        if (!this.last) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return this.size++;
    };
    Queue.prototype.printQueue = function () {
        var current = this.first;
        while (current != null) {
            console.log(current.value);
            current = current.next;
        }
    };
    Queue.prototype.dequeue = function () {
        if (!this.first) {
            return null;
        }
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(12);
queue.enqueue(120);
queue.enqueue(102);
queue.enqueue(121);
queue.dequeue();
queue.printQueue();

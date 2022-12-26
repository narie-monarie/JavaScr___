"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
exports.Node = Node;
class LinkedList {
    constructor() {
        this.head = null;
    }
    addToHead(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    removeFromHead() {
        if (!this.head) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }
    find(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
    remove(value) {
        if (!this.head) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                return;
            }
            currentNode = currentNode.next;
        }
    }
    traverse() {
        var current = this.head;
        while (current) {
            process.stdout.write(current.value + '->');
            current = current.next;
        }
    }
}
const list = new LinkedList();
list.addToHead(12);
list.addToHead(13);
list.addToHead(131);
list.addToHead(31);
list.remove(13);
console.log(list.traverse());

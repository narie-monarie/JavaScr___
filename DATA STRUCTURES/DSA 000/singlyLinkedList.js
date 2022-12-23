//Piece of data val
//reference to Next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    traverse() {
        var current = this.head;
        while (current) {
            process.stdout.write(current.val + '->');
            current = current.next;
        }
    }

    pop() {
        if (!this.head) {
            console.log('no tail || head available');
        }
        var previous = this.head;
        var current = previous;

        while (previous.next) {
            current = previous;
            previous = previous.next;
        }
        this.tail = current;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return previous;
    }

    shift() {
        if (!this.head) return undefined;
        var prevHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return prevHead;
    }
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    get(index) {
        if (index >= this.length || index < 0)
            return null;
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        var foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val
            return true;
        }
        return false
    }
}

var list = new SinglyLinkedList();
list.push(12);
list.push(16);
list.push(31);
list.pop();
list.shift();
list.unshift(21);
list.set(1, 12)
console.log(list.get(1))
console.log('The length of the linked list is now: ' + list.length);
console.log(list.traverse());

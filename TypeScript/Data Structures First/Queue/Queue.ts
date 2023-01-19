//implementing stacks using arrays

let list: number[] = [];
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

export class Node {
    public value: number;
    public next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    public first: Node | null;
    public last: Node | null;
    public size: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    public enqueue(value: number) {
        var newNode = new Node(value);
        if (!this.last) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return this.size++;
    }
    public printQueue() {
        var current = this.first;

        while (current != null) {
            console.log(current.value);
            current = current.next;
        }
    }

    public dequeue() {
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
    }
}

let queue = new Queue();
queue.enqueue(12)
queue.enqueue(120)
queue.enqueue(102)
queue.enqueue(121)
queue.dequeue()
queue.printQueue()

export class Node {
    public value: any;
    public next: Node | null;

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    public head: Node | null;

    constructor() {
        this.head = null;
    }

    public addToHead(value: any): void {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    public removeFromHead(): any {
        if (!this.head) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    public find(value: any): Node | null {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    public remove(value: any): void {
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
    public traverse() {
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

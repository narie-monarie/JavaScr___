console.log("Implementation using arrays")

let stack: any = [];
stack.push("google");
stack.push("instagram");
stack.push("youtube");
console.log(stack)
console.log('popping the stack')
stack.pop();
console.log(stack)
console.log();
console.log();
console.log();

console.log("Implementing using a linked list");

export class Node {
  public value: any
  public next: Node | null

  constructor(value: any) {
    this.value = value
    this.next = null
  }
}

class Stack {
  public first: Node | null
  public last: Node | null
  public size: number

  constructor() {
    this.first = null;
    this.last = null
    this.size = 0
  }

  public push(value: any): number {
    let newNode = new Node(value)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      var temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    return this.size++
  }
  public printlist() {
    let current = this.first
    var x = 0
    while (current != null) {
      console.log(`Current ${x} of stack ${current.value} `)
      current = current.next
      x--;
    }
  }

  public pop(): number {
    if (!this.first) {
      return 0
    }
    var temp = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
  }

}

stack = new Stack()
stack.push(1)
stack.push(12)
stack.push(2)
stack.push(120)
stack.push(111)
stack.pop()
stack.printlist()



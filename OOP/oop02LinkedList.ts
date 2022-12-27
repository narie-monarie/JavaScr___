export class Node {
  public value: number
  public next: Node | null
  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  public head: Node | null
  public tail: Node | null
  public length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  public prepend(val: number): void {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
  }

  public traverse(): void {
    let current = this.head
    while (current) {
      console.log(`${current.value}`)
      current = current.next
    }
  }
}

const list = new LinkedList
list.prepend(12)
list.prepend(8)
list.traverse()
console.log(`The length of the LinkedList is ${list.length}`)

//https://www.typescriptlang.org/docs/handbook/2/generics.html

class MyListNode<T> {
  val: T | null;
  next: MyListNode<T> | null;
  constructor(val?: T | null, next?: MyListNode<T> | null) {
    this.val = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
  }
}

function iterateListNode() {
  let secondLN: MyListNode<number> = new MyListNode<number>(2);
  let firstLN: MyListNode<number> = new MyListNode<number>(1, secondLN);
  // start current from the first
  let current = firstLN;
  while (current.next !== null) {
    // deal with the value
    console.log(current.val);
    // move to the next
    current = current.next;
  }
  // now deal with the last
  console.log(current.val);
}

iterateListNode();

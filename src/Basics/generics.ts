class ListNode<T> {
  val: T | null;
  next: ListNode<T> | null;
  constructor(val?: T | null, next?: ListNode<T> | null) {
    this.val = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
  }
}

function iterateListNode() {
  let secondLN: ListNode<number> = new ListNode<number>(2);
  let firstLN: ListNode<number> = new ListNode<number>(1, secondLN);
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

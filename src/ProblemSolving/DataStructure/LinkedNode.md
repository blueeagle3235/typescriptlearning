# Linked Node

A linked list is a chain of linked nodes.

As array is fixed, linked nodes are dynamic. while loop is often used with stack.

```js
class ListNode<T> {
  val: T;
  next: ListNode<T> | null;
  constructor(val?: T, next?: ListNode<T> | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
```

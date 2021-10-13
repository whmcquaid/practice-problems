var addTwoNumbers = function (l1, l2) {
  let head = new ListNode() // create a new node
  let pointer = head // create a pointer to operate on new node
  let carry = 0 // variable to carry the one if sum > 10
  while (l1 || l2 || carry) {
    // while we arent at the end of list or need to carry a 1
    let val1 = l1?.val || 0 // set variables careful to avoid nulls
    let val2 = l2?.val || 0
    let sum = val1 + val2 + carry
    pointer.next = new ListNode(sum % 10)
    pointer = pointer.next
    carry = parseInt(sum / 10)
    l1 = l1?.next
    l2 = l2?.next
  }
  return head.next
}

// Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let list3 = list1.concat(list2);
  list3.sort((a, b) => a - b);
  return list3;
};

// case 1
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); // [1, 1, 2, 3, 4, 4]

// case 2
console.log(mergeTwoLists([], [])); // []

// case 3
console.log(mergeTwoLists([], [0])); // [0]

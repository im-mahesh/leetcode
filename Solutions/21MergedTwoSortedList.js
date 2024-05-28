/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const node = new ListNode(0);
    let current = node;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    current.next = list1 || list2;

    return node.next;
};




// BEST SOLUTION
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) return null;
    if (!list1) return list2
    if (!list2) return list1
    let l1 = list1;
    let l2 = list2;
    let curr;
    let newHead;

    while (l1 || l2) {
        if (!l2 || (l1?.val < l2?.val)) {
            if (!curr) newHead = curr = l1;
            else curr = curr.next = l1
            l1 = l1.next
        } else if (!l1 || (l1?.val >= l2?.val)) {
            if (!curr) newHead = curr = l2;
            else curr = curr.next = l2
            l2 = l2.next
        }
    }
    return newHead;
};
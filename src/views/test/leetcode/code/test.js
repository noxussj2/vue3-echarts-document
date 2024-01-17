const l1 = { val: 1, next: { val: 0, next: { val: 2, next: null } } }
const l2 = { val: 9, next: { val: 1, next: null } }

var addTwoNumbers = function (l1, l2) {
    const head = { val: 0, next: null }
    let l3 = head
    let carry = 0

    while (l1 || l2) {
        const v1 = l1 ? l1.val : 0
        const v2 = l2 ? l2.val : 0
        let v3 = v1 + v2

        if (carry) {
            v3 += carry
            carry = 0
        }

        if (v3 > 9) {
            carry = 1
            v3 = v3 - 10
        }

        l3.val = v3

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
        if (l1 || l2) {
            l3.next = { val: 0, next: null }
            l3 = l3.next
        }
    }

    if (carry) {
        l3.next = { val: 1, next: null }
    }

    return head
}

addTwoNumbers(l1, l2)

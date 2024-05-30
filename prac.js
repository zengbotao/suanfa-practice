/*
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2024-03-18 09:18:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-22 12:58:19
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
    constructor() {
        this.head = null; //链表的起始点，用于访问整个链表。头节点保存了第一个实际节点的引用。
      }
  push(element) {
    let node = new Node(element);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
  }
  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let num = index;
      let current = this.head;
        let pre=this.head
      while (index > 0) {
        pre=current
        current = current.next;
        index--;
      }
      pre.next = current.next;
    }
  }
}
let ll=new LinkedList();
ll.push(0)
ll.push(1)
ll.push(2)
ll.removeAt(1)
console.log(ll)
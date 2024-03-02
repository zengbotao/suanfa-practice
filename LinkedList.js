class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
/**
 * @description: 链表的长度可以动态地增加或减少，节点的插入和删除比较高效，不需要移动其他节点。
 * @return {*}
 */
class LinkedList {
  //#灵活性和高效的节点插入和删除操作。
  //然而，链表的缺点是访问节点时需要从头节点开始遍历，无法像数组那样通过索引直接访问元素，访问时间复杂度为 O(n)
  constructor() {
    this.count = 0;
    this.head = null; //链表的起始点，用于访问整个链表。头节点保存了第一个实际节点的引用。
  }

  //给链表的尾部添加节点
  push(element) {
    const node = new Node(element); //获取节点
    //header是空
    if (this.head === null) {
      //看看是不是空链表
      this.head = node;
    } else {
      let current = this.head;  //这一步必不可少
      while (current.next !== null) {
        //条件current.next === null，表示尾部节点
        current = current.next; //否则一直向下找
      }
      current.next = node; 

      // console.log()
    }

    this.count++;
  }
  //指定位置删除
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let previous;

        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }

    return;
  }

  getNodeAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head;

      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    }
    return;
  }

  removeAt2(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let previous = this.getNodeAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return;
  }

  equalFn(a, b) {
    // return a === b
    // 1. 判断是对象， 对象1[key] === 对象2[key]
    // 2. 之前基础上， 写一个递归函数， 深度检查是否相等

    return JSON.stringify(a) === JSON.stringify(b);

    // imumutable （kerwin React视频）
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (this.equalFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }

    return -1;
  }
  remove(element) {
    // 根据数据 返回索引的方法
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  insert(element, index) {
    // 500 , 5
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        //this.head
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getNodeAt(index - 1);
        const current = previous.next;

        node.next = current;
        previous.next = node;
      }

      this.count++;
      return true;
    }

    return false;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }
}

var list = new LinkedList();

function reverseLink(LinkedList){
    if(LinkedList.next===null){
        return LinkedList
    }else{
        let current=LinkedList
        let next
        let pre
        while(next){
            pre.next = next;
            current = current.next;

            next=current.next
        }
        return pre
    }
    
}

/**
 * @description: 反转链表要理解核心
 * @param {*} head
 * @return {*}
 */
function reverseLinkedList(head) { //[1,2,,3]
  let prev = null;
  let current = head;//1->2

  while (current !== null) {
    let next = current.next; //暂存2->3
    current.next = prev; //2->1
    prev = current; //结果缓存2->1
    current = next; //获取下一个节点
  }

  return prev;
}

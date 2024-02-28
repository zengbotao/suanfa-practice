/*
 * @Author: zengbotao 2898487084@qq.com
 * @Date: 2024-02-28 19:21:19
 * @LastEditors: zengbotao 2898487084@qq.com
 * @LastEditTime: 2024-02-28 19:40:08
 * @FilePath: \suanfa-practice\Queue.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Queue {
  #items = {};
  #lowCount = 0;
  #count = 0;

  dequeue() {  //返回队列的第一个对象
    if (this.isEmpty()) {
      return undefined;
    }
    let res = this.#items[this.#lowCount];
    delete this.#items[this.#lowCount];
    this.#lowCount++;
    return res;
  }

  enqueue(data) {
    this.#items[this.#count] = data;
    this.#count++;
  }

  front() {
    return this.#items[this.#lowCount];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.#count - this.#lowCount;
  }

  clear() {
    this.#items = {};
    this.#count = 0;
    this.#lowCount = 0;
  }

  toString() {
    let str = "";
    for (let i = this.#lowCount; i < this.#count; i++) {
      str += `${this.#items[i]} `;
    }
    return str;
  }
}

/**
 * @description: 击鼓传花,list个人，传递num次，
 * @param {*} list
 * @param {*} num 间隔次数
 * @return {*}
 */
function game(list, num) {
  let queue = new Queue();
  for (let i = 0; i < list.length; i++) { //先将数组转化成队列
    queue.enqueue(list[i]);
  }

  while (queue.size() > 1) { //条件是队列长度大于1，看谁坚持到最后
    for (let i = 0; i < num; i++) { 
      queue.enqueue(queue.dequeue()); //先出的再进去，这里循环前进了一步
    }

    console.log(queue.dequeue(), "淘汰了"); //这里必须要删除头
  }

  return queue.dequeue();//
}
console.log(game([1,2,3], 2))
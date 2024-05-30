/*
 * @Author: zengbotao 2898487084@qq.com
 * @Date: 2024-02-28 19:17:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-18 16:42:18
 * @FilePath: \suanfa-practice\stack.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Stack {
  // constructor(){
  //     this.items = []
  // }
  #items = [];

  pop() {
    return this.#items.pop();
  }

  push(data) {
    this.#items.push(data);
  }

  peek() {
    // return this.items[this.items.length-1]
    return this.#items.at(-1);
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  size() {
    return this.#items.length;
  }

  clear() {
    this.#items = [];
  }

  toString() {
    return this.#items.join(" ");
  }
}

/**
 * @description: 进制转换
 * @param {*} decNumber 
 * @param {*} base 进制
 * @return {*}
 */
function convert(decNumber, base) {
  let remStack = new Stack();
  let number = decNumber;
  let string = "";
  let baseString = "0123456789ABCDEF";

  while (number > 0) { //判断条件是number>0,因为最后一个余数也会被加入到栈中
    remStack.push(number % base);
    number = Math.floor(number / base);  //必须要用Math.floor
  }

  while (!remStack.isEmpty()) {
   
    string += baseString[remStack.pop()];
    console.log(string);
  }

  return string;
}

convert(50, 2);

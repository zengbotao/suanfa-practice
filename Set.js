/*
 * @Author: zengbotao 2898487084@qq.com
 * @Date: 2024-02-28 20:55:14
 * @LastEditors: zengbotao 2898487084@qq.com
 * @LastEditTime: 2024-02-28 20:55:40
 * @FilePath: \suanfa-practice\Set.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class KerwinSet {
  //    constructor(){
  //        this.items = {}
  //    }
  items = {};

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  has(element) {
    return element in this.items;
  }

  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.values(this.items); //values()：返回一个新的迭代器对象，包含 Set 中的所有值。迭代器按照插入顺序返回。
  }
}
//ES6 Set
var myset = new Set();

myset.add(100);
myset.add(200);
myset.add(300);

var myiter = myset.values();
console.log(myiter);
console.log(myiter.next());
console.log(myiter.next());
console.log(myiter.next());

for (let i of myiter) {
  console.log(i);
}

console.log([...myiter]);

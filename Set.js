/*
 * @Author: zengbotao 2898487084@qq.com
 * @Date: 2024-02-28 20:55:14
 * @LastEditors: zengbotao 2898487084@qq.com
 * @LastEditTime: 2024-02-28 20:55:40
 * @FilePath: \suanfa-practice\Set.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

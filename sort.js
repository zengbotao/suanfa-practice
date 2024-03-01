/*
 * @Author: zengbotao 2898487084@qq.com
 * @Date: 2024-02-29 20:53:53
 * @LastEditors: zengbotao 2898487084@qq.com
 * @LastEditTime: 2024-02-29 21:47:32
 * @FilePath: \suanfa-practice\sort.js
 * @Description: https://visualgo.net/zh
 */
/**
 * @description: 冒泡排序，双层for循环，内层每循环一次，就少比较一次
 * @param {*} array
 * @return {*}
 */
function bubbleSort(array) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      //结束条件，j < length - 1 - i，i不能少
      if (array[j] > array[j + 1]) {
        //j与j+1比较
        //交换位置的方法
        swap(array, j, j + 1);
      }
    }
  }
  console.log(array);
}

/**
 * @description: 选择排序，内外层结合的方法
 * @param {*} arr
 * @return {*}
 */
function selectionSort(arr) {
  const { length } = arr;
  let indexMin;
  for (let i = 0; i < length - 1; i++) { 
    indexMin = i; //这一步很有必要
    for (let j = i; j < length; j++) { //从i开始,从length结束
      if (arr[indexMin] > arr[j]) {  //比较参数是indexmin和j
        indexMin = j; //永远暂存一个临时最小值的指数，内层的循环只是为了找出这一轮的最小值的index
      }
    }
    if (i !== indexMin) {
      //要判断清楚i与indexMin
      swap(arr, i, indexMin);//
    }
  }
  console.log(arr);
}

function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

/*
 * @Author: zengbotao 2898487084@qq.com
 * @Date: 2024-02-29 20:53:53
 * @LastEditors: zengbotao 2898487084@qq.com
 * @LastEditTime: 2024-03-01 14:55:01
 * @FilePath: \suanfa-practice\sort.js
 * @Description:理解网站 https://visualgo.net/zh
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
    for (let j = i; j < length; j++) {
      //从i开始,从length结束
      if (arr[indexMin] > arr[j]) {
        //比较参数是indexmin和j
        indexMin = j; //永远暂存一个临时最小值的指数，内层的循环只是为了找出这一轮的最小值的index
      }
    }
    if (i !== indexMin) {
      //要判断清楚i与indexMin
      swap(arr, i, indexMin); //
    }
  }
  console.log(arr);
}

/**
 * @description: 插入排序就像打扑克牌一样
 * @param {*} arr
 * @return {*}
 */
function insertSort(arr) {
  const { length } = arr;
  let temp; //存 当前这一轮对应索引的元素值
  for (let i = 1; i < length; i++) {
    //从第二个元素开始比较
    temp = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > temp) {
      //每次循环已读的部分和当前值，已读部分的最后一个要大temp，否则不用进入循环
      arr[j] = arr[j - 1]; //条件满足就移位
      j--;
    }
    arr[j] = temp;
  }
}
insertSort([4, 5, 3, 2, 1]);

/**
 * @description: 归并算法，超级难
 * @param {*} array
 * @return {*}
 */
function mergeSort(array) {
  if (array.length > 1) {
    const { length } = array;
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle, length));
    array = merge(left, right);
  }
  return array;
}
/**
 * @description: 归并算法的子算法，将两个排好序的数组进行合并
 * @param {*} left
 * @param {*} right
 * @return {*}
 */
function merge(left, right) {
  // left [5]
  // right [3,4]
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
    console.log(result);
    //先push ，再++
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

mergeSort([5, 4, 3, 2, 1]);

/**
 * @description: 快速排序，找出基准，递归排序合并
 * @param {*} arr
 * @return {*}
 */
function quickSort(arr) {
  const { length } = arr;
  if (length < 2) { //递归退出的条件
    return arr;
  }
  //基准
  let base = arr[0];
  let minArr = arr.slice(1).filter((item) => item <= base);
  let maxArr = arr.slice(1).filter((item) => item > base);

  return quickSort(minArr).concat(base).concat(quickSort(maxArr));
}
quickSort([3, 4, 5, 2, 1]);

/**
 * @description: 交换两个数组的两个元素
 * @param {*} array
 * @param {*} a
 * @param {*} b
 * @return {*}
 */
function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

var arr = [5, 7, 5, 4, 9, 1];
/**
 * @description: 计数排序正数组
 * @param {*} arr
 * @return {*}
 */
function countSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const maxValue = findMax(arr);
  // const maxValue = Math.max(...arr)
  const counts = new Array(maxValue + 1);
  arr.forEach((item) => {
    if (!counts[item]) {
      counts[item] = 0;
    }
    counts[item]++;
  });
  // console.log(counts)
  let newarr = [];
  let sortIndex = 0;
  counts.forEach((item, index) => {
    console.log(item,index,'计数')
    while (item > 0) {
      newarr[sortIndex++] = index;
      item--;
    }
  });
  return newarr;
}

/**
 * @description: 通过循环找出数组里面的最大值
 * @param {*} arr
 * @return {*}
 */
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

countSort(arr);
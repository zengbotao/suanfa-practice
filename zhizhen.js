/*
 * @Author: zengbotao 2898487084@qq.com
 * @Date: 2024-03-02 15:48:30
 * @LastEditors: zengbotao 2898487084@qq.com
 * @LastEditTime: 2024-03-02 16:01:09
 * @FilePath: \suanfa-practice\zhizhen.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * @param {*} nums
 * @return {*}
 */
var moveZeroes = function (nums) {
    let a = 0 //a是指针，代表循环中非零数指数，a永远小于=idx
    nums.forEach((n, idx) => {  //这个forEach用的很好,太过关注零反而不太好，关注循环进行中的非零数值（item,index）
        // 非0时，交换 a 和 idx的值
        if (n) {
            // 处于同一位置时，无需自己和自己换，跳过
            if (idx === a) {
                a++
            } else {
              // 已知被交换的一定时0，直接赋值即可，并让a前进一格
              nums[a++] = n;    //替换的是a后面一位，所以要a++
              nums[idx] = 0; //这一步很关键，a永远小于=idx，后面的循环会替换掉当前的0
            }
        }
    })
    return nums
};

/**
 * @param {number[]} 给你一个整数数组 nums ，
 * 判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
    const len = nums.length;
    if(nums == null || len < 3) return ans;
    nums.sort((a, b) => a - b); // 排序
    for (let i = 0; i < len ; i++) {
        if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        let L = i+1;
        let R = len-1;
        while(L < R){
            const sum = nums[i] + nums[L] + nums[R];
            if(sum == 0){
                ans.push([nums[i],nums[L],nums[R]]);
                while (L<R && nums[L] == nums[L+1]) L++; // 去重
                while (L<R && nums[R] == nums[R-1]) R--; // 去重
                L++;
                R--;
            }
            else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }        
    return ans;
};

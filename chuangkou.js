/*
 * @Author: zengbotao 2898487084@qq.com
 * @Date: 2024-03-04 18:25:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-18 17:03:19
 * @FilePath: \suanfa-practice\chuangkou.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 无重复字符的最长子串
 * @param {*} s
 * 凡是涉及到次数的，都可以使用map或者set
 * 涉及到次数更替，删除的，可以使用set
 * @return {*}
 */
var lengthOfLongestSubstring = function(s) {
    // 哈希集合，记录每个字符是否出现过
    const occ = new Set();
    const n = s.length;
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = -1, ans = 0;
    for (let i = 0; i < n; ++i) {
        console.log(i);
        if (i != 0) {
          // 左指针向右移动一格，移除一个字符
          occ.delete(s.charAt(i - 1)); //charCodeAt
        }
        while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
            // 不断地移动右指针
            occ.add(s.charAt(rk + 1));
            ++rk;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        ans = Math.max(ans, rk - i + 1);
    }
    return ans;
};

lengthOfLongestSubstring('fdfdsfwefdsfsdzxcxdfdg')
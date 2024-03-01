/*
 * @Author: zengbotao 2898487084@qq.com
 * @Date: 2024-02-29 20:50:41
 * @LastEditors: zengbotao 2898487084@qq.com
 * @LastEditTime: 2024-02-29 20:51:08
 * @FilePath: \suanfa-practice\Dictionary.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Dictionary {
  table = {}; // 设置私有#table

  toStrFn(item) {
    if (item === null) {
      return "NULL";
    } else if (item === undefined) {
      return "UNDEFINED";
    } else if (typeof item === "string" || item instanceof String) {
      return item;
    }
    return JSON.stringify(item);
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }

  set(key, value) {
    if (key != null && value != null) {
      const tablekey = this.toStrFn(key);
      this.table[tablekey] = new ValuePair(key, value); // key+value
      return true;
    }
    return false;
  }

  get(key) {
    const valuepair = this.table[this.toStrFn(key)];
    return valuepair == null ? undefined : valuepair.value;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  keys() {
    return this.keyValues().map((item) => item.key);
  }

  values() {
    return this.keyValues().map((item) => item.value);
  }

  keyValues() {
    return Object.values(this.table);
  }

  size() {
    return Object.keys(this.table).length;
  }
  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.table = {};
  }

  forEach(cb) {
    const valuePair = this.keyValues();
    for (let i = 0; i < valuePair.length; i++) {
      cb(valuePair[i].key, valuePair[i].value);
    }
  }
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

var mymap = new Dictionary();

mymap.set("name", "kerwin");
mymap.set({ a: 1 }, "aaaa");

mymap.forEach((key, value) => {
  console.log(key, value);
});

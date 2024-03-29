class DeQueue {
  #items = {};
  #lowCount = 0;
  #count = 0;

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    let res = this.#items[this.#lowCount];
    delete this.#items[this.#lowCount];
    this.#lowCount++;
    return res;
  }

  addBack(data) {
    this.#items[this.#count] = data;
    this.#count++;
  }

  addFront(data) {
    // 1.如果为空
    if (this.isEmpty()) {
      this.addBack(data);
    } else {
      //2. lowCount>0
      if (this.#lowCount > 0) {
        this.#lowCount--;
        this.#items[this.#lowCount] = data;
      } else {
        //lowCount===0
        for (let i = this.#count; i > 0; i--) {
          this.#items[i] = this.#items[i - 1];
        }

        this.#items[0] = data;

        this.#count++;
      }
    }
  }

  removeBack() {
    if (this.isEmpty()) {
      return;
    }

    this.#count--;
    const res = this.#items[this.#count];
    delete this.#items[this.#count];
    return res;
  }

  peekFront() {
    return this.#items[this.#lowCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return;
    }
    return this.#items[this.#count - 1];
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
 * @description: 回文结构判断
 * @param {*} str
 * @return {*}
 */
function test(str) {
  const lowstr = str.toLocaleLowerCase().split(" ").join("");

  let dequeue = new DeQueue();

  for (let i = 0; i < lowstr.length; i++) {
    dequeue.addBack(lowstr[i]);
  }

  // console.log(dequeue)
  let isEqual = true;
  while (dequeue.size() > 1) {
    if (dequeue.removeFront() !== dequeue.removeBack()) {
      isEqual = false;
      break;
    }
  }

  return isEqual;
}

test("D a       d");

# queue

### 队列

队列和栈不同，遵循先进先出的规则

``` javascript
/**
 *队列
 *先进先出
 * @class Queue
 */
class Queue {
  constructor() {
    this.queue = [];
  }

  /**
   *入队
   *
   * @param {*} ele
   * @memberof Queue
   */
  enqueue(ele) {
    this.queue.push(ele);
  }

  /**
   *出队
   *
   * @returns
   * @memberof Queue
   */
  dequeue() {
    return this.queue.shift();
  }

  /**
   *显示即将出队元素
   *
   * @returns
   * @memberof Queue
   */
  peek() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  clear() {
    this.queue = [];
  }

  toString() {
    return this.queue.toString();
  }
}

```

### 双向队列

``` javascript
/**
 *双向队列
 *
 * @class Dique
 */
class Dique {
  constructor() {
    this.dique = [];
  }

  addFront(ele) {
    this.dique.unshift(ele);
  }

  removeFront() {
    return this.dique.shift();
  }

  addBack(ele) {
    this.dique.push(ele);
  }

  removeBack() {
    this.dique.pop();
  }

  peekFront() {
    return this.dique[0];
  }

  peekBack() {
    return this.dique[this.dique.length - 1];
  }

  size() {
    return this.dique.length;
  }

  clear() {
    this.dique = [];
  }

  isEmpty() {
    return this.dique.length === 0;
  }

  toString() {
    return this.dique.toString();
  }
}

```


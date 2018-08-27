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

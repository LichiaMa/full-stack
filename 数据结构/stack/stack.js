/**
 *一种先进后出的数据结构
 *
 * @export
 * @class Stack
 */
class Stack {
  constructor() {
    this.stack = [];
  }

  /**
   *栈顶添加数据
   *
   * @param {*} item
   * @memberof Stack
   */
  push(item) {
    this.stack.push(item);
  }

  /**
   *栈顶弹出数据，并返回
   *
   * @returns
   * @memberof Stack
   */
  pop() {
    return this.stack.pop();
  }

  /**
   *查看栈顶元素，但不弹出
   *
   * @returns
   * @memberof Stack
   */
  peek() {
    return this.stack[this.stack.length - 1];
  }

  /**
   *返回栈的长度
   *
   * @returns
   * @memberof Stack
   */
  size() {
    return this.stack.length;
  }

  /**
   *栈是否为空
   *
   * @returns
   * @memberof Stack
   */
  isEmpty() {
    return this.stack.length === 0;
  }

  /**
   *清空栈
   *
   * @memberof Stack
   */
  clear() {
    this.stack = [];
  }

  /**
   *打印栈中的元素
   *
   * @memberof Stack
   */
  print() {
    console.log(this.stack.toString());
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  /**
   *尾部追加
   *
   * @param {*} ele
   * @returns
   * @memberof LinkedList
   */
  append(ele) {
    let node = new Node(ele);
    let current = null;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;

    return this;
  }

  /**
   *根据位置删除
   *
   * @param {number} position
   * @returns {Node}
   * @memberof LinkedList
   */
  removeAt(position) {
    if (position <= -1 || position >= this.length) {
      return null;
    }

    let index = 0,
      pre = null,
      current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      while (index < position) {
        index++;
        pre = current;
        current = current.next;
      }

      pre.next = current.next;
    }

    this.length--;

    return current.value;
  }

  /**
   *任意位置插入元素
   *
   * @param {number} position
   * @param {*} ele
   * @returns {boolean}
   * @memberof LinkedList
   */
  insert(position, ele) {
    if (position < 0 || position >= this.length) {
      return false;
    }
    let current = this.head,
      node = new Node(ele),
      pre = null,
      index = 0;
    if (position === 0) {
      node.next = current;
      this.head = node;
    } else {
      while (index < position) {
        index++;
        pre = current;
        current = current.next;
      }

      node.next = current;
      pre.next = node;
    }
    this.length++;
    return true;
  }

  toString() {
    let current = this.head,
      str = '';

    while (current) {
      str += current.value;
      current = current.next;
    }

    return str;
  }

  /**
   *查找元素是否存在于列表中，如果存在返回位置，不存在返回-1
   *
   * @param {*} ele
   * @returns {number}
   * @memberof LinkedList
   */
  indexOf(ele) {
    let current = this.head,
      index = 0;
    while (current) {
      if (current.value === ele) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  /**
   *删除元素
   *
   * @param {*} ele
   * @returns {number}
   * @memberof LinkedList
   */
  remove(ele) {
    const index = this.indexOf(ele);
    this.removeAt(index);
    return index;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }
}

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

export class Set {
  constructor() {
    this.set = {};
  }

  has(value) {
    return this.set.hasOwnProperty(value);
  }

  add(value) {
    if (this.has(value)) {
      return false;
    }

    this.set[value] = value;
  }

  delete(value) {
    if (this.has(value)) {
      delete this.set[value];
      return true
    }
    return false
  }

  clear() {
    this.set = {}
  }

  size() {
    return Object.keys.length
  }
}

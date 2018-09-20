export class Util {
  constructor() {}

  // 柯里化无限调用，add(1)(2)(3)...
  add(a) {
    let sum = 0;
    sum += a;
    function helper(b) {
      if (arguments.length === 0) {
        return sum;
      } else {
        sum += b;
        return helper;
      }
    }
    helper.toString = helper.valueOf = function() {
      return sum;
    };

    return helper
  }
}

 function BHDConvert(num, base) {
  const stack = new Stack();
  let str = '';
  const digits = '0123456789ABCDEF';

  while (num !== 0) {
    const remaider = digits[Math.floor(num % base)];
    stack.push(remaider);
    num = Math.floor(num / base);
  }

  while (!stack.isEmpty()) {
    str += stack.pop();
  }

  return str;
}

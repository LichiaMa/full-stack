export function throttle(fn, delay) {
  let previous = 0;

  return function() {
    if (!previous) {
      previous = Date.now();
    } else if (previous + delay >= Date.now()) {
      fn(...arguments);
      previous = Date.now();
    }
  };
}

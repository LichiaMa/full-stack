export function debounceTime(fn, wait) {
  let timer = null;
  return function() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn(...arguments)
    }, wait);
  };
}

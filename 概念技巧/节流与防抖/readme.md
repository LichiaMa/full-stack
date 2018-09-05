# 函数节流和防抖动

### 函数节流（`throttle`）

 在一段时间内，只能有一次触发事件执行回调函数，如果在同一个单位时间内触发了多次事件，回调函数只执行一次。

```javascript
function throttle(fn, delay) {
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

```



### 防抖动（`debounce`）

在事件被触发n秒后执行回调函数，如果在这n秒内事件又被触发，则重新计时。

``` javascript
function debounceTime(fn, wait) {
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

```


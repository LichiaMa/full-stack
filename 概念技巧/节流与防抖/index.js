import { debounceTime } from './debounce';

window.onload = function() {
  function fn(e) {
    const val = input.value;
    console.log(e);
  }

  const input = document.getElementById('input');
  input.addEventListener('input', debounceTime(fn,1000), false);
};

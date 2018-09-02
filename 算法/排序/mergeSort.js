/**
 *归并排序
 *
 * @export
 * @param {*} arr
 */
export function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  return recursion(array);
}

function recursion(arr) {
  const length = arr.length;
  const mid = Math.floor(length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, length);
  return merge(recursion(left), recursion(right));
}

function merge(left, right) {
  let res = [],
    li = 0,
    ri = 0;

  while (li < left.length && ri < right.length) {
    if (left[li] < right[li]) {
      res.push(left[li]);
      li++;
    } else {
      res.push(right[ri]);
      ri++;
    }
  }

  while (li < left.length) {
    res.push(left[li]);
    li++;
  }

  while (ri < right.length) {
    res.push(right[ri]);
    ri++;
  }

  return res;
}

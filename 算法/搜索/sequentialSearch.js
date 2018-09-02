/**
 *顺序搜索
 *
 * @export
 * @param {Array} arr
 * @param {*} target
 * @returns
 */
export function sequentialSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

/**
 *二分搜索
 *
 * @export
 * @param {Array}} arr
 * @param {*} target
 * @returns
 */
export function binarySearch(arr, target) {
  let min = 0,
    max = arr.length - 1,
    mid = 0;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (arr[mid] < target) {
      min = mid + 1;
    } else if (arr[mid] > target) {
      max = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

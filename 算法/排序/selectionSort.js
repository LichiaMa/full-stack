/**
 *选择排序
 *
 * @export
 * @param {Array} arr
 * @returns
 */
export function selectionSort(arr) {
  const length = arr.length;
  let minIndex;

  for (let i = 0; i < length - 1; i++) {
    minIndex = i;

    for (let j = i; j < length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

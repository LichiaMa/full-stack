export function quickSort(arr) {
  if (arr.length === 0) {
    return [];
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const lesser = [];
  const greater = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element < pivot) {
      lesser.push(element);
    } else if (element > pivot) {
      greater.push(element);
    }
  }

  return quickSort(lesser).concat(pivot, quickSort(greater));
}

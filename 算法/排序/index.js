import { bubbleSort, bubbleSort2 } from "./bubbleSort";
import { selectionSort } from "./selectionSort";
import { mergeSort } from "./mergeSort";
import { quickSort } from "./quickSort";

let arr = [8, 7, 6, 5, 4, 3, 2, 1];

// arr = bubbleSort(arr);
// arr = bubbleSort2(arr);
// arr = selectionSort(arr);
// arr = mergeSort(arr)
arr = quickSort(arr)
console.log(arr);

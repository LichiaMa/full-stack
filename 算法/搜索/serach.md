# 搜索

1. 顺序搜索

   最简单的锁搜方法，就是遍历数组，直到找到目标元素。这种算法效率最低（n）。

   ``` javascript
   function sequentialSearch(arr, target) {
     for (let i = 0; i < arr.length; i++) {
       if (arr[i] === target) {
         return i;
       }
     }
     return -1;
   }
   
   ```

2. 二分搜索

   二分搜索类似猜字迷。这种算法的前提是对数组已经排序。拿出数组的中间值和目标值比较，如果大于目标值，那么就从小于目标值的一半数组中找，直到找到。

   ``` javascript
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
   ```

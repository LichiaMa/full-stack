# 排序
1. 冒泡排序（最慢排序 O(n*n)）

  比较相邻的两个元素大小，如果第一个大于第二个则交换他们的顺序， 以此类推。

  外循环用来控制排序多少轮，内循环用来交换。由于包含内外两个循环，所以时间复杂度是`n*n`

  ``` javascript
  export function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  
    return arr;
  }
  
  ```

  其实每次交换完位置以后，最后一个已经是不需要再交换位置的了，因此可以改进该算法

  ``` javascript
  export function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  
    return arr;
  }
  ```

2. 选择排序

   找到最小值并放置到第一位，然后再找到剩下的元素中的最小值，放到第二位，以此类推。由于也包含两个循环，所以时间复杂度也是`n*n`。

   ``` javascript
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
   
   ```

3. 归并排序

   归并排序是第一个可以实际中运用到的排序，它的时间复杂度为`nlogn`,在`javascript`中有一个`Array.prototype.sort`，各大浏览器厂商采用的算法不同，在`fireFox`中采用的就是归并排序，在`chrome`中采用的是快速排序。

   归并排序是一种分治算法，即把要排序的数组分割成若干小数组，每个数组只能容纳一个元素，之后把小数组合并为一个较大的数组，直到合并成一个数组。

4. 快速排序

   快速排序是最常用的排序，经常用来处理大数据。其时间复杂度是`nlogn`。在所有同等时间复杂度的算法中，算是最快的。

   快速排序的基本思想是，在数组中选择一个基准元素，划分两个数组，把比基准小的元素放到第一个数组，把比基准大的元素放入第二个数组，以此类推，直到完成。具体实现如下：

   ``` javascript
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
   
   ```

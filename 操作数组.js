//1.排序
var arr = [20, 30, 10, 40, 100, 21, 40];
//冒泡排序
for (var i = 0; i < arr.length - 1; i++) {
  //外层循环控制的轮数
  for (var j = 0; j < arr.length - 1 - i; j++) {
    //比较的第一个数 arr[j]
    //比较的第二个数 arr[j+1]
    if (arr[j] < arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);

// 冒泡排序优化
let arr = [9, 7, 8, 5, 6, 4, 3, 2, 1];
let count = 0;
for (let i = 0; i < arr.length - 1; i++) {
  // 控制轮数
  for (let j = 0; j < arr.length - i; j++) {
    console.log(111);
    if (arr[j + 1] < arr[j]) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    } else {
      break;
    }
  }
  count++;
}

// 顺序 遍历数组
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 倒序 遍历数组
for (var i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

//# 通过数组长度来操作
let arr = [1, 2, 3, 4];
// 清空数组
arr.length = 0;

//# 求数组中的最大值
var arr = [30, 40, 10, 200, 100];
var max = -Infinity;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

//# 求数组中的最小值
var arr = [30, 40, 10, 200, 100];
var min = Infinity;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}

// 升序
var arr1 = [10, 12, 13, 15, 17, 19];
function compare(valueof1, valueof2) {
  return valueof1 - valueof2;
}
arr1.sort(compare);

// 降序
var arr1 = [10, 12, 13, 15, 17, 19];
function compare(valueof1, valueof2) {
  return valueof2 - valueof1;
}
arr1.sort(compare);

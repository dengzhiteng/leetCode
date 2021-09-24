let arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];
// 方法1
console.log(Array.from(new Set(arr)));

// 方法2 原理同方法1
console.log([...new Set(arr)]);

// 方法3 利用indexOf去重
// [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}]  //NaN、{}没有去重
// 判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组。
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error!");
    return;
  }
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i]);
    }
  }
  return array;
}
console.log(unique(arr));

// 方法4 利用includes
function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log("type error!");
    return;
  }
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) {
      //includes 检测数组是否有某个值
      array.push(arr[i]);
    }
  }
  return array;
}
console.log(unique(arr));

// 方法4 利用hasOwnProperty,所有的都去重了
function unique(arr) {
  var obj = {};
  return arr.filter(function (item, index, arr) {
    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true);
  });
}
console.log(unique(arr));

// 暴力去重
let arr = [1, 2, 1, 3, 4, 2, 1, 1, 2, 3, 22, 2];
let brr = [];
brr[0] = arr[0];
let flag = true;
for (let i = 1; i < arr.length; i++) {
  flag = true;
  for (let j = 0; j < brr.length; j++) {
    if (arr[i] == brr[j]) {
      flag = false;
      break;
    }
  }
  if (flag) {
    brr.push(arr[i]);
  }
}

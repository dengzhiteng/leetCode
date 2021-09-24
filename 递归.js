//递归介绍
//  函数自己调用自己 ,有结束的时候.递归难点，结束条件。

function test1() {
  console.log("哈哈");
  test1();
}
test1();

//2.画图解释了 带结束条件的递归的执行过程。
var i = 0;
function test1() {
  i++;
  console.log(i);
  if (i < 5) {
    test1();
  }
}
test1();

//案例 2 求 1-n 之间的整数和。
//1-5
//1-4 + 5
//1-3 + 4
//1-2 + 3
function getsum(n) {
  if (n == 1) {
    return 1;
  } else {
    return getsum(n - 1) + n;
  }
}
var sum = getsum(5);
console.log(sum);
//好好理解这个的执行过程
//案例 3 递归-求阶乘-求斐波那契数列

//1.求n的阶乘  n!       5!  1* 2 * 3 * 4 * 5
//4! * 5
//3! * 4
//2! * 3
function getjc(n) {
  if (n == 1) {
    return 1;
  } else {
    return getjc(n - 1) * n;
  }
}
console.log(getjc(3));

//2.斐波那契数列  1 1 2 3 5 8 13 21 34 ....
function getFB(n) {
  if (n == 1 || n == 2) {
    return 1;
  } else {
    return getFB(n - 1) + getFB(n - 2);
  }
}
console.log(getFB(5)); //5
//案例 4 递归获取后代元素

//1.求某个元素的所有的后代元素
//直接求某个元素所有的后代元素不现实，但是我们可以求某个元素的子元素。 childNodes  children
//子元素也有子元素， 所以我们就可以通过这种方式，找到这个元素的所有后代元素。

//求某个元素的所有后代元素
var list = [];
function getEles(ele) {
  var children = ele.children;
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    list.push(child);
    getEles(child);
  }
}

var father = document.getElementById("father");
getEles(father);
console.log(list);

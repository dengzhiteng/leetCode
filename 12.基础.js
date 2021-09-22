// 1~100 之间的整数相加，得到累加值大于 20 的当前数
var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += i;
  if (sum >= 20) {
    console.log(i);
    break;
  }
}

// - 老师问学生,这道题你会做了吗?如果学生答"会了(y)",则可以放学.如果学生不会做(n),则老师再讲一遍,再问学生是否会做了......
// - 直到学生会为止,才可以放学.
// - 直到学生会或老师给他讲了 5 遍还不会,都要放学
var answer; //学生回答
var i = 0; //记录讲的次数
do {
  answer = prompt("老师讲了一遍，提问学生这道题你会做了吗?y/n");
  i++;
  if (answer == "y") {
    alert("会了，放学了！");
    break;
  }
  if (i >= 5) {
    alert("讲了5遍你还不会，你是什么情况，下课来我房间私下聊~~");
    break;
  }
} while (true);

//  分离出个 十 百 位 的方法
var i = 123;
var ge = i % 10;
var shi = Math.floor((i % 100) / 10);
var bai = Math.floor(i / 100);

// 如何保留小数的位数;
var num = 12.34567;
//console.log(Math.floor(num * 100) / 100);   //12.34
//console.log(num.toFixed(2));

// 交换第二种做法，不使用第三方变量
num1 = num1 + num2; //num1 = 30;  num2 = 20;
num2 = num1 - num2; //num2 = 10;  num1 = 30;
num1 = num1 - num2; //num1 = 20;  num2 = 10;
console.log("num1 =" + num1);
console.log("num2 =" + num2);

// 输出九九乘法表(循环的嵌套);

for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(j + "*" + i + "=" + i * j);
    document.write("&nbsp;&nbsp;");
  }
  document.write("<br>");
}

//  本金 10000 元存入银行，年利率是千分之三，每过 1 年，将本金和利息相加作为新的本金。计算 5 年后，获得的本金是多少？
let momeny = 10000;
for (let year = 1; year < 6; year++) {
  momeny += momeny * 0.003;
}
console.log(momeny);

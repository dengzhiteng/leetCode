/**
 * ["4",	"13",	"5",	"/",	"+"]	等价于(4+(13/5))	=	6
 *
 */
function calc(exp) {
  let stack = [];
  for (let item of exp) {
    if (["+", "-", "*", "/"].indexOf(item) >= 0) {
      // 从栈顶弹出两个元素
      const v1 = stack.pop();
      const v2 = stack.pop();
      // 拼成表达式
      const exp_str = v2 + item + v1;
      // 计算并取整
      const res = eval(exp_str).toFixed(1);
      // 建计算结果压入栈中
      stack.push(res);
    } else {
      stack.push(item);
    }
  }
  return stack.pop();
}
const exp = ["4", "1", "5", "/", "+"];
const res = calc(exp);
console.log(res);

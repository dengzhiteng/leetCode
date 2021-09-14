/***
 * 说明，在一个字符串中，括号成对出现为合法，否则为不合法，
 * 例如 '(123)131(24234)234()' 为合法   '(123)131(24234)234() (' 为不合法
 * 思路：
 * 字符串切割存入strList 中，
 * 遍历 strList 并判断：
 * 遇到右括号(,存入stack中,
 * 遇到左括号)的，看stack是否有值，有的话pop stack ,相当于是抵消一对括号
 * 看 stack 是否有剩余，有，则说明还存有未抵消的，返回false，表示字符串不合法，否则 返回true，表示字符串合法
 */

/***
 * 检测括号是否成对出现
 * str 需要检测的字符串
 */
function isHefa(str) {
  let stack = [];
  let strList = str.split("");
  for (let item of strList) {
    if (item == "(") {
      stack.push("(");
    } else if (item == ")") {
      if (stack.length) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length == 0;
}

let str = "(123)131(24234)234";
const res = isHefa(str);
console.log(res);

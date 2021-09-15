// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

/**
 * @param {string} str
 * @return {boolean}
 */
var isValid = function (str) {
  const strList = str.split("");
  let stack = [];
  for (let cur of strList) {
    // 储存右括号
    if (["(", "{", "["].indexOf(cur) > -1) {
      stack.push(cur);
    } else {
      // 碰到左括号
      if (cur == ")") {
        if (stack.slice(-1) == "(") {
          stack.pop();
        } else {
          return false;
        }
      }
      if (cur == "]") {
        if (stack.slice(-1) == "[") {
          stack.pop();
        } else {
          return false;
        }
      }
      if (cur == "}") {
        if (stack.slice(-1) == "{") {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return stack.length == 0;
};
const str = "({(1)})";
const res = isValid(str);
console.log(res);

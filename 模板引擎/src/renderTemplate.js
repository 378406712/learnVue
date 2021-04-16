// 让token数组变为dom字符串
import lookUp from "./lookUp";
import parseArray from "./parseArray";
export default function renderTemplate(tokens, data) {
  let resultStr = "";
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    if (token[0] === "text") {
      resultStr += token[1];
    } else if (token[0] === "name") {
      resultStr += lookUp(data, token[1]);
    } else if (token[0] === "#") {
      resultStr += parseArray(token, data);
    }
  }
  console.log(resultStr);
  return resultStr;
}

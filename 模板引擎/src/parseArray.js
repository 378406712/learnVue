/**
 * 处理数组，结合renderTemplate实现递归
 * 参数是token，简单的['#',students,[...]]
 */
import lookUp from "./lookUp";
import renderTemplate from "./renderTemplate";
export default function parseArray(token, data) {
  var resultStr = "";
  var v = lookUp(data, token[1]);
  console.log(v, "v");
  for (let i = 0; i < v.length; i++) {
    resultStr += renderTemplate(token[2], {
      ...v[i],
      ".": v[i],
    });
  }
  return resultStr;
}

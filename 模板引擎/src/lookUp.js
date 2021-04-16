/**
 * 可以在dataObj对象中，寻找用连续点符号的keyNames属性，识别a.b.c
 * @param {*} dataObj
 * @param {*} keyName
 */
export default function lookUp(dataObj, keyName) {
  console.log(dataObj, keyName);
  if (keyName.indexOf(".") != -1 && keyName != ".") {
    var keys = keyName.split(".");
    // 如果有 '.' 则拆开
    var temp = dataObj;
    for (let i = 0; i < keys.length; i++) {
      temp = temp[keys[i]];
    }
    return temp;
  }
  // 没有'.'
  return dataObj[keyName];
}

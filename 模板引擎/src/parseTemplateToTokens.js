import Scanner from "./Scanner";
import NestToken from "./nestTokens";
// 将模板字符串变为tokens数组
export default function parseTemplateToTokens(templateStr) {
  var tokens = [];
  var words;
  var scanner = new Scanner(templateStr);
  // scanner没有到头，循环
  while (!scanner.eos()) {
    words = scanner.scanUtil("{{"); // 左大括号之前的文字
    if (words != "") {
      tokens.push(["text", words.trim()]);
    }
    scanner.scan("{{"); // 越过双大括号
    words = scanner.scanUtil("}}");
    if (words != "") {
      // 这里的words是{{}}中间的二维，需要判断首字符
      if (words[0] == "#") {
        // 从下标为1的项开始村，因为下标0为#
        tokens.push(["#", words.substring(1)]);
      } else if (words[0] == "/") {
        tokens.push(["/", words.substring(1)]);
      } else {
        tokens.push(["name", words]);
      }
    }
    scanner.scan("}}");
  }
  return NestToken(tokens);
}

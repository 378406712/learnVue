/**
 * 讲#和/ 间的tokens折叠整合，
 */
export default (tokens) => {
  var nestedTokens = []; // 结果数组
  // 栈结构，存放小tokens，栈顶（靠近端口，最新进入的）的tokens数组中当前操作的这个tokens小数组
  var sections = [];
  var collector = nestedTokens; //收集器，指向nestedTokens数组，指向同一个个数组
  // collector 指向会发生变化，引用类型
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    switch (token[0]) {
      case "#":
        collector.push(token); // 收集器中放入token
        sections.push(token); // 入栈
        collector = token[2] = []; // 换收集器，给token添加下标为2的项，并让收集器指向它
        break;
      case "/":
        sections.pop();
        collector =
          sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens;
        break;
      default:
        collector.push(token);
        break;
    }
  }
  return nestedTokens;
};

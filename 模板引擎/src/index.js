import Scanner from "./Scanner";
window.myTemplate = {
  render(templateStr, data) {
    var words;
    var scanner = new Scanner(templateStr);
    // scanner没有到头，循环
    while (!scanner.eos()) {
      words = scanner.scanUtil("{{");
      console.log(words);

      scanner.scan("{{");
      words = scanner.scanUtil("}}");
      console.log(words);
      scanner.scan("}}");
    }
  },
};

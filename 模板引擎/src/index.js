import parseTemplateToTokens from "./parseTemplateToTokens";
window.myTemplate = {
  render(templateStr, data) {
    var tokens = parseTemplateToTokens(templateStr)
    console.log(tokens);
  },
};

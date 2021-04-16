import parseTemplateToTokens from "./parseTemplateToTokens";
import renderTemplate from "./renderTemplate";
window.myTemplate = {
  render(templateStr, data) {
    var tokens = parseTemplateToTokens(templateStr);
   let domStr =  renderTemplate(tokens, data);
    return domStr
  },
};

/**
 * 扫描器类
 */
export default class Scanner {
  constructor(templateStr) {
    this.pos = 0;
    this.tail = templateStr;
    this.templateStr = templateStr;
  }
  // 走过指定内容，无返回值
  scan(tag) {
    if (this.tail.indexOf(tag) == 0) {
      // 查找标记{{
      this.pos += tag.length; // pos+ '{{' 的长度2
      this.tail = this.templateStr.substring(this.pos);
    }
  }
  // 让指针扫描，直到遇见指定内容结束，返回结束之前的内容
  scanUtil(stopTag) {
    const pos_backup = this.pos; // 开始走的指针
    while (!this.eos() && this.tail.indexOf(stopTag) != 0) {
      this.pos++;
      this.tail = this.templateStr.substr(this.pos);
    }
    return this.templateStr.substring(pos_backup, this.pos);
  }
  // end of string 
  eos() {
    return this.pos >= this.templateStr.length;
  }
}

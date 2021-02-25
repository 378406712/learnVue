import { def } from './utils.js'

import defineReactive from './defineReactive.js'
export default class Observer {
  // 将一个正常的obj转换成每层都是响应式的
  constructor(value) {
    console.log('Observer构造器', value)
    // 不希望便利到__ob__,添加工具函数def
    // 构造函数的this不是表示累本身，而是表示实例
    def(value, '__ob__', this, false) //给实例添加__ob__属性
    this.walk(value)
  }
  // 遍历
  walk(value) {
    for (let key in value) {
      defineReactive(value, key)
    }
  }
}

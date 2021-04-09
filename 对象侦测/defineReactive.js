import { observe } from './observe.js'

function defineReactive(data, key, val) {
  if (arguments.length === 2) {
    val = data[key]
  }
  //子元素进行observe,形成递归，不是自己调用自己，而是多个函数，类循环
  let childOb = observe(val)
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('你在访问getter' + key)
      return val
    },
    set(newValue) {
      if (val === newValue) return
      val = newValue
      childOb = observe(newValue) // 设置的新值也要被观察
      console.log('你试图用setter设置', newValue)
    }
  })
}

export default defineReactive

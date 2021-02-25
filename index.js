import { observe } from './observe.js'
var obj = {
  a: {
    m: {
      n: 4
    }
  },
  b: 4
}

observe(obj)
obj.b = 3
console.log(obj)

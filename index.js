
let welcmoe = 'hello'
welcmoe()

// 逻辑漏洞
const str = Date.now() % 2 ? '奇数' : '偶数'
if (str !== '奇数') {
  alert('hello')
} else if (str === '偶数') {
  alert('world')
}

const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;

const message = 'hello,world'
message.toUperCase()
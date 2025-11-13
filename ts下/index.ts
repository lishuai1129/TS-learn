class Person {
  // 属性声明
  name: string
  age: number
  // 构造器
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  // ⽅法
  speak() {
    console.log(`我叫：${this.name}，今年${this.age}岁`)
  }
}
// Person实例
const p1 = new Person('周杰伦', 38)
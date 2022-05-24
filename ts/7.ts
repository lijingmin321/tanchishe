
// 生成js代码，被编译成一个对象， 包含了（name->value）和反向映射（value->name）,
// 引用枚举成员终会生成对象访问属性访问并且永远也不会内联代码
// 注意L:字符串枚举成员不会生成反向映射（value->Name）如Enum1

enum Direct {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direct, Direct[Direct.Up])
/**
 * {
  '1': 'Up',
  '2': 'Down',
  '3': 'Left',
  '4': 'Right',
  Up: 1,
  Down: 2,
  Left: 3,
  Right: 4
}
 */

enum Enum1{
    A='A',
    B="lijingmin",
    C="test",
    D="test"
}

console.log(Enum1.D, Enum1)
/**
 *  { A: 'A', B: 'lijingmin', C: 'test', D: 'test' }
 */

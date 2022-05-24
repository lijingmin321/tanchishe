
// 这个的重点是tsconfig.json内关于严格模式的配置  
// 如果不开启严格模式，那这个地方的nulls是所有类型的子项C extens boolean(或者任意类型)
// 这个都是不会error, 报错提醒
type If< C extends boolean, T, F> = C extends true ? T : F
// type If< C extends boolean, T, F> =  C extends true ? T : C extends false ? F : never

// type If<C extends Exclude<boolean, null>, T, F> =  C extends true ? T : F


// @ts-expect-error
let a :If<null, 'a', 'b'>

let b:null = null


// js

// function exampleIf(condition, a, b){
//     return condition ? a : b
    
// }
  


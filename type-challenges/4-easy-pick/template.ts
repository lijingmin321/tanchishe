type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]  //循环
}

// extends 在<> 限制 K的范围： generic constraints
// keyouf  拿数据  


// js 对比学习法
// function MyPick (todo, title) {
//     const obj = {}

//     keys.forEach(key => {
//         if(key in todo){
//             obj[key] = todo[key]
//         }
//     });
//     return obj
// }

// 1.返回一个对象
// 2.遍历forEach
// 3. todo[key] 取值
// 
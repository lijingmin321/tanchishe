type Length<T extends readonly any[]> = T['length']


// 什么是type类型
// 什么是tuple 类型
// tuple 和普通的数组有什么区别？ 

// js

function length1(arr){
    if(!Array.isArray(arr))return
    return arr
}
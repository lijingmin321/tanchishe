type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [ P in T[number] ] : P
}


// keyof b遍历数组的话会得到一个index

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type tt = TupleToObject<typeof tuple>

// js 实现

// function TupleToObject(arr){

//     const obj = {}
//     arr.forEach(key => {
//         obj[key] = key
//     });
//     return obj
// }
/**
 * 1. 返回对象
 * 2. 遍历
 */
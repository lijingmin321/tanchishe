type MyReadonly<T> = {
    readonly [ P in keyof T ]: T[P]
}


// type User = {
//     name: string
// }


// const user: User = {
//     name: 'lijingmin'
// }

// user.name = 'asdff'


// 实现js

function Readonly(obj){
    const result = {}

    for(const key in obj){
        result[`readonly ${key}`] = obj[key]
    }


    return result
}

/**
 * 1. 返回对象
 * 2. 遍历obj(js 对象， ts 接口)
 * 3. 可以连接readonly 关键词
 * 4. 取obj的key值，
 * 
 */
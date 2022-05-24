// type First<T extends any[]> = T extends [] ? never : T[0]

// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

type First<T extends any[]> = T extends [ infer First , ...infer Rest] ? First : never

// @ts-expect-error
type a = First<[]>


type ages = [1, 2, 3]

type t1 = ages[number]

type t2 = ages[0] extends ages[number] ? 'true' : 'false'

type Tail<T extends any[]> = T extends [ infer First , ...infer Rest] ? Rest : never


type t4 = Tail<[]>



// js
function first(arr){
    if(!Array.isArray(arr) || !arr.length)
    {
        return null
    }
    return arr[0]
}
type Includes<T extends readonly any[], U> = U extends T[number] ? true : false


// type Includes<T extends readonly any[], U> = T extends [infer X, ...infer Y] ?  X extends U ? true : Includes<Y, U> : false


// type MyAwaited<> = T extends Promise<infer P> ? P : never


type MyAwaited<T extends Promise<any>> = T extends Promise<infer P> ? P extends Promise<any> ? MyAwaited<P> : P : never

let param: MyAwaited<Promise<Promise<string|number>>>


// js 

// function test(T){
//     if()

// }
type MyExclude<T, U> = T extends U ? never : T





// js

/**
 * 
 * @param T ['a', 'b', 'c']
 * @param U ['a']
 */
function exclude(T, U){
    const result = []
    T.forEach(t => {
        let boo = false
        // U.forEach(u => {
        //     if(t === u){
        //         boo = true
        //     }
        // });
        // if(!boo){
        //     result.push(t)
        // }
        if(!U.includes(t)){
            result.push(t)
        }
    });

    return result
}
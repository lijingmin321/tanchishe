import { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const // 断言 

type r = typeof tuple

// 字面量类型：

let str = "ssad"

type s = typeof str

const strConst = "asas"

type sc = typeof strConst  //

// strConst = 'sasas' 不可更改  


// 类型的key 必须为String, number, symbol

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>


/**
 * expect(()=>{
  *    type error = TupleToObject<[[1, 2], {}]>
  * })
 */


/**
 * 1.const let   js世界
 * 2. type interface type世界
 * 
 * js---> type    使用typeof    
 */
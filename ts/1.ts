// type 基础类型: string， number， Boolean，null, 
// undefined, bigint, symbol, any, never, unknown, viod,
// 对象字面量， Array<T>/T[], [T, T]/元组，有固定长度，但是可变， (t: T) => U/函数

// Boolean
type myBoolean = true | false

// true
type myBoolean1 = true

// 类型可以是多个选择  （联合类型）
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

//type 用小写
type str = string
const s: str = '123'

//判断js 类型使用typeof   
let a = typeof s === 'string'

function wrapInArray(obj: string | string[]): string[] {
    if (typeof obj === "string") {
      return [obj];
    }
    return obj;
  }


//   泛型 Array

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

type ArrayType = Array<any>


interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

// const obj: Backpack<string> = {
//     // a: 10,
//     add(param: string){
//         console.log('ssss');
        
//     },
//     get(){
//         return 'sas'
//     }
// }

// declare 声明了一下   不需要关注从哪里来： 一般可用于全局变量
declare const obj: Backpack<string>


const objGet = obj.get()
// paramter 必须是string  Backpacke<string>
obj.add('123')


interface Point {
    x: number;
    y: number;
  }
   
// type Point = {
//     x: number,
//     y: number
// }
  function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }
   
  // logs "12, 26"   
  const point = { x: 12, y: 26 };
  logPoint(point);

  const point1 = {x: 24, y: 35, z: 45}
  logPoint(point1)

//   报错
//   const color = {
//       name: '#005bac'
//   }
//   logPoint(color)


// type的交集 & 多属性取并集 ，单一属性取交集
type Combined = { a: number } & { b: string, a: number }; // {a: number, b: string} 
type Conflicting = { a: number } & { a: string }; // {a: number & string} :{a: never}

const cbp: Combined = {a: 12, b: "123"}
const cp:Conflicting = null
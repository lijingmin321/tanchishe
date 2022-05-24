//联合类型
// 注：js: 判断类型  typof ==='全小写'； 数组可以用Array.isArray()
// 1. | ： XX 或者XX类型都可


// 创建类型的方式
// 1. 类型别名 type a=string 
// 2. interface
// 两者的区别：在于不能重新打开类型（type: 类型别名）以添加​​新属性，而接口始终可扩展

function printId(id: number | string) {
    console.log("Your ID is: " + id);

    // 只有后面的不行  ts会报错
    typeof id === 'string' && id.toUpperCase()
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // Error (可以number 或者string  但是不能是其他的类型)
//   printId({ myID: 22342 });


// type 和 interface 的继承

type Person = {
    name: string,
    age: number
}

// 不能新增属性
// type Person {
//     forver: string
// }

type Student = Person & {
    score: number
}

interface InterPerson {
    name: string,
    age: number
}
// 可以重复Interface 一个类型 ，以新增一个类型属性
interface InterPerson {
    forver: string
}
interface InterStudent extends InterPerson{
    score: number
}

// 无所谓前后  都会被继承
interface InterPerson {
    address: string
}
let student: Student = {
    score: 12,
    name: '李静敏',
    age: 29,
    // forver: 'play'
}

let interStudent: InterStudent = {
    score: 12,
    name: 'sasa',
    age: 24,
    forver:'ssasa',
    address: 'XXXX'
}

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// 有时可以使用两个断言限制: 如果你是知道自己的类型  但是却用另一种类型去初始话  可使用as unknow/any as XX
let x = "hello" as any as number;

// const a = (expr as any) as T;两重断言的公式
type Emme = 'left' | 'right' | 'center'

const emmeParamter: Emme = 'left'
type EmmeNumber = 1 | 2 | 3

const emmeNumberParamter: EmmeNumber = 2
function liveDangerously(x?: number | null) {
    // console.log(x.toFixed());
    // No error
    console.log(x!.toFixed());
  }
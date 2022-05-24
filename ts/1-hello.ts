// tsc --noEmitOnErroe 1-hello.ts   
//  --noEmitOnError 当ts文件报错时不生成js文件

//tsc --target es2015 hello.ts
// --target 变换到js样式  以哪种标准  默认是ES3

function greetPerson(person: string, date: Date) : void {
    console.log(`Hello ${person}, today is ${date}!`);
  }
   
  
// greet('a', 'b')
greetPerson("Brendan", new Date());

// 默认定义了当前的type为string
// let msg = "hello there!";
let msg: string | number = "hello there!";
msg = 123


let tParamter: any = "sasa"

tParamter = 123

let a = true

a = false


// any 类型可以躲过类型检测
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed 
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
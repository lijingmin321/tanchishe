type DescribableFunction = {
    description: string,
    (p: number):number
}

function doSomething(fn: DescribableFunction): void{
    console.log(fn.description + " returned " + fn(6));
}
type SomeObject = any
type SomeConstructor = {
    new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}

function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

const str = firstElement(['a', 'b'])

const num = firstElement([1, 2, 3])

const objt = firstElement([{name: '123'}, {name:'acb'}])


function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);

function fn1(x: boolean): void;
// Argument type isn't right
function fn1(x: string): void;

function fn1(x: boolean | string){
    console.log(x)
}

let myAdd = function(x: number, y:number): number { return x + y }

// let myAdd1: (x:number, y:number)=> void = function(x:number, y:number):number{ return x+y}

interface LengthWish{
    length: number
}

function loggingLength<T extends LengthWish>(params: T):T{
    console.log(params.length)
    return params
}

loggingLength([1, 'e'])

function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key]
}
let propertyParam = {a: 1, b: 3}

getProperty(propertyParam, 'a')
// getProperty(propertyParam, 'm')


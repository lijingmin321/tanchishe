function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === 'object') {
        // 为什么这边没有错误提示？
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      // do nothing
    }
  }
printAll(null)

interface Circle{
    kind: 'circle',
    radius: number
}
interface Square{
    kind: 'square',
    sideLength: number;
}

interface Triangle {
    kind: "triangle";
    sideLength: number;
  }

type Shape = Circle | Square | Triangle

// interface Shape {
//     kind: "circle" | "square";
//     radius?: number;
//     sideLength?: number;
// }

// function getArea(shape: Shape) {
//     if(shape.kind === 'circle'){
//         return Math.PI * shape.radius ** 2;   
//     }
//     return shape.sideLength ** 2
// }

function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.sideLength ** 2;
    default: 
        const _exhaustiveCheck: never = shape;
        return _exhaustiveCheck;
    }
  }

getArea({kind:'circle', radius: 12})

type a = string


function example(x: string | number, y: string | boolean) {
    if (x === y) {
      // We can now call any 'string' method on 'x' or 'y'.
      x.toUpperCase();
      y.toLowerCase();
    } else {
      console.log(x);
      console.log(y);
    }
  }

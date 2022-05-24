// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];
// const names = [1, 2, 3];
 
// Contextual typing for function
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
//   console.log(s.toUppercase());
console.log(s.toUpperCase());
});

'sss'.toUpperCase()


function printName(obj: { first: string; last?: string }) {
    // Error - might crash if 'obj.last' wasn't provided!
    console.log(obj.last.toUpperCase());
    if (obj.last !== undefined) {
      // OK
      console.log(obj.last.toUpperCase());
    }
   
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
  }
  
function greeter(person: string): string {
    return "Hello, " + person;
    // return 123
  }
   
  let user = "Jane User";
   
  document.body.textContent = greeter(user);


  type User =  {
      name: string,
      age: number,
    //   location: string
  }
  const person: User = {
    name: "Daniel",
    age: 26,
    // location: 'XXXXXXX'
  };
   
//   console.log(person.loaction);
console.log(person.name)



const announcement = "Hello World!";
 
// How quickly can you spot the typos?
// ts  可以实时的检测初拼写错误
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();
 
// We probably meant to write this...
announcement.toLocaleLowerCase();



// Math.random()

function flipCoin() {
    // Meant to be Math.random()
    // return Math.random < 0.5;
    let flag = Math.random() < 0.5 ? 'a' : 'b'

    if(flag !== 'a'){
        return true
    }
    // 下面的条件与上面的条件重合   永远不会访问到该条件  标红
    // else if(flag === 'b'){
    //     return false
    // }
}
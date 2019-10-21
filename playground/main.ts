
// Classes & Inheritance

import { Student, MAGIC_NUMBER, NewUser } from './student';
import { Person } from './person';

let obj : Person = {
    fname : "FOO",
    lName : "BAM",
    age : new Date("Dec 1, 1983")
}
let user = new NewUser(obj);
console.log(user.greet());


let foo = new Student("Foo", "baz", 32);
console.log(foo.sayHi());

console.log(MAGIC_NUMBER);


// class Demo{
//     constructor(student : Student, newUser : NewUser){}
// }

// new Demo(new Student(), new NewUser())








// Module system


// Decorators

















// Additional types
    // - void
    // - enum
    // - any

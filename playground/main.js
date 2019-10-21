"use strict";
// Classes & Inheritance
exports.__esModule = true;
var student_1 = require("./student");
var obj = {
    fname: "FOO",
    lName: "BAM",
    age: new Date("Dec 1, 1983")
};
var user = new student_1.NewUser(obj);
console.log(user.greet());
var foo = new student_1.Student("Foo", "baz", 32);
console.log(foo.sayHi());
console.log(student_1.MAGIC_NUMBER);
// Module system
// Decorators
// Additional types

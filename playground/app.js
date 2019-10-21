// var x : string = "Some string";

// console.log(typeof x);      // ?

// x = 20;

// console.log(typeof x);      // ?

// x = true;

// console.log(typeof x);      // ?


// var x = 10;
// var y = "10";
// var z = 20;

// console.log(x === y);    // ?

// console.log(z + y);        //2010
// console.log(z - y);        //10


// function longRunningOperation(){
//     setTimeout(function(){
//         console.log("running....");
//     }, 3000);
// }

// function webRequest(req){
//     console.log("Starting the operation with ID #" + req.id)
//     longRunningOperation();
//     console.log("Stoping the operation with ID #" + req.id)
// }

// webRequest({id : 1})
// webRequest({id : 2})

// OUTPUT



// Arrow functions

// 1. Short syntax
// 2. preserves the reference of 'this'

// var numbers = [1,2,3,4,5];

// ES5
// var doubleArray = numbers.map(function(value, index){
//     console.log(index);
//     return value * 2;
// })

// ES6

// var tripleArray = numbers.map(value => value * 3);

// var doubleArray = numbers.map( (value, index) => {
//     console.log(index);
//     return value * 2;
// });

// console.log(doubleArray);

// var user = {};
//  global.firstName = "Global F Name";
//  global.lastName = "Global L Name";

// var user = {
//     firstName :"Foo1",
//     lastName : "Bar1",
//     getFullName : function(){
//         // var that = this;
//         function nestedFunc (){
//             // console.log(this);          // global object
//             return this.firstName + " " + this.lastName;
//         }
//         return nestedFunc();
//     },
//     sayHello : function(){
//         var nestedFunc = () => {
//             return "Hello " + this.firstName + " " + this.lastName;}
//         return nestedFunc ();
//     }
// }

// console.log(user.getFullName());
// console.log(user.sayHello());
















// Template String 

// 1. Multi-line string
// 2. embed the variable within string

// var fname = "FooBar";

// console.log(`Hello 



// ${fname}!!`);













// Constants and block scopes (let / const)
//  - restricts the scope of variable to the nearest curly braces

// function demo(arr){
//     if(arr.length > 2){
//         let load ="LOADING";
//         console.log(flash);             //?
//     }else{
//         let flash = "FLASHING"
//     }
// }

// demo([1,2,3,4]);

// const FIRSTNAME = "FOOBAR";

// FIRSTNAME = "BARBAM";

// console.log(FIRSTNAME);

// const user = Object.freeze({
//     firstName : "FOO"
// })

// user.firstName = "Bar";

// console.log(user);      // ?












// Destructuring - (Array & Objects)

// let volume = {
//     drawText: text => console.log("Drawing " + text),
//     drawCircle: r => console.log(Math.PI * r * r),
//     drawRect: (w, l) => console.log(2 * w * l)
// }

// let { drawCircle: dc, drawRect: dr, drawText: dt } = volume;
// dc(5);
// drawCircle(5);
// drawText("Hello World");

// let arr = ["foo", "bar", "bam", "bas"];

// let [arr1, arr3, arr4] = arr;

// console.log(arr3);          // ?

// arr3 = "BAZ";

// let newArr = arr;

// newArr.push("BAZ");

// console.log(arr);           //  ["foo", "BAZ"]




// let person = {
//     firstname: "Foo",
//     friends: ["Bar", "Bam", "Baz"],
//     address: {
//         street: "201, Main Road",
//         city: "Chennai"
//     }
// }

// let {
//     firstname: fn,
//     friends: [f1, f2, f3],
//     address: {
//         street: st,
//         city: ct
//     }
// } = person;

// let { address } = person;
// let {street : st, city : ct} = address;

// console.log(ct, f2);














// Spread & Rest operators (...)


// let arr = [3, 4, 5];
// let newArr = [1, 2, ...arr, 6, 7];

// console.log(newArr);            // ?

// let names = ["Foo", "bar", "bam"];

// let newNames = [...names, "Baz"];

// console.log(names, newNames);


// function demo(fname, ...args){
//     console.log(args[0]);      // bar
// }

// demo("foo")
// demo("foo", "bar")
// demo("foo", "bar", 32)


















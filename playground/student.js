"use strict";
exports.__esModule = true;
var NewUser = /** @class */ (function () {
    function NewUser(obj) {
        this.firstName = obj.fname;
        this.lastName = obj.lName;
        this.age = obj.age;
    }
    NewUser.prototype.greet = function () {
        return "Hello There, " + this.firstName + " " + this.lastName;
    };
    return NewUser;
}());
exports.NewUser = NewUser;
var Student = /** @class */ (function () {
    function Student(fname, lname, age) {
        this.fname = fname;
        // this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    Student.prototype.sayHi = function () {
        return "Hi " + this.fname + " " + this.lname;
    };
    return Student;
}());
exports.Student = Student;
exports.MAGIC_NUMBER = Math.round(Math.random() * 10);

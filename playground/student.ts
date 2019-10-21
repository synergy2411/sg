import { Person } from './person';

export class NewUser{
    private firstName : string;
    private lastName : string;
    private age : Date;

    constructor(obj : Person){
        this.firstName = obj.fname;
        this.lastName = obj.lName;
        this.age = obj.age;
    }

    greet(){
        return "Hello There, " + this.firstName + " " + this.lastName;
    }
}





export class Student{
    // private fname : string;
    private lname : string;
    private age : number;
    constructor(private fname : string, lname : string, age : number){
        // this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    sayHi() : string{
        return "Hi " + this.fname + " " + this.lname;
    }
}

export const MAGIC_NUMBER = Math.round(Math.random() * 10);
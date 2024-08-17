// console.log("hi");

function Person(name,age) {
    this.name=name;
    this.age=age
    this.greet=function(){
        console.log('hello ' + this.name);
    }   
}

let jk = new Person("pratham",20)

console.log(jk);

jk.greet()


// Person.prototype.sayAge = function () {
//     console.log('i am ' + this.age + ' yrs old');
// }

// jk.sayAge()

// let {name,age}=jk
// console.log(name,age);
// console.log(obj);

let m = new Person('muk', 18)
let{name,age} = jk
console.log(name);
console.log(age);

let personD = {...jk,occupation:'cs'}
console.log(personD)

let jsonstring = JSON.stringify(jk)
let newjson = JSON.parse(jsonstring)
console.log(jsonstring)
console.log(newjson)

// function Employee(name, age, salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;

//     this.greet = function(){
//         console.log('Hello, my name is ' + this.name);
//     }
// }

// let obj = new personalbar('obj',21)

// obj.greet()

// Employee.prototype.sayAge = function(){
//     console.log('i am ' + this.age + ' yrs old');
// }

// obj.sayAge()

// let 
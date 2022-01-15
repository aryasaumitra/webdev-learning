const myName = "Arya"
const myDate = new Date(1997,9,22)

const myObj = {name:myName, date:myDate.toISOString()}

console.log(myObj)

var myNewName = "Arya Saumitra" // var is function scoped or global Scoped. Right now it is in the window function scope
console.log(myNewName)
{
    var myNewName  = "Panda"
    console.log(myNewName)
}
console.log(myNewName) // myNewName is updated in the block

//var is obselete

let someValue = "Some Value"

{
    let someValue = "New Value"
    console.log(someValue)
}

console.log(someValue)

// Let has a block scope

const learning = "new Learning"

{
    const learning = "new"
    console.log(learning)
}

console.log(learning)

//const has a block scope
//const have to be preinitialized

console.log('I am '+ learning)

if(learning === "new learning"){
    console.log("Good Job")
}
else{
    console.log("Padho BC")
}
// Falsy Values - 0,null,undefined,NaN,''
console.log(Boolean())
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean({}))

let gfg="GeeksforGeeks"
console.log(gfg.indexOf('G'))
let data = 'false'
data?console.log('first'):console.log('second')

'use strict'
function desc(a,b){
    console.log("Hello");
    const name = "Arya";

    const lname = "saumitra";

    const greeting = `${name} ${lname}`
    console.log(greeting)

    //strict mode enforces rules
}

desc(2,3)


functionArrow =(firstname) => `hi ${firstname}`

console.log(functionArrow('Arya'))

let newArray = [
    {
        'name':'Arya',
        'lname':'Saumitra'
    }
]

console.log(typeof newArray)
console.log(newArray)

thisfunction = () =>{
    'use strict'
    let variable = 2
    console.log(this)
    console.log(this.variable)
    // The JavaScript this keyword refers to the object it belongs to.
    // in strict this is undefined
    // without Strict this has global context in function
}

thisfunction()

const employee ={
    name: 'Arya',
    age: 24,
    initialSalary:40000,
    profession:'Pagal',
    bonus:8000,
    calculateSalary:function(){
        this.actualSalary= this.initialSalary*0.1+this.initialSalary + this.bonus
    }
}

console.log(employee);
console.log(employee.calculateSalary());
console.log(employee.actualSalary);

//console.log(this.alert("Hello"))
let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
  console.log(`${i} Bhai bhai`)
}
Object.create(new Date())

//Objects are Passed by Reference & variable passed by value

const outerfunction = function(greeting){
    // Higher order function. It returns a function
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}

outerfunction('hello')('brother')

const products = [1,2,3,4]

//forEach
products.forEach((element,index) => {
    console.log(element,index);
});

//map applies a function for each element of array
const x = products.map(item=>{
    return item += 100;
})
console.log(products);
console.log(x);

const numbers = [4, 9, 16, 25]
const newnumber = numbers.map(Math.sqrt)

console.log(newnumber);

//filter only returns those items which fulfill a condition
const y = x.filter(item=>{
    return item%2 === 0;
})
console.log(y)
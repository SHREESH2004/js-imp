//this is not like other keywords its nature changes based on how its used
//in object method its this refers to the object itself

//in global scope this refers to the window
//even in function this refers to the window
//but if in an object method function this refers to the object itself
const obj={
    name:'shreesh',
    greet:function(){
        console.log(this);
    }
}

obj.greet();
//{ name: 'shreesh', greet: [Function: greet] }

//new creates blank object and this refers to that object
function Person(name,age){
    this.name=name;
    this.age=age;
}
const p1=new Person('shreesh',20);
console.log(p1);
//Person { name: 'shreesh', age: 20 }


console.log('Method with es5 function');

const object1={
    name:'shreesh',
    age:20,
}

function printDetails(city,country){
    console.log(this);
}
printDetails.call(object1);//it shows object1
printDetails.apply(object1,[1,2]);//it passes the first 2 parameters first object next all values in array

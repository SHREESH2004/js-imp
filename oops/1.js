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
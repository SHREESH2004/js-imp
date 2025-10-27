let obj={
    name:"abc",
    age:20,
    address:{
        city:"delhi",
        state:"dl",
        pincode:110001,
        location:{
            lat:123,
            long:456
    }
}
}
obj.name;//access
obj["name"];//access
obj["name"]="shreesh"//edit
obj.city="bhubaneshwar"
console.log(obj);

//destrucutring
let {lat,long}=obj.address.location;

for (let ash in obj){
    console.log(ash,obj[ash]);
}

//if obj.key then searching for the valu of key which named as key and if want to search if in loop use obj[key] where key is variable storing the key name
let keys=Object.keys(obj);
console.log(keys);

//Object.entries to give key value par all entri lik[name,"abc"] top it wil show Array[1],Array[2]... like this
let entries=Object.entries(obj);
console.log(entries);

let obj2={...obj} //spread operator to copy object
console.log(obj2); 

let obj3=Object.assign({price:Infinity},obj); //another way to copy object
console.log(obj3);
//same as obj2 using spread operator not use too much now basically it add the bj to theobj present in assign {}

console.log(JSON.stringify(obj3)); //convert object to string
console.log(JSON.parse(JSON.stringify(obj3))); //string to object

console.log(obj.address?.location?.lat); //optional chaining if any of the property is undefined it will return undefined instead of error
//used when we r not sure if the property is present or not


//Question: Can a object key be an object? No, it will be converted to string [object Object]
let obj4={};
let keyObj={id:1};
obj4[keyObj]="value";
console.log(obj4); //{ '[object Object]': 'value' }
//Can an object key be boolean :yes it will be converted to string
//can an be map key be object : yes
let map=new Map();
let keyObj2={id:2};
map.set(keyObj2,"mapValue");
console.log(map.get(keyObj2)); //mapValue

//JSON.Stringify then JSON.parse for deep copy and spread operator gives reference so shallow copy

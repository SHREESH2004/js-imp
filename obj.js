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


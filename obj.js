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
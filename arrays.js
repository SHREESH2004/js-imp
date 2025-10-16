let arr=[1,2,3,4,5];
//arr[50] if asked it will return undefined
let arr1=[];
let arr2=new Array(10); // it will create an array of size 10 with all elements undefined
//both do ther same thing
//after . if we see () it is a method
arr.push(6); //push method adds an element at the end of the array
console.log(arr);
arr.pop(); //pop method removes the last element of the array
console.log(arr);
arr.shift(); //shift method removes the first element of the array
console.log(arr);
arr.splice(2,1); //splice method removes elements from the array, first argument is the index to start from, second argument is the number of elements to remove
console.log(arr);
arr.splice(2,0,10); //splice method adds elements to the array, first argument is the index to start from, second argument is the number of elements to remove, third argument is the element to add
console.log(arr);
arr.unshift(0); //unshift method adds an element at the beginning of the array
console.log(arr);
let newArr=arr.slice(1,4);
console.log(newArr); //slice method returns a new array, first argument is the index to start from, second argument is the index to end at (not inclusive)
newArr=arr.reverse(); //reverse method reverses the array

arr.sort(function(a,b){
    return a-b; //sorted in asc if b-a then desc
}
)
arr.forEach(function(val){
    val=val*2;
    console.log(val);

})// it runs a function for each element of the array
//map creates a new array with the data of the original array after applying the function

let karr=arr.map(function(val){
    return val*2;
})// returns a new array with each element multiplied by 2
// if no return undefined
console.log(karr);

const filter=arr.filter(function(val){
    if(val>10) return true;
    //if false doest got array
})
console.log(filter)
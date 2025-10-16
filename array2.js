let arr=[1,2,3,4,5]
let ans=arr.reduce(function(accumulator,val){
    return accumulator+val;
//accumulator remembers the value
})
console.log(ans)

let ans2=arr.find(function(val){
    if(val==1) return val;
})// find the 1st value which satisfy the condition and do the retun doest go to next part
console.log(ans2)
let ans3=arr.some(function(val){
    return val>2;
})
console.log(ans3)

let [a,b]=arr; //first 1,2copied to a,b
let [p,q,,s]=arr;//c skipped

//***Imp */
let arr2=arr;//send refernece if any changes to arr2 make changes in arr
let arr3=[...arr]//itmake it an new array and the values wrapped in it can be changes but wont affect arr
//solution to arr2


//.unshift() add to first and .push() adds to end

//extract middle 3 element from array: use slice()
arr.sort() //sort in lexicographical order

let ak=arr.filter((val)=>{
    return val>2;
})
console.log(ak)
//function
let sum =function(x,y)
{
return x+ y;
}
//function call
console.log(`sum is : ${sum(12,14)}`);
//Arrow function
let add=(x,y)=>x+y;
//function call
console.log(`sum is : ${add(12,30)}`);

//Default Parameter 
let multiply=(a,b=1)=>a*b
//function call
//pass one Parameter
console.log(`multiply is : ${multiply(12)}`);
//pass two Parameter
console.log(`multiply is : ${multiply(12,2)}`);
//create Function Rest 
let Restsum=function(...args){
    let sum=0;
    for(value of args)
    sum+=value;
    return sum;
}
//call Rest Function  

console.log(`Sum is : ${Restsum(1,2,3,4,5)}`);

//Array destructuring

let fullName=['Ali','Kahie'];
console.log("FullName :"+fullName)
let [firstName,lastName]=fullName
console.log("ur first Name  is :"+firstName)
console.log("ur last Name  is :"+lastName)

//Object destructuring
const user = {
    id: 1,
    userName: 'admin'
};

const {id, userName} = user;

console.log("id :"+id); 
console.log("userName : "+userName);

//Callback function

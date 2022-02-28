//Create object
let std={
    id:'C119001',
    name:'Hassan ',
    age:21
}
//show all info in object
console.log(std)
//access object properties in two ways
console.log(std.id)
console.log(std["name"])
//for in
for (key in std){
    console.log(key +" :" +std[key])
}

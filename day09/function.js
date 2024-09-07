function addTwoNubers(...n1){
    return n1
}
// console.log(addTwoNubers(12,42));
// Object pass in function

const user = {
    name:"abhi",
    price:199
}
function handleuser(anyObj){
    //console.log(`hello Mr. ${anyObj.name} your price is ${anyObj.price}`);   
}
handleuser(user)

// Array pass in functions

const marks = [98,34,53,89,34,65]
function handleArray(myArr){
    console.log(myArr.length);
}
handleArray(marks)
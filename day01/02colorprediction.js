let a = Math.random();
let b = Math.round(a*10);
// console.log(b);
if(b>6){
    console.log(b-4);
}
else{
    console.log(b);
    
}
if(b == 1 || b == 3 || b == 5 || b == 7 || b == 9){
    console.log("red");
}
else{
    console.log("green");
}
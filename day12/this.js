const user = {
    username:"abhi",
    age:19,
    welcomeMessage:function () {
        console.log(`Hello, ${this.username}`);
    }
}
// user.welcomeMessage();
// user.username = "new"
// user.welcomeMessage();
function chai(){
    console.log(this);
}
//chai();
const chai1 = () => {
    console.log(this);  
}
chai1()
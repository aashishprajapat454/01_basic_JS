// +++++++++ assign ++++++++
// let ob1 = { a:45, b:57, c:56}
// let ob2 = { c:43, d:34, e:67}
// let newOb = Object.assign(ob2,ob1);
// console.log(newOb);
// +++++++++ create +++++++++
// let ob1 = {
//     // login: true,
//     pret:function(){
//         console.log(`may name is ${this.uname}`);
        
//     }
// }
// let newOb = Object.create(ob1)
// newOb.uname = "abhi";
// newOb.pret()
// +++++++++++++ define property ++++++++
 let user = {
    name: "Aakash",
    salary:55000,
    time: "9 TO 5"
 }
 newOb = Object.defineProperties(user,{
    "city":"MDS",
 })
 console.log(newOb);
 
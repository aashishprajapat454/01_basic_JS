// const a = {a:12, b:45, c:34};
// const b = {d:43, e:93, f:23};
// const d = {g:42, h:93, f:23};


// const c = Object.assign({},a,b,d);
// console.log(c);
id  = Symbol(123)
const user = {
    [id] : "123",
    name: "abhi",
    followers:250,
    posts:20
}
// Object.freeze(user)
user.pic = "1.jpg";
const {followers:follow}  = user;
// console.log(user);
// console.log(user.);
console.log(user.follow);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(typeof user.id);

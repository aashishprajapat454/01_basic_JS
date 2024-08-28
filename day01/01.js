let code = Math.random();
let newCode = Math.round(code * 999999);
if (newCode <= 100000) {
    console.log("stage 0");
    console.log(newCode);

}
else if (newCode >= 100001 && newCode <= 200000) {
    console.log("stage 1");
    console.log(newCode);

}
else if (newCode >= 200001 && newCode <= 300000) {
    console.log("stage 2");
    console.log(newCode);
}
else if (newCode >= 300001 && newCode <= 400000) {
    console.log("stage 3");
    console.log(newCode);
}
else if (newCode >= 400001 && newCode <= 500000) {
    console.log("stage 4");
    console.log(newCode);
}
else if (newCode >= 500001 && newCode <= 600000) {
    console.log("stage 5");
    console.log(newCode);
}
else if (newCode >= 600001 && newCode <= 700000) {
    console.log("stage 6");
    console.log(newCode);
}
else if (newCode >= 700001 && newCode <= 800000) {
    console.log("stage 7");
    console.log(newCode);
}
else if (newCode >= 800001 && newCode <= 900000) {
    console.log("stage 8");
    console.log(newCode);
}
else if (newCode >= 900001 && newCode <= 999999) {
    console.log("stage 9");
    console.log(newCode);
}
else {
    console.log(false);
    console.log(newCode);
}

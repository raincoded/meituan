var reg = /([a-z]){1}/g;
var str = 'aa@aa8h2aaa222';
// console.log(str.match(reg));
var obj = {}
for (const prop of str) {
    if (obj[prop]) {
        obj[prop]++
    } else {
        obj[prop] = 1
    }
}
for (const prop in obj) {
    console.log(obj[prop]);
}
console.log(obj);
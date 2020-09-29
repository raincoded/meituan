/**
 * 根据字符串判断用了几种字符
 * @param {string} str 
 */
function charType(str) {
    var len1 = str.match(/[0-9]/g);
    var len2 = str.match(/[a-z]/g);
    var len3 = str.match(/[A-Z]/g);
    var len4 = str.match(/[._~!@#$^&*]/g);
    let arr = [len1, len2, len3, len4];
    let length = 0;
    for (const len of arr) {
        if (len) {
            if (len.length > 2) {
                length++
            }
        }
    }
    return length
}
/**
 * 更具字符串看看有没有连续3次连续使用一个字符
 * @param {string} str 
 */
function charRepeat(str) {
    var len1 = str.match(/([0-9])\1{3}/g);
    var len2 = str.match(/([a-z])\1{3}/g);
    var len3 = str.match(/([A-Z])\1{3}/g);
    var len4 = str.match(/([._~!@#$^&*])\1{3}/g);
    let arr = [len1, len2, len3, len4];
    let length = 0;
    for (const len of arr) {
        if (len) {
            length++
        }
    }
    return length
}
/**
 * 看看单个字符重复次数
 * @param {string} str 
 */
function oneCharRepeat(str) {
    var obj = {}
    for (const prop of str) {
        if (obj[prop]) {
            obj[prop]++
        } else {
            obj[prop] = 1
        }
    }
    let length = 0;
    for (const prop in obj) {
        if (obj[prop] >= 3) {
            length++
        }
    }
    return length
}
// var str = '1211aBaaAAAA@@@@';
let strong = 0;

export default function (str) {
    if (str.length >= 8 && str.length < 12) {
        strong = 0.5
    }
    if (str.length >= 12 && str.length <= 16) {
        strong = 1.5
    }
    let type = charType(str) / 3;
    let repeat = charRepeat(str) / 3;
    let oneRepeat = oneCharRepeat(str) / 3

    return Math.round(strong + type - repeat - oneRepeat);
}
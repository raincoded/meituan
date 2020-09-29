export default function (url, reg, str) {
    const arr = url.split(reg);
    let newUrl = '';
    arr.forEach((ele, index) => {
        newUrl += '/' + arr[index]
    });
    return newUrl + arr[1] + str;;
}
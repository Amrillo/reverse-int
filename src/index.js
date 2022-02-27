module.exports = function reverse (n) {
    let res = n.toString().split("").reverse().map(Number);
    return (res[0]== 0)? res.slice(1).filter(elem=> elem >=0).join("") : res.filter(elem=> elem >=0).join("");
}


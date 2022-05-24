function printAll(strs) {
    if (strs && typeof strs === 'object') {
        // 为什么这边没有错误提示？
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        // do nothing
    }
}
printAll(null);
function getArea(shape) {
    return Math.PI * Math.pow(shape.radius, 2);
}
getArea({ kind: 'circle' });
function example(x, y) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        y.toLowerCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}

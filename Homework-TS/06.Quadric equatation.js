var a = 1;
var b = 7;
var c = 3;
var d = b * b - (4 * a * c);
var x1 = (-b + Math.sqrt(d) / 2 * a);
var x2 = -b - Math.sqrt(d) / 2 * a;
// Math.round((x1 + 0.00001) * 100) / 100
// Math.round(x1 * 100) / 100;
x1 = x1.toFixed(2);
x2 = x2.toFixed(2);
console.log("a");
if (0 > d) {
    console.log("no real root");
}
else if (d > 0) {
    console.log(" x1 = " + x1);
    console.log(" x2 = " + x2 + " ");
}
else {
    console.log("x1 = " + x1);
}

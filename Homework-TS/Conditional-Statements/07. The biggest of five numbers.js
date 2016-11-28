function solve(args) {
  var a = +args[0];
  var b = +args[1];
  var c = +args[2];
  var d = +args[3];
  var e = +args[4];
  if (a >= b && a >= c && a >= d && a >= e) {
    console.log(a);
  }else if (b >= c && b > a && b > d && b >= e) {
    console.log(b);
  }else if (c >= d && c>=a && c >= b && c >= e) {
    console.log(c);
  }else if (d >= e && d >= a && d >= b && d >= c) {
    console.log(d);
  }else if (e >= d && e >= a && e >= b && e >= c) {
    console.log(e);
  }
}
solve(['5', '2', '2', '4', '1']);

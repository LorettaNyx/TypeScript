function solve(zelka){
	  var a = +zelka[0];
  	var b = +zelka[1];
  	var c = +zelka[2];
  if(a>=b && a>=c){
  	console.log(a);
  }else if (b>=a && b>=c){
  	console.log(b);
  }else {
  	console.log(c);
  }
}
solve(['5','2','2'])

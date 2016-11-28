function solve(zele){
	  var a = zele[0];
  	var b = zele[1];
  	var c = zele[2];
  if (a*b*c < 0) {
   console.log("-");
  }else if (a*b*c === 0){
  	console.log("0");
  }else{
  	console.log("+");
  }
}
solve(['7','2','2'])

function solve (meow){
    let a = +meow[0];
    let b = +meow[1];
    let c = +meow[2];
    let discriminant = b*b - 4* a * c,
    x1,
    x2;
    if (discriminant<0){
        console.log('no real roots');
    } else {
        if(discriminant===0){
            x1=x2=(-b)/(2*a);
            console.log('x1=x2=' + x1.toFixed(2));
        } else {
            x1= (-b + Math.sqrt(discriminant))/(2*a);
            x2= (-b - Math.sqrt(discriminant))/(2*a);
            if(discriminant>0 && x1>x2){
                console.log('x1=' + x2.toFixed(2) + '; x2=' + x1.toFixed(2));
            } else {
                console.log('x1=' + x1.toFixed(2) + '; x2=' + x2.toFixed(2));
            }
        }
    }
}
solve(['2','5','-3']);

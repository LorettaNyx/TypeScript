function solve(banichka) {
    var i,
    	n = +banichka[0],
        result = '';

    for (i = 1; i <= n; i++) {
        result += ' ' + i;
    }

    return result;
}
solve(['5'])

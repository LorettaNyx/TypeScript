function hexToDec(hex) {
  var hex = hex[0];
    var result = 0, digitValue;
    for (var i = 0; i < hex.length; i++) {
        digitValue = '0123456789abcdefgh'.indexOf(hex[i].toLowerCase());
        result = result * 16 + digitValue;
    }
    return result;
}
-----------------------------------------------------------------------------
function hexToDec(hex) {
    var result = 0, digitValue;
    for (var i = 0; i < hex.length; i++) {
        digitValue = '0123456789abcdefgh'.indexOf(hex[i].toLowerCase());
        result = result * 16 + digitValue;
    }
    return result;
}

console.log(hexToDec('FE'));
-----------------------------------------------------------------------------
function hextoDec(val) {
  var hex = val.split('').reverse().join('');
  var dec = 0;
  for (i = 0; i < hex.length; i++) {
    var conv = '0123456789ABCDEF'.indexOf(hex[i]);
    dec += conv * Math.pow(16, i);
  }
  return dec;
}
console.log(hextoDec('FE'));

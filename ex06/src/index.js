function main () {
    var x;
    var y;
    var z;

    x = 7;
    y = 12;
    z = "My name is";

    x = x + 2;
    y = y + 4;
    z = z + " John!"
    
    return [x, y, z];
}
console.log (main());

module.exports = main;
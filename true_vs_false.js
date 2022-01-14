// Falsy:
// false
// 0
// ""
// undefined
// null
// NaN

// Truthy:
// "0"
// " "
// []
// {}   baki sob truthy
let name = 0;
if(name || name == 0) {  //ai khan a  "name == 0" diyar jonno 0 true value prokash korbe....
    console.log("Condition is True.");
}
else {
    console.log("Condition is False.");
}

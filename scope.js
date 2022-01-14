const bonus = 20;

function add(num, num1) {
    let sum = num + num1 + bonus;
    if (sum > 7) {
        var mood = "happy";
        mood = "ByBy";
        mood =  "Good Bye";
        console.log(mood);
    }
    return sum;
}
const result = add(7, 3);
console.log(result);

// console.log(day);  
day = Date(); // var dara niche declear korle Hoisting hoy but value jai na kintu jodi var ar "day = Date()" ai ta upore lokhe niche "var = day" likhe ta hole value pass korbe
console.log(day);
var day; //ai khan a thakle error dibe kaj korbe na ai ta k bole Hoisting 


// Block scope
// global scope
// "Hoisting" important for job interview
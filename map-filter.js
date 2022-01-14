const numbers = [2, 4, 6, 9, 10, 7];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

const numbers1 = [2, 4, 6, 9, 10, 7, 8, 11];

function square(num){
    return num * num;
}
const square1 = num => num * num;
const square2 = x => x * x;

const result = numbers1.map(function square(num) {
    return num * num;
})
console.log(result);


const result2 = numbers1.map(x => x * x);
console.log(result2);



// Filter
 const bigger = numbers1.filter(x => x > 7);
 console.log(bigger);

 const smaller = numbers1.filter(x => x < 5);
 console.log(smaller);

//  find
const findValue = numbers1.find(x => x > 7);  //find a shorto puron kore matro akta value output dibe but filter a sob value dibe
console.log(findValue);
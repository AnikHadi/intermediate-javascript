const students = [
    {id: 11, name: "Abdur Rahim"},
    {id: 21, name: "Halim"},
    {id: 31, name: "Kalfan"},
    {id: 41, name: "Zabir"}
]
// old method
const stdName = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const nameArray = element.name;
    stdName.push(nameArray);
}
console.log(stdName);

// ES6 Method
const stdName1 = students.map(s => s.name);
console.log(stdName1);
const stdId = students.map(s => s.id);
console.log(stdId);

const biggerName = students.filter(s => s.id > 20);
console.log(biggerName);
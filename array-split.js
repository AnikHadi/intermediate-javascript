const nums = [1, 2, 3, 4, 5, 6, 7];
// const part = nums.slice(2, 5);
// console.log(part);

const remove = nums.splice(2, 3, 44, 55); //splice je jaiga thake suru hobe sei khan thake koi ta value sorate chai sei shokhan dite hobe 
console.log("nums: ", nums);              //abr dui ta element add korar pore joto gula value add korbo sob main array te add hoye jabe

console.log("remove: ", remove);

const removeAndAdd = nums.splice(2, 2);
console.log("nums: ", nums);
console.log(removeAndAdd);


const arrayJoin = [...nums, ...remove, ...removeAndAdd];
console.log(arrayJoin);
const arrayJoin2 = nums.concat(remove).concat(removeAndAdd);
console.log(arrayJoin2);

const together = arrayJoin2.join(": ami ");
console.log(together);

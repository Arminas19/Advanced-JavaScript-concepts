
// using a for loop
let nums = [1, 2, 3, 4, 5]
let result = []

for(let num of nums){
result.push(2 * num);
}
console.log(result);
// using map()
const multiplyByTwo = function(num){
return num * 2;
}

const mapResuts = nums.map(multiplyByTwo);
console.log(mapResuts);
// simplified w/ map()

const multiplyByTwo2 = nums.map(function(num){return 2 * num} )
    console.log(multiplyByTwo2);

// simplified arrow function 
const multiplyByTwo3 = nums.map(num => num * 2); 
    console.log(multiplyByTwo3);

// with objects

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const studentswithIds = students.map(students => [students.name, students.subjects]);
console.log(studentswithIds);
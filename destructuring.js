// Destructuring arrays
let ages = [30, 26 ,27];
// let john = ages[0];
// let marry = ages[1];
// let steeve = ages[2];
let [john, marry, steeve] = ages;
console.log(john, marry, steeve);

// Destucturing objects
let jobs = {
Mike : 'designer',
bob : 'developer',
frank: 'accountent',
};
let {Mike, bob, frank} = jobs;
console.log(Mike, bob, frank);

// Destucturing subsets
let languages = ['English', 'Lituvanian', 'Polish', 'German', 'Irsih'];
let [marrynative, marrysecondary] = languages;
console.log(marrynative, marrysecondary);

let [johnnative, , , johnsecondary] = languages;
console.log(johnnative, johnsecondary);


let lang2 = {
firstLanguage: 'Lithuvanian',
secondLanguage: 'polish',
thirdLanguage: 'Russian',
fourthLanguage: 'English',

};

let {firstLanguage, secondLanguage} = lang2;
console.log(firstLanguage, secondLanguage);
// using rest parameter syntax
let fruits = ['apple', 'bannana', 'cherry', 'blueberry', 'rasberry'];
let [favourit, secondFav, ...others] = fruits;

console.log(favourit);
console.log(secondFav);
console.log(others);

let favFoods = {

tom: 'pizza',
bill: 'peas',
adi: 'ketchup',
struna: 'meatballs',
}

let {tom, adi, ...rest} = favFoods;
console.log(tom);
console.log(adi);
console.log(rest);

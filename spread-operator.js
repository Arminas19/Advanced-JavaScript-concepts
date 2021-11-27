
// no spread operator 
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log('second array: ' + arr2);
console.log('First arry: ' + arr1);

//Copying an arry 
let arr3 = [4, 5, 6 ];
let arr4 = [...arr3];

arr4.push(7);

console.log('Third array: ' + arr3);
console.log('Forth arry: ' + arr4);
//Copying an object
let obj1 = { a:6,  b:7, c:8, d:9};
let obj2 = {...obj1, f: 16};
let obj3 = {...obj2, f:15 }
console.log('First object: ' + obj1);
console.log('second object: ' + obj2);
console.log('third object: ' + obj3);

//Copying only part of array/object
let arr5 = [...arr4, {...obj2}, {...obj3}, 'z', 'x', 'c' ];
console.log(arr5);
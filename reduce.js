/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 10);
console.log(sum);




const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property
  let totalExperince = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
  console.log(totalExperince);
  
  // Grouping by a property, and totaling it too

let experienceByProffession = teamMembers.reduce((acc, curr) => {
let Key = curr.profession;
if(!acc[Key]){
acc[Key] = curr.yrsExperience;
}
else{
    acc[Key] += curr.yrsExperience
}
return acc
  }, {});


console.log(experienceByProffession);
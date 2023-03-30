//A96409 NSEREKO SARAH 

//Using a for in loop to iterate through a list of students 
const students=["Drea","Mark","Angellica","Denis","Gavin","Michelle"]
let space=" "
for (let name in students) {
    space+= students[name] +"\n"
    
  }
console.log(space)


//Using a for of loop to Calculate the sum of an array of numbers
const numbers = [1,2,3,4,5,6,7,8]

let sum = 0
for (let x of numbers) {
  sum += x
}
console.log("Sum:",sum)


//Using a do while loop to print out a numbers incrementally
let i=0
let addition=''
do {
    addition += "The number is " +i + "\n" ;
    i++;
  }
  while (i < 10);

  console.log(addition)

// Using a while loop to print out numbers divisible by 2 and less than 100
var l=0
var evennumbers=''
while (l<100) {
    if (l%2 == 0) {
        evennumbers += "The number is " + l+"\n";
    }
    l++;
   
  }
  console.log(evennumbers)



  




  
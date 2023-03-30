//a96409

//map() function helps to carryout an operation on every element in the array and create a new array with the operation carried out
const values = [90, 89, 23, 49]
const newarray = values.map(additions)//creates a new array with 18 added to it

function additions(number) {
  return number + 18
}
console.log("The values after the map method is used are :",newarray)



//filter() function iterates over existing values in a given array and returns the values that pass a given condition
const value = [1,2,3,4,5,6,7,8,9,10,11,12]
const newarray2 = value.filter(divisable)

function divisable(value) {
  return value%3==0
}
console.log("The values after the filter method is used are :",newarray2)// these values are divisible by 3


//reduce()  reduces all elements in an aray into a single value
const numbers=[5,10,20,30]
const summation=numbers.reduce((accumulator,currentvalue) => {

    //we shall be adding the current value to the accumulator
     
    return accumulator+currentvalue
},0); 

//First argument in the reduce fuction is a callback function and second value is the  initial value of the accumulator
console.log("The value after the reduce function is applied is :",summation)


/**
 Inner working of the reduce function above 
 This is the array numbers=[5,10,20,30]
 When we use the reduce function ,the accumulator is set to 0 and current value is 5 
 it adds the two together 
 then accumulator is set to 5 after  the  call back function is executed and current value is 10
 the two are added together 
 then accumulator is set to 15 after the call back function is executed and current value is 30 
 then

 */







//push() adds new items to the end of an array 
const diseases= ["Malaria","Kwashiorkor", "Marasmus", "Ebola"];
diseases.push("Cystic Fibrosis")
console.log(diseases)

//pop() removes the last element in an array 
diseases.pop()
console.log(diseases) // removes the last element im the array 


//every() method is used to check if all elements in an array satisfy a condition or not
const multiples=[3,6,9,12,15,18,21]
const isMultiple=multiples.every(multiplechecker)

function multiplechecker(i){ //check if all elements in the array are divisible by 3
    return i%3==0
}
console.log("It is "+ isMultiple + " that the array "+ multiples +" are multiples of 3")//returns true because they are all multiples of 3

//fill() method is used to fill all elements in an array with a specfic value 
const desserts=["Cinnamon roll","Cake", "Pie","Chocolate Fondue"]
desserts.fill("Icecream")
console.log(desserts)//replaces all elements in previous array with icecream



const arr1 = [1, 3, 3, 5, 6, 4];
const arr2 = [1, 3, 3, "BOY", 6.5, "LADY", false];
// console.log(hostels[3])
// console.log(hostels.length)
// hostels.push("Nsibambi")
// hostels.push("Sabiti")
// console.log(hostels)
const listOfHostels = () => {
return ["Tupendane",
"Cronos", "Sky Courts",
"Davids Ark"]
}
function mentionHostels() {
for (let i = 0; i < listOfHostels().length; i++) {
console.log(`Number ${i + 1} ${listOfHostels()[i]}`)
}
}
mentionHostels()
/*
do - while loop
while loops
for in
for of
map()
filter()
reduce()
push()
pop()
every()
fill()
*/
// for (let number = 1; number <= MAX_NUM; number++) {
// console.log("The natural number is ", number)
// }
// let sum = 0;
// const MAX_NUM = 100;
// for (let number = 1; number <= MAX_NUM; number++) {
// sum += number;
// }
// console.log(sum)

//do while loop
let fname = "Joshua";
do{
    console.log("Yes,his name is"+fname);
} while(fname !="Joshua");

//while loop
let n = 0;
while (n <= 5){
    console.log("This is while loop number"+n);
    n++;
}

//for in loop
let Lnames = ["Joe","Tate","Tom","Timo"]
for (let m in Lnames){
    console.log(Lnames[m]);
}

//for of loop
const marks = [56,38,69,23,78];
for (const ma of marks){
    console.log(ma);
}

//map()
const numArray = [24,67,89,90];
const MainnumArray = numArray.map((n) => {
    return n+n;
});

console.log(MainnumArray);

//filter()
const filterevennum =numArray.filter(mm => mm%2 === 0);
console.log(filterevennum);

//reduce()
const sumnum = numArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sumnum);

//push()
const places = ['Tokoyo','Kampala','Washington','Texas'];
const newPlace = places.push('California','London');
console.log(places);

//pop()
const removedPlace = places.pop()
console.log(places);

//every()
const areAllEven = numArray.every(nn => nn%2 === 0);
console.log(areAllEven);

//fill()
const zeros = new Array(3).fill(0);
console.log(zeros);
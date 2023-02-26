//Operators
/* ASSIGNMENT OPERATORS
Assignment Operators
Addition Assignment Operators       +=
Subtraction Assignment Operators    -=
Multiplication Assignment Operators *=
Multiplication Assignment Operators *=
Remainder Assignment Operators      %=
Exponential  Assignment Operators   **=
*/
let l = 8;
let m = 2;

// Addition Assignment Operators       +=
let final_ans = m += l;
console.log(m,"and ",l,"equals ",final_ans);

//Subtraction Assignment Operators    -=
let final_ans1 = m -= l;
console.log(m,"and ",l,"equals ",final_ans1);

//Multiplication Assignment Operators *=
let final_ans2 = m *= l;
console.log(m,"and ",l,"equals ",final_ans2);

//Multiplication Assignment Operators *=
let final_ans3 = m /= l;
console.log(m,"and ",l,"equals ",final_ans3);

//Remainder Assignment Operators      %=
let final_ans4 = m %= l;
console.log(m,"and ",l,"equals ",final_ans4);

//Exponential  Assignment Operators   **=
let final_ans5 = m **= l;
console.log(m,"and ",l,"equals ",final_ans5,"\n");


/* ARITHMETIC OPERATORS
        +
        -
        /
        %
        ++
        --
        **
*/

// Addition
let a = 4;
let b = 5;
let c = a + b;
console.log(a,"plus ",b,"is ",c);

// subtraction
let num1 = 15;
let num2 = 4;
let ans = num1 - num2;
console.log(num1,"minus ",num2," is",ans);

// Remainder 
let ans2 = num1 % num2;
console.log(num1," by ",num2,"is ", ans2);

// Division
let num3 = 50;
let num4 = 2;
div_ans = num3/num4;
console.log("The division of ",num3,"by ",num4,"is ",div_ans,"\n");

//Increment ++
double_plus = a++;
console.log("Increased to ",a);

//Decrement --
double_minus = num1--;
console.log("Decreased to ",num1);

//EXponentiation ** 
exp = 2 ** 3;
console.log(exp,"\n");



/* COMPARISON OPERATORS
        ==  Equal To
        !=  NOT Equal To
        === Strict Equal To
        !== Strict NOT Equal To
        >=
        <=
        >
        <
*/
// Greater or equal to >=
console.log("10>=4 ",10>=4);
console.log("1>=4 ",1>=4);
console.log("4>4 ", 4<=4);

// less or equal to <=
console.log("10<=4 ",10<=4);
console.log("1<4 ",1<=4);
console.log("10>10 ",10<=10);

// Greater than >
console.log("10>4 ",10>4);
console.log("1>4 ",1>4);

// Less than <
console.log("10<4 ",10<4);
console.log("10>4 ",10>4);

// Equal to ==
console.log("4==4 ",4==4);
console.log("10==4 ",10==4);

// Not Equal to !=
console.log("10!=4 ",10!=4);
console.log("4!=4 ",4!=4);

// Strictly Equal to ===
console.log("4===4.0 ",4===4);
console.log("4.60===4 ",4.60===4);

// Strict NOT Equal to ===
console.log("4!==4.0 ",4!==4);
console.log("4.60!==4 ",4.60!==4,"\n");

/* LOGICAL OPERATORS
        &&
        ||
        !
*/
// AND operator &&
let x = 10;
let y = 4;
console.log("1>",y,"&&7<",x," is",1>y&&7<x); 
console.log("4>=",y,"&&7<",x," is",4>=y&&7<x,"\n"); 

// OR operator ||
console.log("1>",y,"||7<",x," is",1>y||7<x); 
console.log("4!=",y,"||7>=",x," is",4!=y||7>=x,"\n");

// NOT !
console.log("!(1>",y,"||7<",x," is)",!(1>y||7<x));
console.log("!(4!=",y,"||7>=",x," is)",!(4!=y||7>=x),"\n");

// String Operators
let h = "Hello word";
console.log(h);
// Bitwise Operators

const messgae1 = ['Javascript ','Is ','Fun'];

// function to join each  string elements

function joinStrings(accumulator, currentValue){
    return accumulator + currentValue;
}

// reduce join each element of the string
let joinedString = messgae1.reduce(joinStrings);
console.log(joinedString);

// Expected output: Javascript Is FUn


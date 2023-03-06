let num1 = 20;
let num2 = "20";

// if (num1 != num2) {
//     console.log(true)
// } else {
//     console.log(false)
// }

let isRaining = true;
let isCloudy = false;

//  SHORT HAND METHODS
//Ternary operators
// console.log(
//     isRaining || isCloudy ? "Stay in bed 💤"
//         : "Go to class 👨‍🎓"
// )

//  Short circuiting
// console.log((isRaining || isCloudy) && "Stay in bed 💤")



// if (isRaining && !isCloudy) {
//     console.log("Drive to Kenya 🚘")
// } else {
//     console.log("Fly to Kenya ✈")
// }

// Kampala is the capital of Kenya  - False
//             AND
// Kampala is in Uganda   - True



let user_role = ""

switch (user_role) {
    case "admin":
        console.log("Full Rights")
        break;
    case "patient":
        console.log("Patient Rights")
        break;
    case "doctor":
        console.log("Doctor Rights")
        break;
    case "receptionist":
        console.log("Receptionist Rights")
        break;
    default:
        console.log("User role not found!!!")
        break;
}


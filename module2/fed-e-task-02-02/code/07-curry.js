
// function checkAge(min) {
//     return function(age) {
//         return age>=min
//     }
// }

//ES6
let checkAge=min=>(age=>age>=min)


let checkAge18=checkAge(18)
let checkAge22 = checkAge(22)


console.log(checkAge18(19))
console.log(checkAge22(21))
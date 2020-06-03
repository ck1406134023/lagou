const fp=require('lodash/fp')
//数据
let cars=[{
    name:"Ferrai FF",
    horsepower:660,
    dollar_value:700000,
    in_stock:true
},{
    name:"Spyker C12 Zagato",
    horsepower:650,
    dollar_value:648000,
    in_stock:false
},{
    name:"Jaguar XKR-S",
    horsepower:550,
    dollar_value:132000,
    in_stock:false
},{
    name:"Audi R8",
    horsepower:525,
    dollar_value:114200,
    in_stock:false
},{
    name:"Aston Martin One-77",
    horsepower:750,
    dollar_value:1850000,
    in_stock:true
},{
    name:"Pagani Huayra",
    horsepower:700,
    dollar_value:1300000,
    in_stock:false
}]

// let isLastInStock=function(cars) {
//     console.log('cars'+cars)
//     let last_car=fp.last(cars)
    
//     return fp.prop('in_stock', last_car)
// }
// const r=isLastInStock(cars)
// console.log(r)


// let isLastInStock=fp.flowRight(fp.prop('in_stock'),fp.last)


// console.log(isLastInStock(cars))


// let lastName=fp.flowRight(fp.prop('name'),fp.first)

// console.log(lastName(cars))


// let _average=function(xs){
//     return fp.reduce(fp.add,0 , xs)/xs.length;
// }

// let averageDollarValue=function(cars){
//     let dollar_values=fp.map(function(car){
//         return car.dollar_value
//     },cars)
//     return _average(dollar_values)
// }

// console.log(averageDollarValue(cars))

// let averageDollarValue = fp.flowRight(_average,fp.map(fp.prop('dollar_value')))

// console.log(averageDollarValue(cars))

let _underscore=fp.replace(/\W+/g,'_')

let sanitizeNames=fp.flowRight(fp.map(fp.flowRight(_underscore,fp.prop('name'))))

console.log(sanitizeNames(cars))
// console.log(cars)


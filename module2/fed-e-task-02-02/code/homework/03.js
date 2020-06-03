const {Maybe,Container,}=require('./02')
const fp=require("lodash/fp")

// 1
let maybe = Maybe.of([5,6,1])
let ex1= fp.map(fp.add())(maybe)
console.log(ex1)
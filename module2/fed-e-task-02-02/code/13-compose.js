// _.flowRight
const _=require('lodash')

const reverse=arr=>arr.reverse()
const first = arr => arr[0]
const toUpper=str => str.toUpperCase()
const compose=(...args)=>val =>args.reverse().reduce((acc,fn)=>fn(acc),val)
const f=compose(toUpper,first,reverse)
console.log(f(['one','two','three']))


// function compose(...args) {
//     return function(value) {
//         return args.reverse().reduce(function(acc,fn){
//             return fn(acc)
//         },value)
//     }
// }


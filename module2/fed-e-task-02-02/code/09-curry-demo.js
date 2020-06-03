const _ = require('lodash')

const match=_.curry(function(reg,str){
    return str.match(reg)
})

const haveSpace=match(/\s+/g)
const haveNumber=match(/\d+/g)

// console.log(haveSpace('helloworld'))
// console.log(haveNumber('abc1'))

const filter=_.curry(function(func,array){
    return array.filter(func)
})

const findSpace=filter(haveSpace)
console.log(filter(haveSpace,['json c','aaa']))

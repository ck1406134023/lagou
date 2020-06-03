const _=require('lodash')

function getSum(a,b,c){
    return a+b+c
}

// const curried=_.curry(getSum)

// console.log(curried(1,2,4))

// console.log(curried(1)(2,4))

// console.log(curried(1,2)(4))

function curry (func) {
    return function curriedFn(...args) {
        //判断实参 形参个数
        if(args.length < func.length){
            return function(){
                return curriedFn(...args.concat(Array.from(arguments)))
            }
        }
        return func(...args)
    }
}

const curried=curry(getSum)
console.log(curried(1,2,4))

console.log(curried(1)(2,4))

console.log(curried(1,2)(4))
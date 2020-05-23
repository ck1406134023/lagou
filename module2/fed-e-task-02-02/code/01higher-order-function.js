
const log=console.log
function forEach(array, fn) {
    for (const iterator of array) {
        fn(iterator)
    }
}

// let arr=[1,2,3,4]
// forEach(arr,item=>{
//     console.log(item)
// })

//filter
function filter(array, fn){
    let results=[]
    for (const iterator of array) {
        if(fn(iterator)){
            results.push(iterator)
        }
        
    }
    return results
}

//测试
let arr=[1,3,5,2]
let r=filter(arr,item=>{
    return item%2===0
})

log(r)

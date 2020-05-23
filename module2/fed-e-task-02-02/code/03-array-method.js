// 模拟map every some

// map
const map=(array,fn)=>{
    let results =[];
    for(let val of array){
        results.push(fn(val))
    }
    return results;
}

//测试
// let arr=[1,2,3,4]
// arr=map(arr,val => val*val)
// console.log(arr)

//every
const every =(array, fn) => {
    let result = true;
    for (let val of array) {
        result = fn(val)
        if (!result) {
            break;
        }
    }
    return result;
}

//测试
// let array =[11,12,13];
// let r=every(array,v=>v>10)
// console.log(r)

//some
const some =(array, fn) => {
    let result = false;
    for (let val of array) {
        result = fn(val)
        if(result){
            break;
        }
    }
    return result;
}

// 测试
let array =[11,15,13];
let r=some(array,v=>v%2===0)
console.log(r)

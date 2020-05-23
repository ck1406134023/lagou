
// function makeFn(){
//     let msg='Hello'
//     return ()=>{
//         console.log(msg)
//     }
// }

// const fn=makeFn()
// fn()

// makeFn()()


//once
const once=(fn)=>{
    let done=false
    return function() {
        if (! done) {
            done = true
            return fn.apply(this,arguments)
        }
    }
}

let pay=once(function(money){
    console.log(`支付：${money} RMB`)
})

pay(1)
pay(1)
pay(1)
pay(1)
pay(1)
pay(1)
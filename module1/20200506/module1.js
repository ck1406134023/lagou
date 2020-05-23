// var a=[];
// for (var i =0;i < 10;i++){
//     a[i]=function() {
//         console.log(i)
//     }
// }

// a[6]();

// let tep=123;
// tep=1;
// if(true){
//     // let tep;
//     console.log(tep);
//     // let tep;
// }


// var arr=[12,34,32,89,4];
// const min=arr.reduce((a,b)=>{
//     return a>b ? b: a;
// })
// console.log(min)

// var a=10;
// var obj={
//     a:20,
//     fn(){
//         setTimeout(()=>{
//             console.log(this.a)
//         })
//     }
// }
// obj.fn()

var promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        var a="hello "
        resolve(a)
    },10)
}).then((value)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var b="lagou "
            resolve(value+b)
        },10)
    })
}).then(value=>{
    setTimeout(()=>{
        var c="I love U";
        console.log(value+c)
    },10)
})
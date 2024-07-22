// const { error } = require("console")

const { error } = require("console")

//const { rejects } = require("assert")

// const doWorkPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         //resolve([1,2,3])
//         reject('Things went wrong!')
//     },2000)
// })

// doWorkPromise.then((result)=>{
//     console.log('Success!',result)
// }).catch((error)=>{
//     console.log('Error!', error)
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(1, 2).then((sum) => {
    console.log(sum)
    return add(sum, 2)
}).then((sum2) => {
    console.log(sum2)
}).catch((error)=>{
    console.log(error)
})
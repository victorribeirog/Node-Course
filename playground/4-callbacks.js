// setTimeout(()=>{
//     console.log('Two seconds are up')
// },2000)

const { error } = require("console")

// const names = ['Victor','Ribeiro']
// const shortNames= names.filter((name)=>{
//     return name.length <=4
// })

// const geocode = (address, callback)=>{
//     setTimeout(()=>{
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data)=>{
//     console.log(data)
// })


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


// const add = (x,y,callback)=>{
//     setTimeout(()=>{
//         callback(x+y)
//     },2000)
// }
// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

const doWorkCallback = (callback) => {
    setTimeout(() => {
        //callback('This is my error!', undefined)
        callback(undefined, [1,2,3])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) { return console.log(error) }
    console.log(result)
})

require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('6698013310894f4105cfffbe').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
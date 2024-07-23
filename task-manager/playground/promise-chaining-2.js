require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6698013310894f4105cfffbe').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

const deleteTaskAndCount = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('669e919260d7a199faf1546c').then((count)=>{
    console.log(count)
}).catch((error)=>{
    console.log(error)
})
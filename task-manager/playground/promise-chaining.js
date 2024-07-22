require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('669807abbf1d26f5ec4cf064',{age: 1 }).then((user)=>{
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
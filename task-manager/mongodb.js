const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// Replace the placeholder with your Atlas connection string
const uri = "mongodb://127.0.0.1:27017";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);
const databaseName = 'task-manager'

async function run() {
    try {
        //Connect the client to the server (optional starting in v4.7)
        const clientConnected = await client.connect();
        //Send a ping to confirm a successful connection
        const db = clientConnected.db(databaseName);
        const users = db.collection('users')
        const task = db.collection('tasks')

        //CREATE

        // const doc = { _id: id, name: 'José', age: 25 }

        // const doc = [
        //     {
        //         description: 'Clean the house',
        //         completed: true
        //     },
        //     {
        //         description: 'Renew inspection',
        //         completed: false
        //     },
        //     {
        //         description: 'Pot plants',
        //         completed: false
        //     }
        // ]
        // const result = await task.insertMany(doc);
        // console.log('Inserted document with _id: ' + result.insertedId);
        // for (const [key, value] of Object.entries(result.insertedIds)) {
        //     console.log(`Inserted document at index ${key} with _id: ${value}`);
        // }

        // READ

        // const result = await task.findOne({_id: new ObjectId("6696a8e516f01e24e91c08b3")});
        // console.log(result)
        // const notCompleted = await task.find({completed: false}).toArray()
        // console.log(notCompleted)
        //const result = await users.find({age: 23}).toArray()
        //const result = await users.find({age: 23}).co()
        //console.log (result)

        //UPDATE
            // const result = await users.updateOne({
            //     _id: new ObjectId("6695775e80488922b73f1de1")
            // }, {
            //     $set: { name: 'Mike' }
            //     $inc:{age: 1}
            // });
            // console.log(result)

            // const upM = await task.updateMany({
            //     completed: false
            // },{
            //     $set:{completed: true}
            // })
            // console.log(upM)

        //DELETE
            // const del = await users.deleteMany({
            //     age: 23
            // })
            // console.log(del)

            const delM = await task.deleteOne({
                description: "Clean the house"
            })
            console.log(delM)
    } finally {
        // Ensures that the client will close when you finish/error
        //     await client.close();
        // }
    }
}
run().catch(console.dir);


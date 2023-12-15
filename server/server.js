const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser'); // middleware making object 
const {MongoClient} = require('mongodb');
app.use(cors()); // middleware 
app.use(bodyParser.json());

//NOTE: Change to your own Mangodb cluster
const uri =  "mongodb+srv://pap2153:FullStackTest@cluster0.5ixr37p.mongodb.net/?retryWrites=true&w=majority" //Make a cluster for mangodb
//Change uri above

//Client 
const client = new MongoClient(uri); // creating instance --> connection setting
const db = client.db("notes"); // referrencing db // makes a reference to a specific database that already exists

//Object ID 
const ObjectId = require('mongodb').ObjectId;

async function main(){
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        app.listen(5000,()=>{console.log("server started on port 5000")});
 
    } catch (e) {
        console.error(e);
    }
}






//Gets Data
app.get('/api', async (req, res) => {
    const data = await db.collection('notes').find().toArray();
    res.send(data);
});

//Posts Data
app.post('/api/postData', express.json(), async (req, res) => {
    const data = req.body;
    const result = await db.collection('notes').insertOne(data);
    res.send(result);
});

//Deletes Data
app.delete('/api/deleteNote/:id', async (req, res) => {
    const noteId = req.params.id;
    const result = await db.collection('notes').deleteOne({ _id: new ObjectId(noteId) });
    res.send(result);
});


//Posts data to the mango db database
main().catch(console.error);


/*
1. require packages 
2. create mongo db connection
3. create get and post end point
*/
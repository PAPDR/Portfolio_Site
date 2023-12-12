const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser'); // middleware making object 
const {MongoClient} = require('mongodb');
app.use(cors()); // middleware 
app.use(bodyParser.json());
const uri =  "mongodb+srv://pap2153:FullStackTest@cluster0.5ixr37p.mongodb.net/?retryWrites=true&w=majority" //Make a cluster for mangodb. Can't access others
const client = new MongoClient(uri); // creating instance --> connection setting
const db = client.db("test"); // referrencing db // makes a reference to a specific database that already exists
async function main(){
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        app.listen(5000,()=>{console.log("server started on port 5000")});
 
    } catch (e) {
        console.error(e);
    }
}


app.get("/api", async (req, res) =>{
    const data = await db.collection("names").find().toArray();
    res.send(data);
}); //Grabs data from database 
app.post("/api/postData", async (req, res) => {
    console.log("req received");
    const data = req?.body;

    const result = await db.collection("names").insertOne(data);
    res.send(result);
})
//Posts data to the mango db database
main().catch(console.error);


/*
1. require packages 
2. create mongo db connection
3. create get and post end point
*/
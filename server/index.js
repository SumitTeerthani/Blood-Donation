require('dotenv').config();
const express = require('express');
const mongoose=require ('mongoose');
const { MongoClient } = require('mongodb');
const routes=require('./router');
const User=require('./models/user')

const app = express();
const mongoURL=process.env.MONGO_URL;


const client =new MongoClient(mongoURL,{
    
});

app.use(express.json());//To parse Json request 

mongoose.set('bufferCommands', false); // Disable buffering globally

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('Error connecting to MongoDB:', error));

const port=process.env.PORT || 6969;

app.get('/',(req,res)=>{
    res.send("Backend started working This is its Home Page ");
})
// app.post('/user', async (req, res) => {
//     try {
//         const newUser = new User(req.body);
//         await newUser.save();
//         res.status(201).send(newUser);
//     } catch (error) {
//         res.status(400).send(error.message);
//         res.status(400).send({ error: 'Error creating user' });
//     }
// });

app.use('/api',routes);
app.listen(port,()=>{
    console.log(`Server started on working port: ${port}`);
})
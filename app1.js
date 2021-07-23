                    //require the dependecies installed ie body-parser and Express
// const express = require('express');
//const bodyParser = require('body-parser');
// initialize our express app
//const app = express();

                 //dedicating a port number and telling our express app to listen to that port.

// let port = 3000;

// app.listen(port, () => {
//    console.log('Server is up and running on port numner ' + port);
// });

// At this point the server is up and running but does nothing and need to make it interactive will use design parten MVC 
// to Organise the Models which will include all the codes for the database models,Views and Controllers which handles 
// the logic of how the app handles the incoming requests and the outgoing responses. Then also Routes which are like guides
// they tell the client browser or mobile app to go to a particular controller once a URL is invoked 


// adding a route 

const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();
app.use('/products', product);
let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

// Set up mongoose connection
//const mongoose = require('mongoose');
//let dev_db_url = 'mongodb://user1:user123@cluster0.eblkx.mongodb.net/productstutorial';
//let mongoDB = process.env.MONGODB_URI || dev_db_url;
//mongoose.connect(mongoDB);
//mongoose.Promise = global.Promise;
//let db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));



const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://user1:<user123>@cluster0.eblkx.mongodb.net/cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
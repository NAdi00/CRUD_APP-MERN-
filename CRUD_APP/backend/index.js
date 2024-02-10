const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require("body-parser");
const ChannelModel = require('./modules/Channels')
const cors = require('cors');
const app = express();
const mysql = require('mysql');

// Create a MySQL connection////This is a demo/temporary database
const connection = mysql.createConnection({
  host: 'locahost',
  user: 'Admin',
  password: '123456',
  database: 'Products'
});

// Connect to the database
connection.connect()
.then (console.log('Connected to mysql_database'))
.catch ((error) => {
    console.log(error);
})


//////FEACTING DATA FROM FRONTEND////////////////////////// 

///////////////////// SQL HANDLING FROM REACT/FRONTEND
const channelId = 1; // Example ID
const Query = `DELETE FROM channels WHERE id = ${channelId}`;///replace String by message from react

connection.query(deleteQuery, (error, results, fields) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(`Deleted ${results.affectedRows} channel(s)`);
});

// Close the connection
connection.end();

app.use(cors())

app.use(bodyParser.json());

///////////MONGODB CONNECTIONS AND ROUTING ARE CLOSED FOR NOW //////////////////////////////////

// app.get( '/fromFront', (req, res) => {
//     const received = req.body;
//     console.log(req[0]);
//     res.status(201).send(req[0] + "Hello");
// });

// app.get('/', async (req, res) => {
//     res.status(200).send('<h1>Hello Node main page</h1>')
// })

// mongoose.connect('mongodb://localhost:27017/node_db')
//     .then(() => {
//         console.log('Connected to MongoDB!');
//         })
//     .catch((error) => {
//         if (error) {
//             console.log(error);
//         }
//     })
        
//     app.get('/insert', (req, res) => {
//         const user = new ChannelModel({
//             id : 1,
//             name : 'Adivhaho',
//             email : 'hey@gmail.com',
//             password : '1234'
//         });
//         // Save the user to database
//         user.save().then(()=>{
//             res.send(`User ${user.name} has been added!`);
//         }).catch((err)=>{
//             console.log(err);
//         })
//     })
    
//     app.get('/read', (req, res) => {
//         ChannelModel.find().
//         then(data => {return res.json(data);})
//         .catch(err => {
//             console.log(err);
//         })
//     })
//     app.put('/update/:id', (req, res) => {
//         const channelId = req.params.id;
//         const updatedName = req.body.name; // Assuming the updated name is sent in the request body
    
//         ChannelModel.findByIdAndUpdate(channelId, { name: updatedName }, { new: true })
//             .then(updatedChannel => {
//                 if (!updatedChannel) {
//                     return res.status(404).json({ error: 'Channel not found' });
//                 }
//                 return res.json(updatedChannel);
//             })
//             .catch(err => {
//                 console.log(err);
//                 return res.status(500).json({ error: 'Internal server error' });
//             });
//     });
//     app.delete('/delete/:id', (req, res) => {
//         const channelId = req.params.id;
    
//         ChannelModel.findByIdAndDelete(channelId)
//             .then(deletedChannel => {
//                 if (!deletedChannel) {
//                     return res.status(404).json({ error: 'Channel not found' });
//                 }
//                 return res.json({ message: 'Channel deleted successfully' });
//             })
//             .catch(err => {
//                 console.log(err);
//                 return res.status(500).json({ error: 'Internal server error' });
//             });
//     });
    const PORT = 5050
    app.listen(PORT, () => {
        console.log(`listing to port ${PORT}`);
    });

    app.get('/', async (req, res) => {
        res.status(201).send("JUST SENT THIS NOW")
    })
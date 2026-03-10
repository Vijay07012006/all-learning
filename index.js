const express = require('express'); 
// const cors = require('cors')
// console.log(express);
const hostname = '127.0.0.1';
const port = 5000
const app = express();   // server creation 

app.use(express.json());  // middleware for body parsing
// app.use(cors());
// app.get('/' , (req , res)=>{
//     res.send('this is from get method')
// })
// app.post('/' , (req , res)=>{
//     // res.send('this is form post method')
//     res.json(req.body);
// })

const connectDB = require('./config/db'); // database connection

// app.listen(port,hostname , ()=>{
//     console.log(`Server is running at http://${hostname}:${port}`);
// })

const startServer = async () => {   // database connection and server start 
    await connectDB();
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`);
    });
};

startServer(); // Start the server after connecting to the database



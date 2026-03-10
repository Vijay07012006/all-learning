// const express = require('express');  
// const app = express();
// const hostname = '127.0.0.1';
// const port = 3000;
// app.use(express.json());
// app.get('/', (req, res) => {
//     res.send("ok by get method")
// })
// app.post('/', (req, res) => {
//     // res.send("send by post method")
//     res.json(req.body);
// })

// const connectDB = require('./database')

// const startServer = async () => {
//     await connectDB();
//     app.listen(port, hostname, () => {
//         console.log(`Server started at http://${hostname}:${port}`);
//     })
// };
// startServer();


const express = require('express');
const hostname = '127.0.0.1';
const port = 5000;
const app = express();

app.use(express.json());

const connectDB = require('./config/db');

const startServer = async () => {
    await connectDB();
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`);
    });
};

startServer();
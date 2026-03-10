// start server file
const app = require('./src/app');
require('dotenv').config();
const connectDb = require('./src/db/db');

const startServer = async ()=>{
    try{
        await connectDb();
        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on ${process.env.PORT}`);
        })
    }
    catch(err){
        console.log('Server connection failed', err);
        
    }
}
startServer();
const mongoose = require('mongoose');
const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/MERN_BATCH')
        console.log('Database Connection successfull');
    }
    catch (error){
        console.log('Database connection failed');
        console.log(error);
    }
}
module.exports = connectDB;
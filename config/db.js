// const mongoose = require('mongoose');
// const MongoDB = ()=>{
//     mongoose.connect("mongodb://localhost:27017/Vijay")
//     .then(()=>{
//         console.log("Batabase Connected Successfully");
//     })
//     .catch(()=>{
//         console.log("sorry try again later");
//     })
// }
// module.exports = MongoDB; 



const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Vijay');
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Database connection failed');
        console.error(error);
    }
};

module.exports = connectDB;

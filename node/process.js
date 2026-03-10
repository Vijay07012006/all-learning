const process = require('node:process');

// console.log(process);
// console.log(process.env);

const  a  = require('dotenv')
a.config();
console.log(process.env.url); //isko chalane ke liye ek package install karna higa => npm i dotenv



// // const http = require("http");

// // console.log(http);
// // console.log(http.Agent());

// const http = require("http");

// http.createServer((req, res) => {
// //   res.end("Hello Server");
// if(req.url === '/about'){
//     res.end("<h1>About page calling</h1>")
// }
// if(req.url === '/contact'){
//     res.end("<h1>Contact page calling</h1>")
// }
// if(req.url === '/product'){
//     res.end("<h1>Product page calling</h1>")
// }
// }).listen(3000);


// const http = require("http");

// console.log(http);
// console.log(http.Agent());

const http = require("http");
const fs = require('fs');
http.createServer((req, res) => {
//   res.end("Hello Server");
if(req.url === '/about'){
    const c = fs.readFile('one.html' , (err , data)=>{
         res.end(data)
    })
}
if(req.url === '/contact'){
    res.end("<h1>Contact page calling</h1>")
}
if(req.url === '/product'){
    res.end("<h1>Product page calling</h1>")
}
}).listen(3000);


const fs = require("fs");

// fs.writeFileSync("test.txt", "Hello Node.js");
// const data = fs.readFileSync("test.txt", "utf-8");
// console.log(data);

// fs.readFile("one.html" , (err , data)=>{
//     if(err) throw err;
//     console.log(data.toString(data));
    
// })

// const a = fs.appendFile("one.html"  , "<h1>Hello Vijay how are you</h1>" , (err, data)=>{
//     if(err) throw err;
// })
// console.log(a);

fs.writeFile("six.text" , "I am fine how are you" , (err , data)=>{
    if(err) throw err;
})

// fs.unlink("six.text" , ()=>{})     // delete karne ke liye file or .html

// console.log(fs);

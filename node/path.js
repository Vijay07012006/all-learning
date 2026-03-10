const path = require('path');
// console.log(path,resolve());
// console.log(path.dirname("uploads/first.txt"));

// console.log(path.extname("fourt.js"));
// console.log(path.extname("test.txt"));

const a = path.join("/public" ,"uploads" ,"draw.txt")
console.log(a);

 const b = path.format({
  dir: '/home/vijay',
  base: 'file.txt'
});
console.log(b);

// const c = path.sep;
const c = path.delimiter;    // delimiter 
console.log(c);

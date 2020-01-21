// var http = require('http');

// http.createServer((req, res) => {
//   'use strict';
//   res.write('Hello World!');
//   const fs = require('fs');
//   console.log(req.url)
//   console.log(req.body)
//   let student = { 
//       name: 'Mike',
//       age: 23, 
//       gender: 'Male',
//       department: 'English',
//       car: 'Honda' 
//   };
  
//   let data = JSON.stringify(student, null, 2);

//   fs.writeFile('data1.json', data, (err) => {
//       if (err) throw err;
//       console.log('Data written to file');
//   });
// }).listen(8080);
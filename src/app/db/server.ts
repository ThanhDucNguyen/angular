declare var require: any
var express = require('express')
var app = express()
const fs = require('fs');

app.get('/', (req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  console.log(req.url)
  
})

app.get('/add', (req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200/add');
  let member = {
    ho_ten: req.query.name, 
    so_dien_thoai: req.query.phone, 
    email: req.query.email, 
    nam_sinh: req.query.yearBirth
  };
  fs.readFile('data.json', 'utf8', function (err, data) {
    var json = JSON.parse(data)
    json.push(member)
    fs.writeFile('data.json', JSON.stringify(json), (err) => {
      if (err) throw err;
    });
  })
})

app.get('/delete', (req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200/delete');
  let member = {
    ho_ten: req.query.name,
    nam_sinh: req.query.yearBirth
  };
  fs.readFile('data.json', 'utf8', function (err, data) {
    var json = JSON.parse(data)
    json.forEach( (item, index) => {
      if (member.ho_ten == item.ho_ten && member.nam_sinh == item.nam_sinh)
        json.splice(index,1)
    });
    fs.writeFile('data.json', JSON.stringify(json), (err) => {
      if (err) throw err;
    });
  })
})
app.get('/update', (req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200/delete');
  let member = {
    ho_ten: req.query.name, 
    ho_ten_old: req.query.name_old, 
    so_dien_thoai: req.query.phone, 
    email: req.query.email, 
    nam_sinh: req.query.yearBirth,
    nam_sinh_old: req.query.yearBirth_old
  };
  fs.readFile('data.json', 'utf8', function (err, data) {
    var json = JSON.parse(data)
    var data_update = []
    json.forEach( (item, index) => {
      if (member.ho_ten_old == item.ho_ten && member.nam_sinh_old == item.nam_sinh) {
        var member_update = {
          ho_ten: member.ho_ten, 
          so_dien_thoai: member.so_dien_thoai, 
          email: member.email, 
          nam_sinh: member.nam_sinh
        }
        data_update.push(member_update)
      } else {
        data_update.push(item)
      }
    }, json);
    fs.writeFile('data.json', JSON.stringify(data_update), (err) => {
      if (err) throw err;
    });
  })
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
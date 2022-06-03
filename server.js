const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const express = require('express')
const app = express()
//const cors = require('cors')
const PORT = 8000
//app.use(cors())
// let questions = {
//   1:{
//     1: 'How was your day?',
//     2: 'How was your day2?'
//   },
//   2:{
//     1: 'What did you eat?',
//     2: 'What did you eat?2'
//   },
//   3:{
//     1: 'What was fun?',
//     2: 'What was fun2?'
//   }
// }


const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('login.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }//fix .html and onclick
  else if (page == '/messaging.html') {
    fs.readFile('messaging.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/messaging') {
    if('question' in params){
      if(params['question']== 1){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const one = {
            1: 'How was your day?',
            2: 'How was your day2?'
        }
        res.end(JSON.stringify(one));
      }//student = leon
      else if(params['question'] == 2){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const two = {
          1: 'What did you eat?',
          2: 'What did you eat?2'
        }
        res.end(JSON.stringify(two));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);

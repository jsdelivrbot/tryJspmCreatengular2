//var express = require('../myclientside/node_modules/express');

var express = require('express');

var app = express();

app.use(express.static(__dirname+'/../myclientside/'));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.listen(3007);

console.log('server i s running 3007'); 
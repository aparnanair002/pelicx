var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con=mysql.createConnection({

host:'localhost',
user:'root',
password:'',
database:'pelicx_db'
});

router.post('/', function(req, res, next) {
let admin_username = req.body.username;
let admin_password = req.body.pass;
let query=`SELECT * FROM tbl_admin WHERE admin_name='${admin_username}' AND admin_password='${admin_password}'`;
con.query(query,(err,result)=>{
    if(err) throw err;
    res.send(result);
});



});
module.exports = router;

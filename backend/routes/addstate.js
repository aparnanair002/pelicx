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
let state_name = req.body.state_name;
let query=`INSERT INTO tbl_state (state_name) SELECT '${state_name}' WHERE NOT EXISTS ( SELECT 1 FROM tbl_state WHERE state_name = '${state_name}' );`;
con.query(query,(err,result)=>{
    if(err) throw err;
    res.send({message:"success"});
});



});
module.exports = router;

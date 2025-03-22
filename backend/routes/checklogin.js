var express = require('express');
var router = express.Router();
var con = require('../routes/db');
router.post('/',(req,res,next)=>{
    let username= req.body.name;
    let password= req.body.password;
    let strquery = `SELECT * FROM tbl_login where user_name='${username}' and password='${password}'`;
    console.log(strquery)
    con.query(strquery,(err,result)=>{
    if(err) {console.log(err);}
    // console.log(result);
    res.send(result)
    });
    });
    module.exports = router;
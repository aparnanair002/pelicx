var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost", 
user: "root", 
password: "", 
database: "pelicx_db" 
});

router.post('/', (req, res, next) => {
let name=req.body.name;
let logo=req.body.logo;
let description =req.body.description;
let email=req.body.email;
let password=req.body.password;
let phone=req.body.phone;
let regdate=req.body.regdate;
let loc_id=req.body.loc_id;
let zipcode=req.body.zipcode;
let address=req.body.address;
let user_code=req.body.user_code;
let status=req.body.status;


let query = `INSERT INTO tbl_users(col_name,col_pict,col_descr,col_email,col_pass,col_phone,col_regdate,loc_id,col_zip,user_code,col_address)
SELECT '${name}','${logo}','${description}','${email}','${password}','${phone}','${regdate}','${loc_id}','${zipcode}','${address}','${user_code}','${status}'
WHERE NOT EXISTS (
    SELECT 1 
    FROM tbl_users 
    WHERE col_name = '${name}' and col_email='${email}' and col_pass='${password}' and user_code='${user_code}'
);`;
console.log(query);
  con.query(query, (err, result) => {
    if (err) throw err;
    res.send({ message: "success" });
  });
});

module.exports=router;
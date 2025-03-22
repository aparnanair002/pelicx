var express = require("express");
var router = express.Router();
var con=require('../routes/db');
router.post("/", (req, res, next) => {
   let loginid=req.body.loginid;
   let userid=req.body.user_id;
   let query='';
   if(loginid){
    query = `SELECT user_id FROM tbl_users s inner join tbl_login l on s.login_id=l.login_id where s.login_id='${loginid}'`;
   }
   if(userid)
   {
    query = `SELECT * FROM tbl_users where user_id='${userid}'`;

   }
  console.log(query);
  con.query(query, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});
module.exports = router;

var express = require('express');
var router = express.Router();
var db=require('mysql');``

/* GET users listing. */
con=db.createConnection({
  host:'localhost',
  user:'root',
  password:'',
    database:'pelicx_db'
});

router.post('/', (req, res, next) => {
    let district_id=req.body.district_id;
    let loc_name=req.body.loc_name;
    let loc_id=req.body.loc_id;
    let query = `update tbl_location set district_id='${district_id}',loc_name='${loc_name}' where loc_id='${loc_id}'`;
 
    console.log(loc_id);
    console.log(query);
    
    con.query(query,  (err, result) => {
        if (err) throw err;
        res.send({message:'success'})
    });
});

module.exports = router;



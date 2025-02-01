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
    let state_id = req.body.state_id;
    let state_name = req.body.state_name;
    let query = `update tbl_state set state_id='${state_id}',state_name='${state_name}' where state_id='${state_id}'`;
 
    console.log(state_id);
    console.log(query);
    
    con.query(query,  (err, result) => {
        if (err) throw err;
        res.send({message:'success'})
    });
});

module.exports = router;



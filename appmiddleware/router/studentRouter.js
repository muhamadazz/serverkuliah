const express = require('express')
const router = express();
const validate = require('../middleware/validate')

router.get('/', (req,res)=> {
    res.send('Root page')
})

router.get('/:username', validate,(req,res)=>{
    let username = req.params.username;
    res.send(`welcome ${username}`)
})

module.exports = router;
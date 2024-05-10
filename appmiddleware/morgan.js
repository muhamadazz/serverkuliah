const express = require('express')
const app =  express();
const port = 4000;
const morgan = require('morgan')


app.use(morgan('combined'))
app.get('/', (req,res)=> {
    res.send("Root Page 2")
})

app.listen(port,()=> {
    `server run on http://localhost:${port}`
})
const express = require('express')
const app = express();
const port = 4000;
const sRouter = require('./router/studentRouter')

app.use('/student', sRouter)

app.listen(port, ()=> {
    `server at http://localhost:${port}`
})
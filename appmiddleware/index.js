const express = require('express')
const app = express();
const port = 4000;

const timelog = (req,res,next)=>{
    const date = Date.now();
    const d = new Date(date);
    let log = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
    console.log(log);
    next();
}
app.use(timelog)

app.get('/',timelog,(req,res)=> {
    res.status(200).send("Root Page")
})

app.get('/student', (req,res)=> {
    res.status(200).send("Student Page")
})

app.listen(port, ()=> {
    console.log(`run http://localhost:${port}`);
})
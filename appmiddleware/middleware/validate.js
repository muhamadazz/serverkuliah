const paramsValidate = (req,res,next)=>{
    const {username} = req.params;

    if(!username || username.length < 7){
        res.send("Use username endpoint or username length > 7")
    } else {
        next();
    }
}

module.exports = paramsValidate;
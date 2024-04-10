const jwt = require('jsonwebtoken');

function authenticateToken(req,res,next){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({"err" : 'Access denied token not found'});
    }
    jwt.verify(token,'my secret key', (err, decode)=>{
        if(err){
            return res.status(403).json({err:"Invalid token"});
        }
        req.userId = decode.userId;
        console.log(decode)
        next();
    });
}
module.exports = authenticateToken;
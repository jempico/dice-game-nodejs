const jwt  = require("jsonwebtoken");

class authJwtMiddleware {
    // Verify received Token
    async verifyToken(req, res, next){
        try {
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1] // First authHeader checks if there's actually an authHeader
            if (token == null)  return res.sendStatus(401) 
            
            const verifiedToken = await jwt.verify(token, process.env.SECRET_TOKEN_ACCESS)
             if (verifiedToken) {
                console.log(verifiedToken);
                next();
             } else {
                 res.sendStatus(403);
             }
        } catch(err) {
            res.status(400).json({ success: false, error: err })}
    }
}

module.exports = new authJwtMiddleware;
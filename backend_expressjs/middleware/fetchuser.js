const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_SECRET;


const fetchuser = (req, res, next) => {
    const token = req.header('auth-token')
    if(!token){
        res.status(401).send({error: "Please authenticate using a valid token"})
    }
    try {
        const data = jwt.verify(token, jwtSecret);
    req.user = data.user;
    next()
    } catch (error) {
        res.send(401).send({error: "Please authenticate using a valid token"})
    }
}


module.exports = fetchuser;
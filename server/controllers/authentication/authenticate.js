const User = require('mongoose').model('User');
const jwt = require('jsonwebtoken');
const SECRET = 'VERY_SECRET_KEY!';
const randtoken = require('rand-token');
const refreshTokens = {};
    
module.exports = {
    'login' : function(req, res){
        User.findOne({'email': req.body.email}, (err, user) => {
            if(err){
                res.sendStatus(401);
            } else {
                if(user.password != req.body.password){
                    res.sendStatus(401);
                } else {
                    const {email, password} = req.body;
                    const user = { 
                        'email': email, 
                        'role': 'admin'
                    };
                    const token = jwt.sign(user, SECRET, { expiresIn: 600 }) 
                    const refreshToken = randtoken.uid(256);
                    refreshTokens[refreshToken] = email;
                    res.json({jwt: token, refreshToken: refreshToken});
                }
            }
        })
    }
}
const User = require('mongoose').model('User');
const jwt = require('jsonwebtoken');
const SECRET = 'VERY_SECRET_KEY!';
const randtoken = require('rand-token');
const refreshTokens = {};

module.exports = {
    'login' : function(req, res){
        User.findOne({'email': req.body.email}, (err, user) => {
            if(err){
                // res.json({'err':err})
                res.sendStatus(401);
            } else {
                console.log("******")
                console.log(user.password)
                console.log(req.body.password)
                console.log("******")
                if(user.password != req.body.password){
                    res.sendStatus(401);
                    // res.json({'err':'failed to login'})
                } else {

                    const {email, password} = req.body;
                    const user = { 
                        'email': email, 
                        'role': 'admin'
                    };
                    const token = jwt.sign(user, SECRET, { expiresIn: 600 }) 
                    const refreshToken = randtoken.uid(256);
                    refreshTokens[refreshToken] = email;
                    console.log("*****", refreshTokens[refreshToken])
                    console.log("*****", token)
                    console.log("*****", user)
                    console.log("*****", req.body)
                    res.json({jwt: token, refreshToken: refreshToken});
                }
            }
        })
    }
}
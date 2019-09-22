const User = require('mongoose').model('User');

module.exports = {
    'getAllUsers': function(req, res){
        User.find({}, (err, users) => {
            if(err){
                res.json({'err' : err})
            }else {
                res.json({'users' : users})
            }
        })
    },
    'createNewUser' : function(req, res){
        console.log(req.body)
        let newUser = new User(req.body);
        newUser.save( (err, user) => {
            if(err){
                res.json({'err': err})
            } else {
                res.json({'user': user})
            }
        })
    }
}
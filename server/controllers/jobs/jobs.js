const Jobs = require('mongoose').model('Job');

module.exports = {
    'addToJobList' : function(req, res){
        console.log("creating a new job")
        Jobs.create(req.body, (err, job) => {
            if(err){
                console.log("Error", err)
                res.json({'message':err})
            } else {
                console.log("Error", err)
                res.json({'message':job})
            }
        })
    }
}
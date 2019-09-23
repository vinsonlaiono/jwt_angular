const Jobs = require('mongoose').model('Job');
const Users = require('mongoose').model('User');

module.exports = {
    'addToJobList' : function(req, res){
        console.log("In add to job list:")
        Users.findOne({email:req.params.email}, (err, user) => {
            if(err){
                console.log("Error")
                res.json({'message':err})
            } else {
                console.log("Success")
                let newJob = new Jobs(req.body)
                newJob.save()
                user.jobs.push(newJob);
                user.save()
                res.json({'message':'Successfully got user but need to enter jobs', 'user': user})
            }
        })
    },
    'removeJobFromList' : function(req, res) {
        Users.findOne({email:req.params.email}, (err, user) => {
            if(err){
                console.log("Error")
                res.json({'message':err})
            } else {
                console.log("Success")
                for( var i = 0; i < user.jobs.length; i++){ 
                    if ( user.jobs[i]._id == req.params.job_id) {
                        console.log(user.jobs[i])
                        user.jobs.splice(i, 1); 
                        console.log(user.jobs)
                    }
                 }
                user.save()
                res.json({'message':'Successfully removed a job', 'user': user})
            }
        })
    }
}
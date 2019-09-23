const process = require('../controllers/authentication/authenticate');
const apiTest = require('../controllers/api-test/api-test');
const jobs = require('../controllers/jobs/jobs');
const path = require('path');

module.exports = function(app){
    app.get('/api-test', (req, res) => {
        res.json({'status': 'Api Successfully running...'})
    });
    app.get('/api/authenticate/user', (req, res) => {
        res.json({'message': 'got user'});
    });
    app.post('/api/users/new', (req, res) => {
        apiTest.createNewUser(req, res);
    })
    app.get('/api/users', (req, res) =>{
        apiTest.getAllUsers(req, res);
    })
    app.get('/api/user/:email', (req, res) => {
        apiTest.getOneUser(req, res)
    })
    app.post('/api/users/jobs/:email', (req, res) => {
        jobs.addToJobList(req, res);
    })
    app.delete('/api/users/:email/jobs/:job_id', (req, res) => {
        jobs.removeJobFromList(req, res);
    })
    app.post('/login', (req, res) => {
        process.login(req, res);
    })
    app.post('/logout', (req, res) => {
        process.logout(req, res);
    })
    app.post('/refresh', (req, res) => {
        process.refresh(req, res);
    })
    // Using ng serve instead
    // app.all("*", (req, res, next) => {
    //     res.sendFile(path.resolve("./client/dist/client/index.html"))
    // });
}
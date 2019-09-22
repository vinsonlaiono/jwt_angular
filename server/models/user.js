const mongoose = require('mongoose')
uniqueValidator = require('mongoose-unique-validator'),


mongoose.connect('mongodb://localhost/jwt_angular', { useNewUrlParser: true });

var JobSchema = new mongoose.Schema({
    company: { type: String },
    company_logo: { type: String },
    company_url: { type: String },
    created_at: { type: String },
    description: { type: String },
    how_to_apply:{ type: String },
    id: { type: String },
    location: { type: String },
    title:{ type: String },
    type: { type: String },
    url: { type: String },
}, { timestamps : true});

var UserSchema = new mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: [true, "password is required"] },
    jobs : [JobSchema]
}, { timestamps: true });
UserSchema.plugin(uniqueValidator, { message: 'Email is already taken' });
mongoose.model('User', UserSchema);
mongoose.model('Job', JobSchema);
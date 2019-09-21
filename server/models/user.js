const mongoose = require('mongoose')
uniqueValidator = require('mongoose-unique-validator'),


mongoose.connect('mongodb://localhost/jwt_angular', { useNewUrlParser: true });
var UserSchema = new mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: [true, "password is required"] },
}, { timestamps: true });
UserSchema.plugin(uniqueValidator, { message: 'Email is already taken' });
mongoose.model('User', UserSchema);
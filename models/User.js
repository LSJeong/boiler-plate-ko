const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true, //공백을 없애줌
        unique: 1
    },
    password:{
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token:{  //유효성 관리
        type: String
    },
    tokenExp: {
        type: Number
    }
})

//모델로 스키마를 감싸줌
const User = mongoose.model('User', userSchema)

module.exports = {User}
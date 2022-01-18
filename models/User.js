const oracledb = require('oracledb');
const userSchema = oracledb.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true,
        
    }
})
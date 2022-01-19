const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const {User} = require('./models/User');

const config = require('./config/key');

//application/x-www-form-urlencoded 데이터를 분석해서 가져올수있음
app.use(bodyParser.urlencoded({extended: true}));

//application/json 으로 된것을 가져올수있다
app.use(bodyParser.json());

var mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


app.get('/', (req,res)=>res.send('Hello World!!!'));

app.post('/register', (req, res)=>{
    //회원 가입 할때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.
    
    //body-parser 때문에 req.body 쓸수 있음
    const user = new User(req.body)

    user.save((err, userInfo)=>{
        if(err) return res.json({success:false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log('Example app listening on port 5000!'))
const express = require('express');
const app = express();
const port = 5000;

var oracledb = require('oracledb');
var config = {
    user: "lsj",
    password: "1234",
    connectString: "localhost/xe"
}

oracledb.getConnection(config, (err, conn) =>{
    todoWork(err, conn);
});

function todoWork(err, connection) {
    if (err) {
        console.error(err.message);
        return;
    }
    connection.execute("select * from food", [], function (err, result) {
        if (err) {
            console.error(err.message);
            doRelease(connection);
            return;
        }
        console.log(result.metaData);  //테이블 스키마
        console.log(result.rows);  //데이터
        doRelease(connection);
    });
}    

function doRelease(connection) {
    connection.release(function (err) {
        if (err) {
            console.error(err.message);
        }
    });
}

app.get('/', (req,res)=>res.send('Hello World!'));
app.listen(port, () => console.log('Example app listening on port 5000!'))
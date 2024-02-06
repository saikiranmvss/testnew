let express = require('express');
let app = express();
let http = require('http');
let server = http.createServer(app);
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index');
})
server.listen(9595,()=>{
    console.log('serve running with port 9595');
});
var express = require('express');
var app = express();
var body = require('body-parser');
var ejs = require('ejs');
var multer = require('multer');
var upload = multer({dest:'picture/'});



app.use(body.urlencoded({extended:true}));
app.use(express.static(__dirname));
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.sendFile('index.html'); 
});

app.post('/', upload.array('image',12)  ,function(req,res){
    
    if(req.files[1].size < req.files[0].size){
        
        var biger = req.body.deepak;
        res.render('result2',{name:biger,photu:req.files[0].path});

    }
    else
    {
        var smaller = req.body.karan;
        res.render('result2',{name:smaller,photu:req.files[1].path});
    }
    
});

app.listen( process.env.PORT || 8080,function(){
    console.log("You enter The Same Port");
})
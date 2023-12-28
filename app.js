var express = require ('express');
var app = express();

app.get('/',function(req,res){
    res.send("function call");
});

app.get('/second/:name',function(req,res){

    var p = req.params.name

    res.send("second function call "+p);
});

app.get('/second1',function(req,res){

    var p = req.query.name

    res.send("second1 function call "+p);
});


app.listen(3000);
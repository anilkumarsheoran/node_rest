var express= require('express');

var mongoose=require('mongoose');

var db=mongoose.connect('mongodb://localhost/libraryApp');
var Book=require('./models/bookModel');
var app=express();
var port= process.env.PORT || 5000;

var bookRouter=express.Router();
bookRouter.route('/Books')
	.get(function(req,res){
		//res.send("bookrouter")
	    Book.find(function(err,books){
	    	if(err)
	    		console.log(err)
	    	else 
	    		res.json(books);
	    });
		//res.json(responseJson);
	});

app.use('/api',bookRouter);

app.get('/',function(req,res){

	res.send("Hello Check");
});

app.listen(port,function(){
	console.log("Running on port");
});
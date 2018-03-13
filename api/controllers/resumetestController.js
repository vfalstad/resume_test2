'use strict';
//var mongoose = require('mongoose'),
  //Question = mongoose.model('Questions');

exports.current_question = function(req, res) {
	if (req) { 
		if(req.url.indexOf('q=Ping')>0){
			res.send('OK');
		}
		if(req.url.indexOf('q=Referrer')>0){
			res.send('Recruited via LinkedIn');
		}
		if(req.url.indexOf('q=Position')>0){
			res.send('Lead/Senior Full Stack Developer');
		}
		if(req.url.indexOf('q=Status')>0){
			res.send('Yes');
		}
		if(req.url.indexOf('q=Years')>0){
			res.send('Javascript (and front end), 10 years');
		}
		if(req.url.indexOf('q=Puzzle')>0){
			var a = 'ABCD';
			var st = req.url.split(a)[1];
			st = st.replaceg('%3', '\r');
			st = st.replace('D--%3C-','D<<<=');
			st = st.replace('D-%3E-','D>>>=');	
			st = st.replace('D%3E--','D>>>=');	
			if(req.url.indexOf('d=Please+solve+this+puzzle%3A%0A+ABCD%0AA--%3C-%0AB---%3E%0AC--%3D-%0AD--%3E-%0A')>0){

				res.send(' ABCD\rA=<><\rB>=><\rC<<=<\rD>>>=');
			}
			else{
				res.send(' ABCD\r' + st);
			}
		
		}
		if(req.url.indexOf('q=Degree')>0){
			res.send('Bachelor of Science in Computer Science');
		}
		if(req.url.indexOf('q=Resume')>0){
			res.send('https://docs.google.com/document/d/1y_FzLesQIc6RJNbtn1RhbfbAS26GdQFElObrw2VUMi0/edit?usp=sharing');
		}
		if(req.url.indexOf('q=Email')>0){
			res.send('valeriefalstad@gmail.com');
		}
		if(req.url.indexOf('q=Source')>0){
			res.send('github');
		}
		if(req.url.indexOf('q=Name')>0){
			res.send('Valerie Falstad');
		}
		if(req.url.indexOf('q=Phone')>0){
			res.send('847-224-4791');
		}
		else{
        res.send({ 'error': 'An error has occurred on ' + req.url }); 
    	}
      } 
			
  //Question.find({}, function(err, task) {
   // if (err)
    //  res.send(err);
   // res.json(task);
  //});
};

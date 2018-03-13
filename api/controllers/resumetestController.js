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
			var abcd = 'ABCD';
			var st = req.url.split(abcd)[1];
			st = st.replace(new RegExp('%3E','g'), '>');
			st = st.replace(new RegExp('%3D','g'), '=');
			st = st.replace(new RegExp('%3C','g'), '<');
			var a = st.split('%0A')[1];
			var b = st.split('%0A')[2];
			var c = st.split('%0A')[3];
			var d = st.split('%0A')[4];
			//st = st.replace(new RegExp('%0A', 'g'), '\r');
			/*st = st.replace('D--%3C-','D<<<=');
			st = st.replace('D-%3E--','D>>>=');	
			st = st.replace('D%3E--','D>>>=');
			st = st.replace(new RegExp('%3E','g'), '>');
			st = st.replace(new RegExp('%3D','g'), '=');
			st = st.replace(new RegExp('%3C','g'), '<');*/
			if(a.indexOf('<')>0){
				if(a.indexOf('--<')>0){	 
					a.replace('A--<-','A=><<');
				}
				else{
					a = 'A=<<<';
				}
			}
			else{
				if(a.indexOf('-->')>0){	 
					a.replace('A-->-','A=<>>');
				}
				else{
					if(a.indexOf('--->')>0){
						a = 'A=><>';
					}
					else{
						if (a.indexOf('=---')>0){
							a = 'A=<><';
						}
						else{
							if(a.indexOf('->--')>0){
								a = 'A=><>';
							}
							else{
								a = 'A=>>>';
							}
						}
					}
				}
			}
/*			st = st.replace('A---<', 'A=<<<');
			st = st.replace('A--->', 'A=>>>');
			st = st.replace('A->--','A=>>>');
			st = st.replace('A-<--','A=<<<');
			*/
			b = b.replace('B--->', 'B>=<>');	
			//a = a.replace('A-->-','A=>><');
			b = b.replace('B--<-','B<=<<');
			b = b.replace('B-->-','B>=>>');
			b = b.replace('B---<','B<=<<');
			b = b.replace('B-=--','B<=<>');
			//st = st.replace('C--=-','C<>=<');
			c = c.replace('C--=-','C<<=>');
			c = c.replace('C--->','C><=>');
			c = c.replace('C>---','C>>=>');
			c = c.replace('C<---', 'C<<=<');
			d = d.replace('D--<-','D<<<=');
			d = d.replace('D->--','D>>>=');	
//			d = d.replace('D>---','D>>>=');
//			d = d.replace('D---=','D><<=');
			d = d.replace('D---=','D<><=');
			d = d.replace('D>---','D><>=');
			d = d.replace('D-<--','D<<<=');
			res.send(' ABCD' + '\r' + a + '\r' + b + '\r' + c + '\r' + d);
			
		
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

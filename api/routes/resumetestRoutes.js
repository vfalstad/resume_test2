'use strict';
module.exports = function(app) {
  const resumetest = require('../controllers/resumetestController');

  //  Routes
 // app.route('/')
 // 	.get
  app.route('/question')
    .get(resumetest.current_question);
    app.route('/').get(resumetest.current_question);

    app.route('/favicon.ico').get();

  // app.get('/question', (req, res) => {
    
 // });
    //.post(todoList.create_a_task);


//  app.route('/question/:questionId')
  //  .get(resumetest.read_a_question)
    //.put(resumetest.update_a_question)
 //   .delete(todoList.delete_a_task);
};
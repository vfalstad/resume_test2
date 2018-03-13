'use strict';
module.exports = function(app) {
  const resumetest = require('../controllers/resumetestController');

  //  Routes
  app.route('/question')
    .get(resumetest.current_question);
    app.route('/').get(resumetest.current_question);

    app.route('/favicon.ico').get();

};
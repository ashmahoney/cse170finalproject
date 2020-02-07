
/*
 * GET course page.
 */

var group = require('../Groups.json');

exports.view = function(req, res){
  console.log(group);
  res.render('course', group);
};
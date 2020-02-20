var classmates = require('../Groups.json');

exports.view = function(req, res){
	res.render('addTeammate', classmates);
}
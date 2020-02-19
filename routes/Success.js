

var course = require('../courses.json');


exports.viewSuccess = function(req, res) {
	var courseName = req.query.courseTitle.toUpperCase();
	var professor = req.query.professor;
    var id = req.query.courseTitle.toLowerCase();
    
    courseName = courseName.replace(/\s+/g, '');
    id = id.replace(/\s+/g, '');

	var newCourse = {
		"title": courseName,
		"prof": professor,
		"id": id,
		"groups": [ 
		]
	};

	course.courses.push(newCourse);
	console.log(course.courses);

	res.render("Success");
}
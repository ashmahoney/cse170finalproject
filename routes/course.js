
/*
 * GET course page.
 */

var group = require('../courses.json');

exports.view = function(req, res){
  var nameToShow = req.params.courseName;
  console.log(nameToShow);

  // How to access the title of the JSON array
  console.log(group.courses[0].title);
  console.log(group.courses[0].title);

  console.log(group["courses"].length);
  
  // Looping through JSON and checking if title matches URL
  let pageData;
  for (var i = 0; i < group["courses"].length; i++) {
    var nameCheck = group.courses[i].title;

    // Checking if the URL matches the JSON object title
    if (nameCheck == nameToShow) {
      console.log("URL Matches Title!");

      pageData = group.courses[i];
      res.render('course', pageData);
    }

  }

  //res.render('course', group);
};
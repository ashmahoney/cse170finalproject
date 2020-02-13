
/*
 * GET course page.
 */

//var group = require('../courses.json');

var group =  [ 
{
  "courses": [
      {
          "title": "COGS120",
          "prof": "Scott Klemmer",
          "id": "cogs120",
          "groups": [ 
              {"name": "Group A",
              "imageURL": "https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_1280.jpg"},
              {"name": "Group B",
              "imageURL": "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557399_1280.jpg"},
              {"name": "Group C",
              "imageURL": "https://cdn.pixabay.com/photo/2016/02/18/18/57/home-office-1207834_1280.jpg"}
          ]
      },
      {
          "title": "COGS107B",
          "prof": "Laura Rangel",
          "id": "cogs107b",
          "groups": [ 
              {"name": "Group D",
              "imageURL": "https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_1280.jpg"}
          ]
      },
      {
          "title": "MMW12",
          "prof": "Edmund Chang",
          "id": "mmw12",
          "groups": [ 
              {"name": "Group E",
              "imageURL": "https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_1280.jpg"},
              {"name": "Group F",
              "imageURL": "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557399_1280.jpg"}
          ]
      },
      {
          "title": "CSE101",
          "prof": "Miles Jones",
          "id": "cse101",
          "groups": [ 
              {"name": "Group G",
              "imageURL": "https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_1280.jpg"},
              {"name": "Group H",
              "imageURL": "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557399_1280.jpg"}
          ]
      }
  ]
}
];

exports.view = function(req, res){
  var nameToShow = req.params.courseName;
  console.log(nameToShow);

  // How to access the title of the JSON array
  console.log(group[0].courses[0].title);

  console.log(group[0]["courses"].length);
  
  // Looping through JSON and checking if title matches URL
  let pageData;
  for (var i = 0; i < group[0]["courses"].length; i++) {
    var nameCheck = group[0].courses[i].title;

    // Checking if the URL matches the JSON object title
    if (nameCheck == nameToShow) {
      console.log("URL Matches Title!");

      pageData = group[0].courses[i];
      res.render('course', pageData);
    }

  }

  //res.render('course', group);
};
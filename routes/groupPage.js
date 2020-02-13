var group = [
  {
    "groups": [
      {
        "title": "GroupA",
        "img": "https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/iphone-6-wireframe.svg",
        "comment": ""
      },
      {
        "title": "GroupB",
        "img": "",
        "comment": ""
      },
      {
        "title": "GroupC",
        "img": "",
        "comment": ""
      },
      {
        "title": "GroupD",
        "img": "",
        "comment": ""
      },
      {
        "title": "GroupE",
        "img": "",
        "comment": ""
      },
      {
        "title": "GroupF",
        "img": "",
        "comment": ""
      },
      {
        "title": "GroupG",
        "img": "",
        "comment": ""
      },
      {
        "title": "GroupH",
        "img": "",
        "comment": ""
      }
    ]

  }

];


exports.view = function(req, res){

  var nameToShow = req.params.groupName;

  // Display length of JSON array
  console.log(group[0]["groups"].length);

  let pageData;
  for (var i = 0; i < group[0]["groups"].length; i++) {
    var nameCheck = group[0].groups[i].title;

    // Checking if the URL matches the JSON object title
    if (nameCheck == nameToShow) {
      console.log("URL Matches Title!");

      // Render the JSON object if title matches URL
      pageData = group[0].groups[i];
      res.render('groupPage', pageData);
    }

  }
  //res.render('groupPage');
};
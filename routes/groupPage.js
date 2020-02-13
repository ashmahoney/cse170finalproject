var group = [
  {
    "groups": [
      {
        "title": "GroupA",
        "img": "",
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

  let pageData;
  for (var i = 0; i < group.length; i++) {
    var nameCheck = group[i].title;

    // Checking if the URL matches the JSON object title
    if (nameCheck == nameToShow) {
      console.log("URL Matches Title!");

      pageData = group[i];
      res.render('groupPage', pageData);
    }

  }
  //res.render('groupPage');
};
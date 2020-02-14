var group = [
  {
    "groups": [
      {
        "title": "GroupA",
        "img": "https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/iphone-6-wireframe.svg",
        "comments": [
          {}]
      },
      {
        "title": "GroupB",
        "img": "",
        "comments": [
          {}]
      },
      {
        "title": "GroupC",
        "img": "",
        "comments": [
          {}]
      },
      {
        "title": "GroupD",
        "img": "",
        "comments": [
          {}]
      },
      {
        "title": "GroupE",
        "img": "",
        "comments": [
          {}]
      },
      {
        "title": "GroupF",
        "img": "",
        "comments": [
          {}]
      },
      {
        "title": "GroupG",
        "img": "",
        "comments": [
          {}]
      },
      {
        "title": "GroupH",
        "img": "",
        "comments": [
          {}]
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
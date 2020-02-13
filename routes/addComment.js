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

exports.addComment = function(request, response) {    
	// Your code goes here
	// Capture the inputed data
    var comment = request.query.comment;
    var groupTitle = request.query.grouptitle;
    var groupImg = request.query.groupimg;

	var newComment = {
		"title": groupTitle,
		"img": groupImg,
		"comment": comment
	}

	console.log(newComment);

	group[0]["groups"].push(newComment);

	response.render('groupPage', newComment);

 }
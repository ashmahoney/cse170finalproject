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

exports.addComment = function(req, res) {    
	// Your code goes here
	// Capture the inputed data
    var comment = req.query.comment;
    var groupTitle = req.query.grouptitle;
    var groupImg = req.query.groupimg;

	/*var newComment = {
		"title": groupTitle,
		"img": groupImg,
		"comment": comment
    }*/
    
    for (var i = 0; i < group[0]["groups"].length; i++) {
        var nameCheck = group[0].groups[i].title;

        if (nameCheck == groupTitle) {
            var counter = group[0].groups[i].comments.length;
            var counter = counter + 1;

            console.log(counter);

            group[0].groups[i].comments[counter] = comment;

            console.log(group[0].groups[i].comments[counter]);

            res.render('groupPage', group[0].groups[i]);


        }




    }

	//console.log(newComment);

	//group[0]["groups"].push(newComment);

	//response.render('groupPage', newComment);

 }
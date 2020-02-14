/*var group = [
    {
      "groups": [
        {
          "title": "GroupA",
          "img": "https://66.media.tumblr.com/395c6fb0d6b47890a20c7b6e6e8c914e/tumblr_p5gjesVOjv1w9oylko1_1280.png",
          "comments": [
            {}]
        },
        {
          "title": "GroupB",
          "img": "https://media.nngroup.com/media/editor/2018/06/20/basic-storyboard.png",
          "comments": [
            {}]
        },
        {
          "title": "GroupC",
          "img": "https://miro.medium.com/max/2060/0*K5476VixXhddhBkA.jpg",
          "comments": [
            {}]
        },
        {
          "title": "GroupD",
          "img": "https://emotiv-website-uploads-live.s3.amazonaws.com/uploads/2019/07/cognitive-neuroscience-brain-diagram.jpg",
          "comments": [
            {}]
        },
        {
          "title": "GroupE",
          "img": "https://images.examples.com/wp-content/uploads/2018/06/An-Approach-to-African-through-Architecture.jpg",
          "comments": [
            {}]
        },
        {
          "title": "GroupF",
          "img": "https://www.geocurrents.info/wp-content/uploads/2015/12/Africa-Customizable-Map-2.png",
          "comments": [
            {}]
        },
        {
          "title": "GroupG",
          "img": "https://4.bp.blogspot.com/-riGf3-PMXvQ/T9bmF5ZIF0I/AAAAAAAAAEA/xJor1nt5Ygo/s1600/bcalc.png",
          "comments": [
            {}]
        },
        {
          "title": "GroupH",
          "img": "https://www.java-made-easy.com/images/player-turn-21-game.jpg",
          "comments": [
            {}]
        }
      ]
  
    }
  
  ];*/

  var addData = require('../Groups.json');

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
    
    for (var i = 0; i < addData["groups"].length; i++) {
        var nameCheck = addData.groups[i].title;

        if (nameCheck == groupTitle) {
            var counter = addData.groups[i].comments.length;
            var counter = counter + 1;

            console.log(counter);

            addData.groups[i].comments[counter] = comment;

            console.log(addData.groups[i].comments[counter]);

            res.render('groupPage', addData.groups[i]);


        }




    }

	//console.log(newComment);

	//group[0]["groups"].push(newComment);

	//response.render('groupPage', newComment);

 }
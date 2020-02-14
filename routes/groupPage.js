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

var jsonGroup = require('../Groups.json');

exports.view = function(req, res){

  var nameToShow = req.params.groupName;

  // Display length of JSON array
  console.log(jsonGroup["groups"].length);

  let pageData;
  for (var i = 0; i < jsonGroup["groups"].length; i++) {
    var nameCheck = jsonGroup.groups[i].title;

    // Checking if the URL matches the JSON object title
    if (nameCheck == nameToShow) {
      console.log("URL Matches Title!");

      // Render the JSON object if title matches URL
      pageData = jsonGroup.groups[i];
      res.render('groupPage', pageData);
    }

  }
  //res.render('groupPage');
};

/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
  	"courses": [
  		{
  			"title": "COGS120",
  			"prof": "Scott Klemmer",
  			"id": "cogs120",
  			"groups": [ 
  				{"gName": "Group A"},
  				{"gName": "Group B"},
  				{"gName": "Group C"}
  			]
  		},
  		{
  			"title": "COGS107B",
  			"prof": "Laura Rangel",
  			"id": "cogs107b",
  			"groups": [ 
  				{"gName": "Group D"}
  			]
  		},
  		{
  			"title": "MMW12",
  			"prof": "Edmund Chang",
  			"id": "mmw12",
  			"groups": [ 
  				{"gName": "Group E"},
  				{"gName": "Group F"}
  			]
  		},
  		{
  			"title": "CSE101",
  			"prof": "Miles Jones",
  			"id": "cse101",
  			"groups": [ 
  				{"gName": "Group G"},
  				{"gName": "Group H"}
  			]
  		}
  	]
  });
};


/*
$(document).ready(function () {
	$("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        // hide sidebar
        $('#sidebar').removeClass('active');
        // hide overlay
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        // open sidebar
        $('#sidebar').addClass('active');
        // fade in the overlay
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});*/
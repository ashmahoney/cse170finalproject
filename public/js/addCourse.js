'use strict';


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".addCourse").click(appendCourse);
}

function appendCourse(e) {

    var tester = window.location.search;
    console.log("this is a test");
    




}

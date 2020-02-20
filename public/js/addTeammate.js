'use strict';

function returnToGroup(){
	const url = window.location.href;
	var groupValue = url.searchParams.get('groupPage');

	$('#doneAdding').click(function(){
		console.log("Done was clicked");
		window.location.href = '/groupPage='+groupValue;
	});

}

function addClassmate(studentName){
	var json = require('../Groups.json');
	var groupList = json.groups;
	var classList = json.classmates;
	var index;

	//Loop that finds the index of the classmate object to be added to the group
	for (int i=0; i<classList.length; i++){
		if ((classList[i].name).equals(studentName)){
			index=i;
		}
	}

}
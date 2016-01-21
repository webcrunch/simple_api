document.addEventListener("DOMContentLoaded", function(event){

function getID(id)
{
	return document.getElementById(id);
}


//ladda om sidan funcktion
function myFunction() {
	location.reload();
}



var text = getID('title');

var button = getID('click');
button.addEventListener('click', function(){
	alert(text.value);
})
});
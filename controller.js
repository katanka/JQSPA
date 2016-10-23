$(document).ready(function() {

$(".link").click(function (event) {
	var target = event.target.attributes["href"].nodeValue;
	// if it's not a valid route, follow the link

	if (!(target in routes)) {
		log("Not a route, following link");
		return;
	}

	event.preventDefault();

	var htmlfile = routes[target].html;

	$.get(htmlfile, function(data) {
		$("#content").html(data);
	});
});


});
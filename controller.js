$(document).ready(function() {

	var current_route;
	var current_added_elements = [];

	load_route("about");

$(".link").click(function (event) {
	var target = event.target.attributes["href"].nodeValue;
	// if it's not a valid route, follow the link

	if (!(target in routes)) {
		log("Not a route, following link");
		return;
	}

	event.preventDefault();
	load_route(target);
});

function load_route (route) {

	for (var i = 0; i < current_added_elements.length; i++) {
		$(current_added_elements[i]).remove();
	}

	current_added_elements = [];

	if ("css" in routes[route]) {
		var css_link = document.createElement("link")
        css_link.setAttribute("rel", "stylesheet")
        css_link.setAttribute("type", "text/css")
        css_link.setAttribute("href", routes[route].css);
        current_added_elements.push(css_link);

		$("#maincss").after(css_link);
	}

	var htmlfile = routes[route].html;

	$.get(htmlfile, function(data) {
		$("#content").html(data);
	});

	current_route = route;
}

});
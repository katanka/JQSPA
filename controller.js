$("#header > a").click(function (event) {
	var target = event.target.attributes[0].nodeValue;
	// if it's not a valid route, follow the link
	if (!(target in routes)) {
		log("Not a route, following link");
		debugger;
		return;
	}
	event.preventDefault();

	var htmlfile = routes[target].html;

	$.get(htmlfile, function(data) {
		$("#content").html(data);
	});
});

var debug = true;

function log(str) {
	if (debug == true) {
		console.log(str);
	}
}
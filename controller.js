$("#header > a").click(function (event) {
	var target = event.target.attributes[0].nodeValue;
	// if it's not a valid route, follow the link
	if (!(target in routes)) {
		return;
	}
	event.preventDefault();

	var htmlfile = routes[target].html[0];

	$.get(htmlfile, function(data) {
		$("#content").html(htmlfile);
	});
});
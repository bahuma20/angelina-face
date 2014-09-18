jQuery(document).ready(function($) {
	var changeAction = function(action) {
		$('#face').removeClass().addClass('action').addClass(action);

		window.setTimeout(function() {
			$('#face').removeClass('action');
		}, 1000);
	}

	$("button#none").click(function(event) {
		changeAction('none');
	});

	$("button#working").click(function(event) {
		changeAction('working');
	});

	$("button#question").click(function(event) {
		changeAction('question');
	});
});
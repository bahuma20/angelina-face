jQuery(document).ready(function($) {
	var changeAction = function(action) {
		$('#face').removeClass().addClass('action').addClass(action);

		window.setTimeout(function() {
			$('#face').removeClass('action');
		}, 1000);
	}

	$("button").click(function(event) {
		changeAction($(this).attr('id'));
	});
});
jQuery(document).ready(function($) {
	var changeAction = function(action) {
		$('#face').removeClass().addClass('action').addClass(action);

		switch (action) {
			case 'question': 
				document.querySelector('#mouth').setAttribute("text", "Wie lautet dein Passwort?");
				window.setTimeout(function() {
					document.querySelector('#mouth').speak();
				}, 100);
				break;

			case 'error': 
				document.querySelector('#mouth').setAttribute("text", "Das Passwort ist falsch!");
				window.setTimeout(function() {
					document.querySelector('#mouth').speak();
				}, 100);
				break;

			case 'ok': 
				document.querySelector('#mouth').setAttribute("text", "Das Passwort ist richtig!");
				window.setTimeout(function() {
					document.querySelector('#mouth').speak();
				}, 100);
				break;
		}

		window.setTimeout(function() {
			$('#face').removeClass('action');
		}, 1000);
	}

	$("button").click(function(event) {
		changeAction($(this).attr('id'));
	});
});
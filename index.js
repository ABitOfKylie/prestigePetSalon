$('body').scrollspy({ target: '#navbarTogglerRef' });

$(document).ready(function(){
	$('[data-toggle="popover"]').popover({
		placement:"top",
		trigger:"hover"
	});
});
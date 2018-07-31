$('body').scrollspy({ target: '#navbarTogglerRef' });

$(document).ready(function(){
	$('[data-toggle="popover"]').popover({
		placement:"top",
		trigger:"hover"
	});
});

//manual carousel controls
// (function($){
// 	"use strict";

	$(".next").click(function(){
		$(".carousel").carousel('next');
		return false;
	});
	$(".prev").click(function(){
		$(".carousel").carousel('prev');
		return false;
	});
// })(jQuery);

// pricing section - card flip
document.querySelector('#cardId').classList.toggle('flip');


//appointment confirm remove button
//initialize all tooltips-select by their data-toggle attribute

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('#deleteModal').modal(options);
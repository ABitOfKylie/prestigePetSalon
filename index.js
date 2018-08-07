$('body').scrollspy({ target: '#navbarTogglerRef' });

$(document).ready(function(){
	$('[data-toggle="popover"]').popover({
		placement:"top",
		trigger:"hover"
	});
});

//card flip listener
var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

var addons = document.querySelector("#addOns");
	addons.addEventListener('click', function() {
		flipcard.classList.toggle("is-flipped");
	});

document.querySelector('#cardId1').classList.toggle('flip');
// or using jQuery
// $("#cardId").toggleClass("flip");

//manual carousel controls
// (function($){
// 	"use strict";
	// $(".next").click(function(){
	// 	$(".carousel").carousel('next');
	// 	return false;
	// });
	// $(".prev").click(function(){
	// 	$(".carousel").carousel('prev');
	// 	return false;
	// });
// })(jQuery);

// pricing section - card flip
// document.querySelector('#cardId').classList.toggle('flip');


//appointment confirm remove button
//initialize all tooltips-select by their data-toggle attribute
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// $('#deleteModal').modal(options);
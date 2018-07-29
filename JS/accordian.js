$(document).ready(function() {
	$('.accordion-content-1').show();
});


$(".accordion").on("click", ".accordion-header", function() {
 	$(this).toggleClass("active").next().slideToggle();
});

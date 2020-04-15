$(document).ready(function () { //allow for toggling between icon and description
	$(".h-last").click(function () {
		$(".design-sec img").toggle();
		$(".show py-1").toggle();
	});
	$(".development").click(function () {
		$(".development-icon").toggle();
		$(".development-description").toggle();
	});
	$(".product").click(function () {
		$(".product-icon").toggle();
		$(".product-description").toggle();
	});
});

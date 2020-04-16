$(document).ready(function () { 
	$(".design").click(function () {
		$(".design-image").toggle();
		$(".design-content").toggle();
	});
	$(".development").click(function () {
		$(".dev-image").toggle();
		$(".dev-content").toggle();
	});
	$(".product").click(function () {
		$(".product-image").toggle();
		$(".pro-content").toggle();
	});
});






// portfolio js hover


$(document).ready(function() {
    $(".title").hide();
    $(".view").hover(function() {
        $(this).find(".title").toggle(600);
    });

});
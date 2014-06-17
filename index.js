$(window).load(function() {
	$('#loading').hide();

	$('#name').fadeTo(1000, 1);
	
	setTimeout(function() {$('#splash img').fadeTo(1000, 1);}, 2000);
	
	setTimeout(function() {$('#tip').fadeTo(500, 1);}, 5000);
});
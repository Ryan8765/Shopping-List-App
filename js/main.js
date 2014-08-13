
$(document).ready(function() {
	//add/remove exit image to list
	$('#shoppingList li').mouseenter(function() {
		var xout = $('<img class="xout" src="images/xout2.gif">');
		$(this).append(xout);
	});

	$('#shoppingList li').mouseleave(function() {
		$('#shoppingList li img').remove();
	});

	//delete li node when exit img is clicked
	$('#shoppingList li img').on('click', function() {
		alert('this is working');
		$(this).closest('li').remove();
	});


});
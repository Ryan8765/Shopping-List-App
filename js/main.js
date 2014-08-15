
$(document).ready(function() {
	//add/remove exit image to list
	$('#shoppingList').on('mouseenter','li',function() {
		var xout = $('<img class="xout" src="images/xout2.gif">');
		$(this).append(xout);
	});

	$('#shoppingList').on('mouseleave','li',function() {
		$('#shoppingList li img').remove();
	});

	//delete li node when exit img is clicked
	$("#shoppingList").on("click", "img", function() {
        $(this).parent().remove();
	}﻿);

	//show instructions when clicked
	//hide instructions when exit clicked
	$('#help').on('click','button', function() {
		$('#helpInstructions').fadeToggle();
	});

	$('#helpInstructions').on('click','img',function() { 
			$('#helpInstructions').fadeOut();
	});

	//Greys out bought items
	$('#shoppingList').on('click','li',function() {

		if($(this).attr('class')=="boughtItem") {
			$(this).removeClass('boughtItem');
		} else {
			$(this).addClass('boughtItem');
		}


		//sends clicked list items to bottom/top
		if ($(this).attr('class')=="boughtItem") {
			var listItemText=$(this).closest('li').text();
			$(this).closest('ul').append("<li class='boughtItem'>" + listItemText + "</li>");
			$(this).remove();	
		} else {
			var listItemText=$(this).closest('li').text();
			$(this).closest('ul').prepend("<li>" + listItemText + "</li>");
			$(this).remove();
		}	
	}); 

	//adds entered items to list using click
	$('#entry').on('click', 'button', function() {
		var itemAdd = $('#addItem').val();
		if (itemAdd == "" || itemAdd.trim().length == 0) {
			alert("Please enter an item");
		} else {
			$('#shoppingList ul').prepend('<li>' + itemAdd + '</li>');
			$('#addItem').val('');
		}
	});

	//adds entered items to list using enter
	$('#entry').on('keyup','input', function(event) {
		var itemAdd = $('#addItem').val();
		if(event.keyCode == "13") {
			if (itemAdd == "" || itemAdd.trim().length == 0) {
			alert("Please enter an item");
			} else {
				$('#shoppingList ul').prepend('<li>' + itemAdd + '</li>');
				$('#addItem').val('');
			}
		}
	});

});
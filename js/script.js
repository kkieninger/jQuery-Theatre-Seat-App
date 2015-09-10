$(document).ready(function(){
	var theatre = {
		numberOfSeats: 24
	}
	function createSeats(){
		for (var i = 1; i < theatre.numberOfSeats+1; i++){
			var seatId = "seat" + i;
			var $newSeat = $('<div class="available" id="' + seatId + '">'+ i +'</div>');
			$('#seat-wrapper').append($newSeat);
			$('#seat-wrapper').on('click', displayForm);
		}
	};
	createSeats();
	function displayForm(){
		$('#form').slideDown('fast');
		$('#formButton').on('click', submitForm);
	}
	function submitForm(){
		$('#form').slideUp('fast');
	}
});
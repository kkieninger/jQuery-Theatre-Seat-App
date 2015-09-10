$(document).ready(function(){
	var theatre = {
		numberOfSeats: 24
	}
	function createSeats(){
		for (var i = 1; i < theatre.numberOfSeats+1; i++){
			var seatId = "seat_" + i;
			var $newSeat = $('<div class="available" id="' + seatId + '">'+ i +'</div>');
			$('#seat-wrapper').append($newSeat);
			$('#seat-wrapper').on('click', displayForm);
		}
	};
	createSeats();
	function displayForm(seatId){
		$('#form').slideDown('fast');
		$('#chosenSeat').html('You have chosen to reserve seat ' + this.seatId + '.');
		$('#formButton').on('click', submitForm);
	}
	function submitForm(){
		$('#form').slideUp('fast');
	}

});
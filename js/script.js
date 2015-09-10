

var seatWrapper = document.getElementById('seat-wrapper');
var form = document.getElementById('form');
var theatre = {
	name: 'Petite Cirque Theatre',
	numberOfSeats: 24
}





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
	// 		$("#seat_" + i).on("click", function(){
	// 		$( this ).fadeOut( "slow");
	// });

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

});



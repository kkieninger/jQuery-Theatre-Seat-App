$(document).ready(function(){
	var theatre = {
		numberOfSeats: 24
	}
	function createSeats(){
		for (var i = 1; i < theatre.numberOfSeats+1; i++){
			var id = "seat_" + i;
			var $newSeat = $('<div class="available" id="' + id + '">'+ i +'</div>');
			$('#seat-wrapper').append($newSeat);
			$('#'+id+'').on('click', displayForm);
		}
	};
	createSeats();
	function displayForm(id){
		$('#form').slideDown('fast');
		$('#current_seat').val(this.id);
		$('#chosenSeat').html('You have selected seat ' + this.id.substr(5,6) + '.');
		$('#formButton').on('click', submitForm);
	}
	function submitForm(){
		$('#form').slideUp('fast');
		var thisSeat = $('#current_seat').val();
		var updateSeat = $('#'+thisSeat+'');
		updateSeat.html('Reserved');
		updateSeat.css("background-color","#FF4800");
		updateSeat.off();
	}
});

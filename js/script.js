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
	function Reservation(name,email,seat){
		this.name = name;
		this.email = email;
		this.seat = seat;
		console.log(name, email, seat);
	}
	function submitForm(){
		$('#form').slideUp('fast');
		var thisSeat = $('#current_seat').val();
		var thisName = $('#form_name').val();
		var thisEmail = $('#form_email').val();
		var updateSeat = $('#'+thisSeat+'');
		var reservationName = thisSeat;
		updateSeat.html('Reserved by ' + thisName);
		updateSeat.addClass('unavailable');
		updateSeat.removeClass('available');
		updateSeat.off();
		$('#form_name').val(' ');
		$('form_email').val(' ');
		var reservationName = new Reservation(thisName, thisEmail, thisSeat);
	}
});

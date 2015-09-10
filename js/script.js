

var seatWrapper = document.getElementById('seat-wrapper');
var form = document.getElementById('form');
var theatre = {
	name: 'Petite Cirque Theatre',
	numberOfSeats: 24
}

function createSeats(){
	for (var i = 1; i < theatre.numberOfSeats+1; i++){
		var element = document.createElement('div');
		element.id = "seat_"+i;
		element.className= 'available';
		element.innerHTML = i;
		seatWrapper.appendChild(element);
	}
};
createSeats();
$(function(){
	$("#seat_").on("click", function(){
		$( this ).fadeOut( "slow");
	});
	});

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
<<<<<<< HEAD




});
=======
});

>>>>>>> 65bd0007b9c1c21a8f07c9ef45cba39f4c285cbe

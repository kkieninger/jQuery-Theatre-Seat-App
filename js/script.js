
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
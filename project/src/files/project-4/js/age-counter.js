var countDownDate = new Date("Jul 7, 1992 04:44:00").getTime();

var x = setInterval(function () {

	var now = new Date().getTime();
	var distance = now - countDownDate;
	var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
	var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("age").innerHTML = years + " y " + days + " d " + hours + " h "
		+ minutes + " m " + seconds + " s ";
}, 1000);
let countDownDate = new Date("Jul 7, 1992 04:44:00").getTime();

let x = setInterval(function () {

	let now = new Date().getTime();
	let distance = now - countDownDate;
	let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365))
	let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("age").innerHTML = years + " y " + days + " d " + hours + " h "
		+ minutes + " m " + seconds + " s ";
}, 1000);
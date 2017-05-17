var azam = document.querySelector('.azam');
var marupuru = document.querySelector('.marupuru');
var hong = document.querySelector('.hong');
var kohgale = document.querySelector('.kohgale');
var warne = document.querySelector('.warne');

var azambio = document.querySelector('.azambio');
var marupurubio = document.querySelector('.marupurubio');
var hongbio = document.querySelector('.hongbio');
var kohgalebio = document.querySelector('.kohgalebio');
var warnebio = document.querySelector('.warnebio');


azam.onmouseover = function() {
  azambio.style.display = "block";
  marupurubio.style.display = "none";
  hongbio.style.display = "none";
  kohgalebio.style.display = "none";
  warnebio.style.display = "none";
}

marupuru.onmouseover = function() {
  marupurubio.style.display = "block";
  azambio.style.display = "none";
  hongbio.style.display = "none";
  kohgalebio.style.display = "none";
  warnebio.style.display = "none";
}

hong.onmouseover = function() {
  hongbio.style.display = "block";
  azambio.style.display = "none";
  marupurubio.style.display = "none";
  kohgalebio.style.display = "none";
  warnebio.style.display = "none";
}

kohgale.onmouseover = function() {
  kohgalebio.style.display = "block";
  azambio.style.display = "none";
  marupurubio.style.display = "none";
  hongbio.style.display = "none";
  warnebio.style.display = "none";
}

warne.onmouseover = function() {
  warnebio.style.display = "block";
  azambio.style.display = "none";
  marupurubio.style.display = "none";
  kohgalebio.style.display = "none";
  hongbio.style.display = "none";
}


$(document).ready(function() {
	$('#myCarousel').carousel({
	interval: 10000
	})

    $('#myCarousel').on('slid.bs.carousel', function() {
    	//alert("slid");
	});


});

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


if (window.location.href.includes('azam')) {
  console.log(window.location.href);
  azambio.style.display = "block";
  marupurubio.style.display = "none";
  hongbio.style.display = "none";
  kohgalebio.style.display = "none";
  warnebio.style.display = "none";
  azam.classList.add('selected');
}

if (window.location.href.includes('marupuru')) {
  console.log(window.location.href);
  marupurubio.style.display = "block";
  azambio.style.display = "none";
  hongbio.style.display = "none";
  kohgalebio.style.display = "none";
  warnebio.style.display = "none";
  marupuru.classList.add('selected');
}

if (window.location.href.includes('hong')) {
  console.log(window.location.href);
  hongbio.style.display = "block";
  azambio.style.display = "none";
  marupurubio.style.display = "none";
  kohgalebio.style.display = "none";
  warnebio.style.display = "none";
  hong.classList.add('selected');
}

if (window.location.href.includes('kohgale')) {
  console.log(window.location.href);
  kohgalebio.style.display = "block";
  azambio.style.display = "none";
  marupurubio.style.display = "none";
  hongbio.style.display = "none";
  warnebio.style.display = "none";
  kohgale.classList.add('selected');
}

if (window.location.href.includes('warne')) {
  console.log(window.location.href);
  warnebio.style.display = "block";
  azambio.style.display = "none";
  marupurubio.style.display = "none";
  kohgalebio.style.display = "none";
  hongbio.style.display = "none";
  warne.classList.add('selected');
}

azam.onmouseover = function() {
  azambio.style.display = "block";
  marupurubio.style.display = "none";
  hongbio.style.display = "none";
  kohgalebio.style.display = "none";
  warnebio.style.display = "none";
  azam.classList.add('selected');
  marupuru.classList.remove('selected');
  hong.classList.remove('selected');
  kohgale.classList.remove('selected');
  warne.classList.remove('selected');
}

marupuru.onmouseover = function() {
  marupurubio.style.display = "block";
  azambio.style.display = "none";
  hongbio.style.display = "none";
  kohgalebio.style.display = "none";
  warnebio.style.display = "none";
  marupuru.classList.add('selected');
  azam.classList.remove('selected');
  hong.classList.remove('selected');
  kohgale.classList.remove('selected');
  warne.classList.remove('selected');
}

hong.onmouseover = function() {
  hongbio.style.display = "block";
  azambio.style.display = "none";
  marupurubio.style.display = "none";
  kohgalebio.style.display = "none";
  warnebio.style.display = "none";
  hong.classList.add('selected');
  marupuru.classList.remove('selected');
  azam.classList.remove('selected');
  kohgale.classList.remove('selected');
  warne.classList.remove('selected');
}

kohgale.onmouseover = function() {
  kohgalebio.style.display = "block";
  azambio.style.display = "none";
  marupurubio.style.display = "none";
  hongbio.style.display = "none";
  warnebio.style.display = "none";
  kohgale.classList.add('selected');
  marupuru.classList.remove('selected');
  hong.classList.remove('selected');
  azam.classList.remove('selected');
  warne.classList.remove('selected');
}

warne.onmouseover = function () {
  warnebio.style.display = "block";
  azambio.style.display = "none";
  marupurubio.style.display = "none";
  kohgalebio.style.display = "none";
  hongbio.style.display = "none";
  warne.classList.add('selected');
  marupuru.classList.remove('selected');
  hong.classList.remove('selected');
  kohgale.classList.remove('selected');
  azam.classList.remove('selected');
}


$(document).ready(function() {
	$('#myCarousel').carousel({
	interval: 10000
	})

    $('#myCarousel').on('slid.bs.carousel', function() {
    	//alert("slid");
	});
});

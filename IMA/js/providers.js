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


azam.onclick = function() {
  azambio.style.display = "block";
  marupurubio.style.display = "none";
  hongbio.style.display = "none";
  kohgalebio.style.display = "none";
  warnebio.style.display = "none";
}

marupuru.onclick = function() {
  marupurubio.style.display = "block";
  azambio.style.display = "none";
  hongbio.style.display = "none";
  kohgalebio.style.display = "none";
  warnebio.style.display = "none";
}

hong.onclick = function() {
  hongbio.style.display = "block";
  azambio.style.display = "none";
  marupurubio.style.display = "none";
  kohgalebio.style.display = "none";
  warnebio.style.display = "none";
}

kohgale.onclick = function() {
  kohgalebio.style.display = "block";
  azambio.style.display = "none";
  marupurubio.style.display = "none";
  hongbio.style.display = "none";
  warnebio.style.display = "none";
}

warne.onclick = function() {
  warnebio.style.display = "block";
  azambio.style.display = "none";
  marupurubio.style.display = "none";
  kohgalebio.style.display = "none";
  hongbio.style.display = "none";
}

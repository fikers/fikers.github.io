var servicebuttons = document.querySelectorAll('.servicebutton');

servicebuttons.forEach(function(button){
  button.onclick = function(text){
  console.log(text);
  }
  });

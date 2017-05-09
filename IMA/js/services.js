var servicebuttons = document.querySelectorAll('.servicebutton');
var array = Array.from(servicebuttons);

array.forEach(function(item){
    item.onmouseover = function(){
      item.querySelector('.descitem').style.display = "block";
      item.querySelector('.serviceitem').style.display ="none";
    }
    item.onmouseout = function(){
      item.querySelector('.descitem').style.display = "none";
      item.querySelector('.serviceitem').style.display ="block";
    }
})

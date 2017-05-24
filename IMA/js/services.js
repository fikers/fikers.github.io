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



// var servicebuttons = document.querySelectorAll('.servicebutton');
// var array = Array.from(servicebuttons);
//
// var primarycare = document.getElementById('primarycare');
// var preventivecare = document.getElementById('preventivecare');
// var immigrationphysical = document.getElementById('immigrationphysical');
// var dmvphysicals = document.getElementById('dmvphysicals');
// var schoolphysicals = document.getElementById('schoolphysicals');
// var immunizations = document.getElementById('immunizations');
//
//
// if (window.location.href.includes('primarycare')) {
// }
//
// primarycare.onmouseover = function(){
//   primarycare.querySelector('.descitem').style.display = "block";
//   primarycare.querySelector('.serviceitem').style.display = "none";
// }
//
// primarycare.onmouseout = function(){
//   primarycare.querySelector('.descitem').style.display = "none";
//   primarycare.querySelector('.serviceitem').style.display = "block";
// }
//
//
//
// // array.forEach(function(item){
// //     item.onmouseover = function(){
// //       item.querySelector('.descitem').style.display = "block";
// //       item.querySelector('.serviceitem').style.display ="none";
// //     }
// //     if (item.querySelector('.descitem').style.display == "none"){
// //
// //       item.onmouseout = function(){
// //         item.querySelector('.descitem').style.display = "none";
// //         item.querySelector('.serviceitem').style.display ="block";
// //         primarycare.style.backgroundColor = "#082567";
// //         primarycare.style.color = "white";
// //         primarycare.style.paddingTop = "100px";
// //       }
// //   }
// // })

//script.js

$(function(){
    var carouselList = $("#carousel ul");
      
  // interwał. Zmiana slajdu następuje co 3000ms (3s)
	 setInterval(changeSlide,3000);
  
  // przesunięcie całej listy 400 px w lewo - ustawienie marginesu na -400px. 850 to czas animacji. Potem wykonuje się funkcja moveFirstSlide
  function changeSlide(){
    carouselList.animate({marginLeft:-400}, 850, moveFirstSlide);
  }
  
  // po dokonaniu animacji należy przenieść pierwszy element listy na jej koniec - ten sposób po ostatnim slajdzie zobaczymy pierwszy. 
  function moveFirstSlide(){
  	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem)
	carouselList.css({marginLeft:0});
   }
})

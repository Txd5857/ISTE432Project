function openNav() {
  	if(document.getElementById("myNav").style.display == "block"){
		document.getElementById("myNav").style.display = "none";
	}else{
		document.getElementById("myNav").style.display = "block";
	}
}
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
function modal(id){
   $('#showRecipe').modal({
	fadeDuration: 100
	});
}

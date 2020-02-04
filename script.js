// Script to open and close sidebar
var images = document.querySelectorAll("img");
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
function style1() {
  document.getElementById("styleLink").setAttribute("href", "style1.css");

  for (i = 0; i < images.length; i++){images[i].setAttribute('src', `./style1/${i+1}.jpeg`)}
}
function style2() {
  document.getElementById("styleLink").setAttribute("href", "style2.css");

  for (i = 0; i < images.length; i++){images[i].setAttribute('src', `./style2/${i+1}.jpeg`)}
}
function style3() {
  document.getElementById("styleLink").setAttribute("href", "style3.css");

   for (i = 0; i < images.length; i++){images[i].setAttribute('src', `./style3/${i+1}.jpeg`)}
}
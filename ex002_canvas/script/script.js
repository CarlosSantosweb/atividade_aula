var c = document.getElementById("testecanvas");
var ctx = c.getContext("2d");
ctx.fillStyle="blue";
ctx.fillRect(0,0,200,400);

/*var lat;
var lon;
    
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(
    function(posicao){
      console.log(posicao);
 
      lat = posicao.coords.latitude;
      lon = posicao.coords.longitude;
 
      console.log(lat, lon);
 
    } 
  );
}*/
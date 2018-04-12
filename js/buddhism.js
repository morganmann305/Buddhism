  $(document).ready(function(){
    $('.slider').bxSlider();
  });


/*
function myMap() {
loadmap();

}


function loadmap()
{
  var myLatLng = {lat: 25.761681, lng: -80.191788};

  var mapProp= {
    center:new google.maps.LatLng(25.761681,-80.191788),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
         position: myLatLng,
         map: map,
         title: 'Miami USA'
       });

}
function loadmap1()
{
  //AIzaSyC7G4tirS4p57ekFlthWBhgESCto1HeVXo
  var mapboxAccessToken = {pk.eyJ1IjoibW9yZ2FubWFubiIsImEiOiJjamZvYmhmaXowb2Y4MndwZThmeXoxY2R1In0.KeGv6hRJCa13ZhpvWBvFkQ};
var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
    id: 'mapbox.light',
    attribution: ...
}).addTo(map);

L.geoJson(statesData).addTo(map);

}
*/

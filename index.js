// const colors = require('colors')

// ============================ Array for Lat/Lng info ============================
const locations = [
  { lat: 35.551032, lng: 129.263437 },  // my home
  { lat: 37.3595704, lng: 127.105399 }, // naver green factory
]
// ================================================================================

// ============================ Map Options ============================
const mapOptions = {
  center: new naver.maps.LatLng(locations[0].lat, locations[0].lng),
  zoom: 6,
  // mapTypeId: naver.maps.MapTypeId.NORMAL,
  // mapTypeId: naver.maps.MapTypeId.SATELLITE,
  mapTypeId: naver.maps.MapTypeId.HYBRID,
}
// =====================================================================

// ============================ Creating a new Naver Map ============================
const map = new naver.maps.Map(document.getElementById('map'), mapOptions);
// ==================================================================================

// ============================ Change Map Settings with Buttons ============================
const buttonNormal = document.querySelector('.btn-normal')
const buttonSatellite = document.querySelector('.btn-satellite')
const buttonHybrid = document.querySelector('.btn-hybrid')
const buttonTerrain = document.querySelector('.btn-terrain')

function changeMapType(type) {
  map.setMapTypeId(naver.maps.MapTypeId[type])
}

buttonNormal.addEventListener('click', function() {
  changeMapType('NORMAL');
});

buttonSatellite.addEventListener('click', function() {
  changeMapType('SATELLITE');
});

buttonHybrid.addEventListener('click', function() {
  changeMapType('HYBRID');
});

buttonTerrain.addEventListener('click', function() {
  changeMapType('TERRAIN');
});
// ==========================================================================================




// ============================ Markers: Creating & Displaying ============================
let marker1 = new naver.maps.Marker({
  position: new naver.maps.LatLng(locations[0].lat, locations[0].lng),
  map: map,
  title: 'urlMarker',
  // animation: naver.maps.Animation.BOUNCE,
  animation: naver.maps.Animation.DROP,
})

let marker2 = new naver.maps.Marker({
  position: new naver.maps.LatLng(locations[1].lat, locations[1].lng),
  map: map,
  title: 'urlMarker',
  // animation: naver.maps.Animation.BOUNCE,
  animation: naver.maps.Animation.DROP,
})
// ========================================================================================

// ============================ Moving a Marker to clicked position ============================
naver.maps.Event.addListener(map, 'click', (e) => {
  marker1.setPosition(e.latlng);
})
// =============================================================================================




// ============================ Check if there's an Authentication Failure ============================
window.navermap_authFailure = () => {
  console.log('Naver Map Authentication Failed!')
}
// ====================================================================================================
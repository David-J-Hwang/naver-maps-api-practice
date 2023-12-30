// const colors = require('colors')

// ============================ Array for Lat/Lng info ============================
const locations = [
  { lat: 35.551032, lng: 129.263437 },  // my home
  { lat: 37.3595704, lng: 127.105399 }, // naver green factory
]

let zoomNum = 9;
// ================================================================================

// ============================ Map Options ============================
const mapOptions = {
  center: new naver.maps.LatLng(locations[0].lat, locations[0].lng),
  zoom: zoomNum,
  // mapTypeId: naver.maps.MapTypeId.NORMAL,
  // mapTypeId: naver.maps.MapTypeId.SATELLITE,
  // mapTypeId: naver.maps.MapTypeId.HYBRID,
  // mapTypeId: naver.maps.MapTypeId.TERRAIN,
  zoomControl: true,
  zoomControlOptions: {
    style: naver.maps.ZoomControlStyle.LARGE,
    position: naver.maps.Position.RIGHT_TOP,
    // position: naver.maps.Position.RIGHT_BOTTOM,
    // position: naver.maps.Position.BOTTOM_RIGHT,
  }
}
// =====================================================================

// ============================ Creating a new Naver Map ============================
const map = new naver.maps.Map(document.getElementById('map'), mapOptions);
map.setMapTypeId(N.MapTypeId.HYBRID)
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

// ============================ Move around ============================
const buttonMoveJeju = document.querySelector('.btn-movejeju')
const jeju = new naver.maps.LatLng(33.3590628, 126.534361);
buttonMoveJeju.addEventListener('click', () => {
  map.setCenter(jeju)
})

const buttonMoveSeoul = document.querySelector('.btn-moveseoul')
const seoul = new naver.maps.LatLngBounds(
  new naver.maps.LatLng(37.42829747263545, 126.76620435615891),
  new naver.maps.LatLng(37.7010174173061, 127.18379493229875));

buttonMoveSeoul.addEventListener('click', () => {
  map.fitBounds(seoul)
})

const buttonZoomIn = document.querySelector('.btn-zoom-in')
const buttonZoomOut = document.querySelector('.btn-zoom-out')
function changeZoom(increment) {
  let currentZoom = map.getZoom()
  map.setZoom(currentZoom + increment);
}

buttonZoomIn.addEventListener('click', () => {
  // if(zoomNum > 0 && zoomNum < 15) {
  //   zoomNum += 1;
  //   map.setZoom(zoomNum)
  // }
  // map.setZoom(12)
  changeZoom(1)
})

buttonZoomOut.addEventListener('click', () => {
  // if(zoomNum > 0 && zoomNum < 15) {
  //   zoomNum -= 1;
  //   map.setZoom(zoomNum)
  // }
  // map.setZoom(6)
  changeZoom(-1)
})
// =====================================================================

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
// naver.maps.Event.addListener(map, 'click', (e) => {
//   marker1.setPosition(e.latlng);
// })
// =============================================================================================

// ============================ Console Logging the coordinate where mouse is clicked ============================
naver.maps.Event.addListener(map, 'click', function(e) {
  console.log('Map clicked at: ', e.coord);
});

// ===============================================================================================================

// ============================ Check if there's an Authentication Failure ============================
window.navermap_authFailure = () => {
  console.log('Naver Map Authentication Failed!')
}
// ====================================================================================================
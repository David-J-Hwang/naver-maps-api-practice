// const colors = require('colors')

// ============================ Array for Lat/Lng info ============================
const locations = [
  { lat: 35.551032, lng: 129.263437 }, // my home
  { lat: 37.3595704, lng: 127.105399 }, // naver green factory
];

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
  },
};
// =====================================================================

// ============================ Creating a new Naver Map ============================
const map = new naver.maps.Map(document.getElementById("map"), mapOptions);
map.setMapTypeId(N.MapTypeId.NORMAL);
// ==================================================================================

// 지도를 클릭했을 때 해당 위치를 console log하는 예제
// e: coord, domEvent, latlng, ...
naver.maps.Event.addListener(map, 'click', (e) => {console.log(e)})

let markerOptions = {
  position: map.getCenter(),
  map: map,
}

let marker1 = new naver.maps.Marker(markerOptions)

let listener = naver.maps.Event.addListener(marker1, 'click', () => {
  map.setZoom(8);
  map.setCenter(marker1.getPosition());
  
  // 마커를 클릭하는 경우, 마커 중심으로 맵을 재설정하는 기능을 제거한다.
  naver.maps.Event.removeListener(listener)
})
















// ============================ Check if there's an Authentication Failure ============================
window.navermap_authFailure = () => {
  console.log("Naver Map Authentication Failed!");
};
// ====================================================================================================

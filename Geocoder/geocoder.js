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
  zoomControl: true,
  zoomControlOptions: {
    style: naver.maps.ZoomControlStyle.LARGE,
    position: naver.maps.Position.RIGHT_TOP,
  },
};
// =====================================================================
// ============================ Creating a new Naver Map ============================
const map = new naver.maps.Map(document.getElementById("map"), mapOptions);
map.setMapTypeId(N.MapTypeId.NORMAL);
// ==================================================================================



// ============================ Check if there's an Authentication Failure ============================
window.navermap_authFailure = () => {
  console.log("Naver Map Authentication Failed!");
};
// ====================================================================================================

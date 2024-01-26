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

// // 주소를 좌표로 변환하는 API 호출
// naver.maps.Service.geocode({query: "불정로 6"}, (status, response) => {
//     if (status !== naver.maps.Service.Status.OK) {
//       return alert("Something wrong!");
//     }

//     let result = response.v2; // 검색 결과의 컨테이너
//     let items = result.addresses; // 검색 결과의 배열
//     console.log(items)
//     console.log(items[0].englishAddress)
//     console.log(items[0].jibunAddress);
//     console.log(items[0].roadAddress);
//     console.log(`Lat: ${items[0].y}`)
//     console.log(`Lng: ${items[0].x}`)
//   }
// );

// 좌표를 주소로 변환하는 API 호출
const houseLat = 35.551036;
const houseLng = 129.263470;
// naver.maps.Service.reverseGeocode({coords: new naver.maps.LatLng(37.3595316, 127.1052133)}, (status, response) => {
naver.maps.Service.reverseGeocode({coords: new naver.maps.LatLng(houseLat, houseLng)}, (status, response) => {
    if (status !== naver.maps.Service.Status.OK) {
      return alert("Something wrong!");
    }

    let result = response.v2; // 검색 결과의 컨테이너
    let items = result.results; // 검색 결과의 배열
    let address = result.address; // 검색 결과로 만든 주소

    console.log(result)
    console.log(items)
    console.log(address)
  }
);
// ============================ Check if there's an Authentication Failure ============================
window.navermap_authFailure = () => {
  console.log("Naver Map Authentication Failed!");
};
// ====================================================================================================

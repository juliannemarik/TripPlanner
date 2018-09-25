const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWFubmVtYXJpayIsImEiOiJjam1pNW9vZzkwMWoyM2tvNW8yMXN6OTFmIn0.uFyxAO9roUg6F2EnUT416A';
const map = new mapboxgl.Map({
  container: "map",
  center: [-87.641, 41.895], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

const chicagoCoords = [-87.641, 41.895];
const marker1 = buildMarker('activity', chicagoCoords);
marker1.addTo(map);

const marker2 = buildMarker('restaurant', [-87.650, 41.897]);
marker2.addTo(map);






const mapboxgl = require("mapbox-gl");

const iconURLs = {
  hotels: "url(http://i.imgur.com/D9574Cu.png)",
  restaraunts: "url(http://i.imgur.com/cqR6pUI.png)",
  activities: "url(http://i.imgur.com/WbMOfMl.png)",
}

const buildMarker = (type, coords) => {
  type = type.toLowerCase();
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";

  if (type === 'activity') {
    console.log('IN ACTIVITY');
    markerDomEl.style.backgroundImage = iconURLs.activities
  } else if (type === 'hotel') {
    markerDomEl.style.backgroundImage = iconURLs.hotels;
  } else if (type === 'restaurant') {
    markerDomEl.style.backgroundImage = iconURLs.restaraunts;
  }
  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
}

module.exports = buildMarker;


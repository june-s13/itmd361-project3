var map;
const iit = {lat:41.835, lng:-87.627};
const bowlingSpot = {lat: 41.84890218281394, lng: -87.62504520866703};
const thefishies = { lat: 30.54719454933027, lng: -174.29905143434593}

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: iit,
    zoom: 15,
  });
}

initMap();
var map;
const iit = {lat:41.835, lng:-87.627};
const bowlingSpot = {lat: 41.84890218281394, lng: -87.62504520866703};
const thefishies = { lat: 30.54719454933027, lng: -174.29905143434593}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: iit,
      zoom: 14,
    });

    const marker = new google.maps.Marker({
      position: bowlingSpot,
      map: map,
      title: "Best Bowling Spot on Campus",
    });

}
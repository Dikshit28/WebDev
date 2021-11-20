function initMap() {
    // Latitude and Longitude
    var myLatLng = { lat: 28.503899006831507, lng: 77.04992734656217 };

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'The NorthCap University' // Title Location
    });
}
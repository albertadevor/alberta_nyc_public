let pvd = {lat: 41.8268, lng: -71.4025};
let sf = {lat: 37.77674 , lng: -122.41637};
let ny = {lat: 40.6931, lng: -73.9866};
let uk = {lat: 51.5126, lng: - 0.0909};
let nanjing = {lat: 32.0568, lng: 118.7790};
let middle_of_atlantic = {lat: 26.342653, lng: -36.914063};
let seattle = {lat: 47.6062, lng: -122.3321};
let dc = {lat: 38.883414, lng: -77.014649};

let pvd_offset = {lat: 41.8268, lng: -71.4325}; //add 0.03 lng
let sf_offset = {lat: 37.7749, lng: -122.5194}; //add 0.1 lng
let ny_offset = {lat: 40.6931, lng: -74.0866}; //add 0.1 lng
let uk_offset = {lat: 51.5126, lng: - 0.2409}; //add 0.15 lng
let nanjing_offset = {lat: 32.0568, lng: 118.6790}; //subtract 0.1 lng
let seattle_offset = {lat: 47.6062, lng: -122.4321};//add 0.1 lng
let dc_offset = {lat: 38.883414, lng: -77.114649}; //add 0.1 lng

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 3,
        center: sf_offset,
        draggable: false
    });
}

$( "#cards" ).scroll(function() {
    moveMapDependingOnScroll();
});

function moveMapDependingOnScroll() {
    //check backwards if statements and say isScrolledIntoTopHalf of each
    if(isScrolledIntoTopHalf($("#first-card"))) {
        map.setCenter(sf);
        map.setZoom(3);
        return;
    } else if(isScrolledIntoTopHalf($("#ny-card"))) {
        map.setCenter(ny_offset);
        map.setZoom(12);
        return;
    } else if(isScrolledIntoTopHalf($("#dc-card"))) {
        map.setCenter(dc_offset);
        map.setZoom(12);
        return;
    } else if(isScrolledIntoTopHalf($("#providence-card"))) {
        map.setCenter(pvd_offset);
        map.setZoom(14);
        return;
    } else if(isScrolledIntoTopHalf($("#seattle-card"))) {
        map.setCenter(seattle_offset);
        map.setZoom(11);
        return;
    } else if(isScrolledIntoTopHalf($("#london-card"))) {
        map.setCenter(uk_offset);
        map.setZoom(12);
        return;
    } else if(isScrolledIntoTopHalf($("#sf-card"))) {
        map.setCenter(sf_offset);
        map.setZoom(12);
        return;
    }  else if(isScrolledIntoTopHalf($("#pvd-card-2"))) {
        map.setCenter(pvd_offset);
        map.setZoom(14);
        return;
    } else if(isScrolledIntoTopHalf($("#ny-card-2"))) {
        map.setCenter(ny_offset);
        map.setZoom(12);
        return;
    }  else if(isScrolledIntoTopHalf($("#nanjing-card"))) {
        map.setCenter(nanjing_offset);
        map.setZoom(12);
        return;
    } else if(isScrolledIntoTopHalf($("#last-entry"))) {
        map.setCenter(sf);
        map.setZoom(3);
        return;
    }
}

function isScrolledIntoTopHalf(elem) {
    var docViewTop = $(window).scrollTop();
    var midScreen = docViewTop + ($(window).height()*0.5);
    //this .5 allows us to be in the top half of the page

    var elemTop = $(elem).offset().top;

    return (elemTop >= docViewTop) && (elemTop < midScreen);
}
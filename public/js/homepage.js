window.onload = function(){
    setTimeout(fakeScrollNameAndStopDown, 1500);
};

function fakeScrollNameAndStopDown() {
    const inc = 6;
    let line = $('#hi-line');
    let headerTxt =  $('#header-stop');
    let alb =  $('#alb');
    let map = $('#map');
    let hiddenMap = $('#hidden-map');
    const delay = 15;


    function loop() {
     let time_1 = Date.now();
        let increment = inc;
        let newLineMarg = parseInt(line.css('margin-top')) - increment;
        let newHeaderMarg = parseInt(headerTxt.css('margin-top')) - increment;
        let bgPos = parseInt(map.css('background-position').split(" ")[1]) - increment;
        let hiddenMapPos = parseInt(hiddenMap.css('margin-top')) - increment;
        let newAlbMarg = parseInt(alb.css('margin-top')) - increment;


        headerTxt.css('margin-top',newHeaderMarg.toString() + "px");
        alb.css('margin-top',newAlbMarg.toString() + "px");
        hiddenMap.css('margin-top',hiddenMapPos.toString() + "px");
        line.css('margin-top', newLineMarg.toString() + "px");
         map.css('background-position', "0px " + bgPos + "px");

        if(bgPos<=0) {
            clearInterval(loopVal);
            topAppears();
        }
    }
    let time_2 = Date.now();
    let loopVal = setInterval(loop, delay);
}

function topAppears() {
    let toAppear = $("h1.hidden-map, h2.hidden-map, ul.hidden-map");
    let opacity = 0.0;
    const delay = 10;
    const inc = 0.1;

    function loop() {
        toAppear.css('opacity', opacity);
        opacity = opacity + inc;

        if(opacity>=1.0) {
            clearInterval(luuup);
            turnOnScrollingIfNeeded();
        }
    }
    let luuup = setInterval(loop, delay);

}
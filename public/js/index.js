function turnOnScrollingIfNeeded() {
    if ($(window).height()<475) {
        //the map doesn't fit into the window - allow for scrolling
        $('body').css('overflow-y', 'scroll');

    } else {
        $('body').css('overflow-y', 'hidden');
    }

}

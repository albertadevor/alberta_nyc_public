function iconClicked(textToReveal, ele){
    console.log($(ele));
    if(ele.classList.contains("more")) {
        //Hide the text
        $("#" + textToReveal).slideDown(1000);
        $(ele).removeClass("more");
        $(ele).addClass("less");

        ele.innerHTML = "<img src=\"img/left-arrow.png\" class=\"see-more-arrow\" /><p>Less</p>";

    } else  {
        //Reveal the text
        $("#" + textToReveal).slideUp(1000);
        $(ele).removeClass("less");
        $(ele).addClass("more");

        ele.innerHTML = "<p>More</p><img src=\"img/right-arrow.png\" class=\"see-more-arrow\" />";
    }

}
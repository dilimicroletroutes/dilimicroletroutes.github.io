/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('.navbar').addClass('sticky');
        $('.about').addClass('padding')
    }
    else {
        $('.navbar').removeClass('sticky');
        $('.about').removeClass('padding');
    }
});
$(document).ready(function(){
    $('nav a').click(function(){
    let sectionId = $(this).attr('href');
    let targetOffset = $(sectionId).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 1000);
    });
});

document.addEventListener("DOMContentLoaded", function() {
});

$(document).ready(function () {
    // 圖片lozad
    const observer = lozad('.lozad', {
        rootMargin: "150px 0px"
    });
    observer.observe();
    
    // 立即訂購btn動態
    $('.buybtn').click(function (e) { 
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#size').offset().top,
        },900);
    });
});
$(document).ready(function() {
    // volunterr页面资讯轮播
	 var swiper = new Swiper('.volunteer-box .swiper-container', {
        pagination: '.volunteer-box .swiper-pagination',
        nextButton: '.volunteer-box .swiper-button-next',
        prevButton: '.volunteer-box .swiper-button-prev',
        slidesPerView:3,
        paginationClickable: true,
        spaceBetween:50,
        autoplay: false,
	    autoplayDisableOnInteraction: false,
        loop: true,
        observer:true,//自动初始化swiper 
		observeParents:true,//自动初始化swiper 
    });
});
window.theme = window.theme || {};

theme.banner = new function() {

  // init default settings
  var settings = {
    bannerSelector : '[data-bannerSlider]',
    autoplay : false,
    arrows: true,
    slidesToShow: 1.05
    };

    $(settings.bannerSelector).slick({
        prevArrow:'<button type="button" class="left_arrow arrows"></button>',
        nextArrow:'<button type="button" class="right_arrow arrows">&gt;</button>',
        arrows: settings.arrows,
        adaptiveHeight: true,
        slidesToShow: settings.slidesToShow
      })

  return banner;
}

var banner = new theme.banner();

window.theme = window.theme || {};

theme.banner = new function() {

  // init default settings
  var settings = {
    bannerSelector : '[data-banner]',
    autoplay : true,
    autoplaySpeed : 2000,
    arrows: false,
    dots: false,
    dotsClass: 'slick-dots'
    };

  function banner() {
    if ($(settings.bannerSelector).data("banner-arrow") == true) {
      settings.arrows = true;
    }

    if ($(settings.bannerSelector).data("banner-dots") == true) {
      settings.dots = true;
    }

    $(settings.bannerSelector).slick({
        autoplay: settings.autoplay,
        autoplaySpeed: settings.autoplaySpeed,
        prevArrow:'<button type="button" class="prev_arrow arrow">￩</button>',
        nextArrow:'<button type="button" class="next_arrow arrow">￫</button>',
        arrows: settings.arrows,
        dots: settings.dots,
        adaptiveHeight: true
      })
  }

  return banner;
}

var banner = new theme.banner();

//------------------------------

var form = $('form[action="/cart/add"]');

$(form).find('[data-variant-id]').on('click', function() {
  var id = $(this).data('variant-id');
  console.log(id);
  $(form).find('input[name="id"]').val(id);
  $(this).parent().parent().find(".featured-collection__hidden--btn").css("background-color", "black");
});

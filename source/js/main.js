document.addEventListener('DOMContentLoaded', function() {
  const selectFirst = document.querySelector('.calc__select_first');
  const selectSecond = document.querySelector('.calc__select_second');
  const selectThird = document.querySelector('.calc__select_third');
  new Choices(selectFirst, {
    removeItems: true,
    itemSelectText: '',
    shouldSort: true,
  });
  new Choices(selectSecond, {
    removeItems: true,
    itemSelectText: '',
    shouldSort: true,
  });
  new Choices(selectThird, {
    removeItems: true,
    itemSelectText: '',
    shouldSort: true,
  });

  new Swiper('.job__slider-container', {
    loop: true,
    navigation: {
      nextEl: '.job__nav-btn_next',
      prevEl: '.job__nav-btn_prev',
    },
    slidesPerView: 2,
    spaceBetween: 30,
  });
});

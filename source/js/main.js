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
});

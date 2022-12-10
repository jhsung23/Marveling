const topButton = document.querySelector('.move-top-button');

topButton.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

window.onscroll = () =>
  window.scrollY > 80 ? (topButton.style.opacity = 1) : (topButton.style.opacity = 0);

const spotSwiper = new Swiper('.swiper-container', {
  direction: 'horizontal', // 방향
  slidesPerView: 4, // 슬라이드를 한번에 4개를 보여준다
  slidesPerGroup: 4, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
  // spaceBetween: 5, // 슬라이드간 padding 값 30px 씩 떨어뜨려줌

  // 그룹수가 맞지 않을 경우 빈칸으로 메우기
  // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
  loopFillGroupWithBlank: true,
  loop: false, // loop 를 true 로 할경우 무한반복 슬라이드, false 로 할경우 슬라이드의 끝에서 더보여지지 않음

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // 반응형
  breakpoints: {
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    720: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
});

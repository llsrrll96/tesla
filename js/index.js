const fullpageEl = document.getElementById('fullpage');
const menuBtn = document.querySelector('.menu_btn');
const navigation = document.querySelector('.navigation');
const navCloseBtn = document.querySelector('.navigation_close_btn');

const blurOverlay = document.querySelector('.blur_overlay');

const IS_ACTIVE = 'is--active';
var scrollActive = true;

const toggleNavigation = () => {
  navigation.classList.toggle(IS_ACTIVE);
  blurOverlay.classList.toggle(IS_ACTIVE);
  fullpageEl.classList.toggle('no-scroll');

  if (scrollActive) {
    scrollActive = false
    fullpage_api.setAllowScrolling(scrollActive);
  }else{
    scrollActive = true
    fullpage_api.setAllowScrolling(scrollActive);
  }

};

menuBtn.addEventListener('mouseover', toggleNavigation);
navCloseBtn.addEventListener('click', toggleNavigation);
blurOverlay.addEventListener('click', toggleNavigation);

// 여기에서 fullpage를 초기화 설정
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
});

// //methods
// fullpage_api.setAllowScrolling(true);


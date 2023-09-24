document.addEventListener('DOMContentLoaded', function() {
  const hamburgerButton = document.querySelector('.js-hamburger');
  const drawer = document.querySelector('.js-drawer');

  hamburgerButton.addEventListener('click', function() {
    this.classList.toggle('is-open');
    drawer.classList.toggle('is-open');
  });

  document.querySelectorAll('.js-drawer a[href]').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      drawer.classList.remove('is-open');
      hamburgerButton.classList.remove('is-open');
    });
  });

  window.addEventListener('resize', function() {
    if (window.matchMedia("(min-width: 768px)").matches) {
      drawer.classList.remove('is-open');
      hamburgerButton.classList.remove('is-open');
    }
  });
// });


// jQuery(function ($) { 
  
//   const hamburgerButton = document.querySelector('.header__hamburger');
//   const drawer = document.querySelector('.header__drawer');
  
//   hamburgerButton.addEventListener('click', () => {
//     if (drawer.classList.contains('is-open')) {
//       drawer.classList.remove('is-open');
//     } else {
//       drawer.classList.add('is-open');
//     }
  
//     if (hamburgerButton.classList.contains('is-open')) {
//       hamburgerButton.classList.remove('is-open');
//     } else {
//       hamburgerButton.classList.add('is-open');
//     }
//   });

  const splide = new Splide(".splide", {
    autoplay: true, // 自動再生
    type: "fade", // フェード
    rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
    pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
    pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
    interval: 5000, // 自動再生の間隔
    speed: 2000, // スライダーの移動時間
  }).mount();


});

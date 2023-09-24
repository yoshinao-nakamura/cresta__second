jQuery(function ($) {

  const hamburgerButton = document.querySelector('.header__hamburger');
  const drawer = document.querySelector('.header__drawer');
  const body = document.querySelector('body'); // body要素を取得

  function closeDrawer() {
    drawer.classList.remove('is-open');
    hamburgerButton.classList.remove('is-open');
    body.classList.remove('fixed'); // drawerが閉じられるときにbodyの固定を解除
  }

  function checkScreenWidth() {
    if (window.innerWidth >= 768) {
      closeDrawer();
    }
  }

  hamburgerButton.addEventListener('click', () => {
    if (drawer.classList.contains('is-open')) {
      drawer.classList.remove('is-open');
      body.classList.remove('fixed'); // drawerが閉じられるときにbodyの固定を解除
    } else {
      drawer.classList.add('is-open');
      body.classList.add('fixed'); // drawerが開かれるときにbodyを固定
    }

    if (hamburgerButton.classList.contains('is-open')) {
      hamburgerButton.classList.remove('is-open');
    } else {
      hamburgerButton.classList.add('is-open');
    }
  // });

  // ページ読み込み時とウィンドウサイズが変更された場合に実行
  window.addEventListener('load', checkScreenWidth);
  window.addEventListener('resize', checkScreenWidth);

});


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

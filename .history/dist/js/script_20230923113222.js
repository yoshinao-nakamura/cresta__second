jQuery(function ($) { 
  
  const hamburgerButton = document.querySelector('.header__hamburger');
  const drawer = document.querySelector('.header__drawer');
  
  hamburgerButton.addEventListener('click', () => {
    if (drawer.classList.contains('is-open')) {
      drawer.classList.remove('is-open');
    } else {
      drawer.classList.add('is-open');
    }
  
    if (hamburgerButton.classList.contains('is-open')) {
      hamburgerButton.classList.remove('is-open');
    } else {
      hamburgerButton.classList.add('is-open');
    }
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

  // $はjQueryを表す
// この中にコードを書く

// 例：クラスがc-btnのcolorを黒色にする
// $(".c-btn").css("color","black")

// 例：idがbuttonのテキストを変更
// $("#button").text("ボタンのテキストを変更");

// 例：クラスがc-btnをクリックした場合、コンソールログを出力
// $(".c-btn").click(function() {
//   console.log("ボタンがクリックされました！");
// });


});

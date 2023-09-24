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

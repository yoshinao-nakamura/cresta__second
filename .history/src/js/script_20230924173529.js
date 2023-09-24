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

    $("body").toggleClass("body-locked");
    console.log("Body class toggled"); // Check if class is toggled
  });
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


    // mvの位置を取得する関数
    function getMvPosition() {
      const mv = document.querySelector('.top-mv');
      return mv.offsetTop + mv.offsetHeight;
    }
  
    // mvを過ぎたら背景色を変える
    window.addEventListener('scroll', function() {
      var header = document.querySelector('.header');
      if (window.scrollY > getMvPosition()) {
        header.classList.add('mv-passed');
      } else {
        header.classList.remove('mv-passed');
      }
    });
  
  });


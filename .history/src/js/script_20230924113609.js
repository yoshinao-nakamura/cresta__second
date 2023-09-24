 document.body.style.overflow = 'auto'; // ドロワーが閉じた時にスクロールを有効にする
  } else {
    drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // ドロワーが開いた時にスクロールを無効にする
  }
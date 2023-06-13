
// 按鈕
window.addEventListener('scroll', function () {
  var backToTopButton = document.getElementById('back-to-top');
  if (window.scrollY >= 500 && !backToTopButton.classList.contains('fade-in')) {
    backToTopButton.classList.add('fade-in');
    backToTopButton.classList.remove('fade-out');
    backToTopButton.style.display = 'block';
  } else if (window.scrollY < 500 && backToTopButton.classList.contains('fade-in')) {
    backToTopButton.classList.add('fade-out');
    backToTopButton.classList.remove('fade-in');
    setTimeout(function() {
      backToTopButton.style.display = 'none';
      backToTopButton.classList.remove('fade-out');
    }, 300);
  }
});



window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.type1');
    var windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      var scrollPosition = element.getBoundingClientRect().top;
  
      if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeIn')) {
        element.style.opacity = 1; // 显示元素
        element.classList.add('animate__animated', 'animate__fadeIn');
      } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeIn')) {
        element.style.opacity = 0; // 隐藏元素
        element.classList.remove('animate__animated', 'animate__fadeIn');
      }
    });
  });
  
// //如果動畫跑不出來，檢查看看動畫前的div class叫什麼，這邊沒有的話直接整段複製，再把(type1)改成那段div class的名字   


  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.type2');
    var windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      var scrollPosition = element.getBoundingClientRect().top;
  
      if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeIn')) {
        element.style.opacity = 1;
        element.classList.add('animate__animated', 'animate__fadeIn');
      } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeIn')) {
        element.style.opacity = 0; 
        element.classList.remove('animate__animated', 'animate__fadeIn');
      }
    });
  });

  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.type22');
    var windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      var scrollPosition = element.getBoundingClientRect().top;
  
      if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeIn')) {
        element.style.opacity = 1;
        element.classList.add('animate__animated', 'animate__fadeIn');
      } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeIn')) {
        element.style.opacity = 0; 
        element.classList.remove('animate__animated', 'animate__fadeIn');
      }
    });
  });

  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.type3');
    var windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      var scrollPosition = element.getBoundingClientRect().top;
  
      if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeIn')) {
        element.style.opacity = 1;
        element.classList.add('animate__animated', 'animate__fadeIn');
      } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeIn')) {
        element.style.opacity = 0; 
        element.classList.remove('animate__animated', 'animate__fadeIn');
      }
    });
  });

  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.carousel-box');
    var windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      var scrollPosition = element.getBoundingClientRect().top;
  
      if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeIn')) {
        element.style.opacity = 1;
        element.classList.add('animate__animated', 'animate__fadeIn');
      } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeIn')) {
        element.style.opacity = 0; 
        element.classList.remove('animate__animated', 'animate__fadeIn');
      }
    });
  });


  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.button');
    var windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      var scrollPosition = element.getBoundingClientRect().top;
  
      if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeIn')) {
        element.style.opacity = 1;
        element.classList.add('animate__animated', 'animate__fadeIn');
      } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeIn')) {
        element.style.opacity = 0; 
        element.classList.remove('animate__animated', 'animate__fadeIn');
      }
    });
  });

  // 

  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.squarerightcc-content');
    var windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      var scrollPosition = element.getBoundingClientRect().top;
  
      if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeInRight')) {
        element.style.opacity = 1;
        element.classList.add('animate__animated', 'animate__fadeInRight');
      } else if (scrollPosition >= windowHeight * 0.9 && element.classList.contains('animate__fadeInRight')) {
        element.style.opacity = 0; 
        element.classList.remove('animate__animated', 'animate__fadeInRight');
      }
    });
  });

  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.squareleftcc-content');
    var windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      var scrollPosition = element.getBoundingClientRect().top;
  
      if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeInLeft')) {
        element.style.opacity = 1;
        element.classList.add('animate__animated', 'animate__fadeInLeft');
      } else if (scrollPosition >= windowHeight * 0.9 && element.classList.contains('animate__fadeInLeft')) {
        element.style.opacity = 0; 
        element.classList.remove('animate__animated', 'animate__fadeInLeft');
      }
    });
  });

  // 
  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.squareleft');
    var windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      var scrollPosition = element.getBoundingClientRect().top;
  
      if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeInUp')) {
        element.style.opacity = 1;
        element.classList.add('animate__animated', 'animate__fadeInUp');
      } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeInUp')) {
        element.style.opacity = 0;
        element.classList.remove('animate__animated', 'animate__fadeInUp');
      }
    });
  });

  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.message-position');
    var windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      var scrollPosition = element.getBoundingClientRect().top;
  
      if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeInUp')) {
        element.style.opacity = 1;
        element.classList.add('animate__animated', 'animate__fadeInUp');
      } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeInUp')) {
        element.style.opacity = 0;
        element.classList.remove('animate__animated', 'animate__fadeInUp');
      }
    });
  });
  
  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.message-name');
    var windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      var scrollPosition = element.getBoundingClientRect().top;
  
      if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeInUp')) {
        element.style.opacity = 1;
        element.classList.add('animate__animated', 'animate__fadeInUp');
      } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeInUp')) {
        element.style.opacity = 0;
        element.classList.remove('animate__animated', 'animate__fadeInUp');
      }
    });
  });


  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.reply-content');
    var windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      var scrollPosition = element.getBoundingClientRect().top;
  
      if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeInUp')) {
        element.style.opacity = 1;
        element.classList.add('animate__animated', 'animate__fadeInUp');
      } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeInUp')) {
        element.style.opacity = 0;
        element.classList.remove('animate__animated', 'animate__fadeInUp');
      }
    });
  });

  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.replyimg-content');
    var windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      var scrollPosition = element.getBoundingClientRect().top;
  
      if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeInUp')) {
        element.style.opacity = 1;
        element.classList.add('animate__animated', 'animate__fadeInUp');
      } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeInUp')) {
        element.style.opacity = 0;
        element.classList.remove('animate__animated', 'animate__fadeInUp');
      }
    });
  });
// 


window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.img');
  var windowHeight = window.innerHeight;

  elements.forEach(function(element) {
    var scrollPosition = element.getBoundingClientRect().top;

    if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeInUp')) {
      element.style.opacity = 1;
      element.classList.add('animate__animated', 'animate__fadeInUp');
    } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeInUp')) {
      element.style.opacity = 0;
      element.classList.remove('animate__animated', 'animate__fadeInUp');
    }
  });
});

window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.video-player');
  var windowHeight = window.innerHeight;

  elements.forEach(function(element) {
    var scrollPosition = element.getBoundingClientRect().top;

    if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeInUp')) {
      element.style.opacity = 1;
      element.classList.add('animate__animated', 'animate__fadeInUp');
    } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeInUp')) {
      element.style.opacity = 0;
      element.classList.remove('animate__animated', 'animate__fadeInUp');
    }
  });
});

window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.time');
  var windowHeight = window.innerHeight;

  elements.forEach(function(element) {
    var scrollPosition = element.getBoundingClientRect().top;

    if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeInUp')) {
      element.style.opacity = 1;
      element.classList.add('animate__animated', 'animate__fadeInUp');
    } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeInUp')) {
      element.style.opacity = 0;
      element.classList.remove('animate__animated', 'animate__fadeInUp');
    }
  });
});

window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.rpgbox');
  var windowHeight = window.innerHeight;

  elements.forEach(function(element) {
    var scrollPosition = element.getBoundingClientRect().top;

    if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeInUp')) {
      element.style.opacity = 1;
      element.classList.add('animate__animated', 'animate__fadeInUp');
    } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeInUp')) {
      element.style.opacity = 0;
      element.classList.remove('animate__animated', 'animate__fadeInUp');
    }
  });
});


window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.illustration-item');
  var windowHeight = window.innerHeight;

  elements.forEach(function(element) {
    var scrollPosition = element.getBoundingClientRect().top;

    if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeIn')) {
      element.style.opacity = 1;
      element.classList.add('animate__animated', 'animate__fadeIn');
    } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeIn')) {
      element.style.opacity = 0;
      element.classList.remove('animate__animated', 'animate__fadeIn');
    }
  });
});

window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.button');
  var windowHeight = window.innerHeight;

  elements.forEach(function(element) {
    var scrollPosition = element.getBoundingClientRect().top;

    if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeIn')) {
      element.style.opacity = 1;
      element.classList.add('animate__animated', 'animate__fadeIn');
    } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeIn')) {
      element.style.opacity = 0;
      element.classList.remove('animate__animated', 'animate__fadeIn');
    }
  });
});

window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.menu');
  var windowHeight = window.innerHeight;

  elements.forEach(function(element) {
    var scrollPosition = element.getBoundingClientRect().top;

    if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeIn')) {
      element.style.opacity = 1;
      element.classList.add('animate__animated', 'animate__fadeIn');
    } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeIn')) {
      element.style.opacity = 0;
      element.classList.remove('animate__animated', 'animate__fadeIn');
    }
  });
});


window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.tegami-content');
  var windowHeight = window.innerHeight;

  elements.forEach(function(element) {
    var scrollPosition = element.getBoundingClientRect().top;

    if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeInUp')) {
      element.style.opacity = 1;
      element.classList.add('animate__animated', 'animate__fadeInUp');
    } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeInUp')) {
      element.style.opacity = 0;
      element.classList.remove('animate__animated', 'animate__fadeInUp');
    }
  });
});

window.addEventListener('scroll', function () {
  var elements = document.querySelectorAll('.popup');
  var windowHeight = window.innerHeight;

  elements.forEach(function (element) {
      var scrollPosition = element.getBoundingClientRect().top;

      if (scrollPosition < windowHeight * 0.75 && !element.classList.contains('animate__fadeInUp')) {
          element.style.opacity = 1;
          element.classList.add('animate__animated', 'animate__fadeInUp');
      } else if (scrollPosition >= windowHeight * 1.0 && element.classList.contains('animate__fadeInUp')) {
          element.style.opacity = 0;
          element.classList.remove('animate__animated', 'animate__fadeInUp');
      }
  });
});











$(document).ready(function(){
  var player;
  $('.simple__video').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: '8hxawxyPZ3c',
      events: {
        'onReady': videoPlay,
      }
    });
  })
  $('.alice').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('revPlayerAlice', {
      height: '465',
      width: '100%',
      videoId: 'FTu_ndnh-wc',
      events: {
        'onReady': videoPlay,
      },
    });
  })
  $('.Bob').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('revPlayerBob', {
      height: '465',
      width: '100%',
      videoId: 'Qvl5AcT6xKI',
      events: {
        'onReady': videoPlay,
      },
    });
  })
  
  function videoPlay(event) {
    event.target.playVideo();
  }
  
  
  
   // Настройка модального окна калькулятора
   var modalCalc = $('.modal__calc'), 
          modalBtnCalc = $('[data-toggle=modalCalc]'),
          closeBtnCalc = $('.modal__calc__close'),
          switchModal = () => {
            modalCalc.toggleClass('modal__calc--visible');
          } ;
      modalBtnCalc.on('click', switchModal );
      closeBtnCalc.on('click', switchModal);
      
      // пропадает (и почему то появляется) при нажатии на Esc
      $(document).keyup(function (e) {
          if (e.key === "Escape") {
            modalCalc.removeClass('modal__calc--visible');
          }
      });
      // Скрывает модально окно при нажатии вне него
      $(document).click(function (event) {
          if ($(event.target).is('.modal__calc')) {
            modalCalc.toggleClass('modal__calc--visible');
          }
      });
    //  модальное окно
   var modal = $('.modal'), 
          modalBtn = $('[data-toggle=modal]'),
          closeBtn = $('.modal__close'),
          switchModal = () => {
              modal.toggleClass('modal--visible');
          } ;
      modalBtn.on('click', switchModal );
      closeBtn.on('click', switchModal);
      
      // пропадает (и почему то появляется) при нажатии на Esc
      $(document).keyup(function (e) {
          if (e.key === "Escape") {
              modal.removeClass('modal--visible');
          }
      });
      // Скрывает модально окно при нажатии вне него
      $(document).click(function (event) {
          if ($(event.target).is('.modal')) {
              modal.toggleClass('modal--visible');
          }
      });
  
  
  let offset = 0;
  const sliderLine = document.querySelector('.benefit__slider-line');
  
  document.querySelector('.benefit__slider-next').addEventListener('click', function(){
    offset = offset + 320;
    if (offset > 640) {
      offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
  });
  document.querySelector('.benefit__slider-prev').addEventListener('click', function(){
    offset = offset - 320;
    if (offset < 0) {
      offset = 640;
    }
    sliderLine.style.left = -offset + 'px';
  });

  // lesson slider
  $('.lesson-slider').slick({
    arrows: true,
    dots:true,
    speed: 1000,
    infinite: false
  });
  $('.reviews-slider').slick({
    arrows: false,
    dots:false,
    speed: 1500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

function plus(){
    
    var num1, num2, num3, num4, result;
    
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
  
    num3 = document.getElementById('n3').value;
    num3 = parseInt(num3);
  
    num4 = document.getElementById('n4').value;
    num4 = parseInt(num4);
    
    result = num1 * 123 + num2 * 321 + num3 * 1000 + num4 * 1500 + ' Рублей';
    
    document.getElementById('out').innerHTML = result;
  }
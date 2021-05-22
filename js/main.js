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

function videoPlay(event) {
  event.target.playVideo();
}

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

 // Настройка модального окна
 var modal = $('.modal__calc'), 
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__calc__close'),
        switchModal = () => {
            modal.toggleClass('modal__calc--visible');
        } ;
    modalBtn.on('click', switchModal );
    closeBtn.on('click', switchModal);
    
    // пропадает (и почему то появляется) при нажатии на Esc
    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            modal.removeClass('modal__calc--visible');
        }
    });
    // Скрывает модально окно при нажатии вне него
    $(document).click(function (event) {
        if ($(event.target).is('.modal__calc')) {
            modal.toggleClass('modal__calc--visible');
        }
    });


let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
  offset = offset + 320;
  if (offset > 640) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});
document.querySelector('.slider-prev').addEventListener('click', function(){
  offset = offset - 320;
  if (offset < 0) {
    offset = 640;
  }
  sliderLine.style.left = -offset + 'px';
});
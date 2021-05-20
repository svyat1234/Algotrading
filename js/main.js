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


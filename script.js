// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ytPlayer = [];
var ytData = [
  {
    id: 'XvQ8uiA5BqE',
    area: 'ytplayer1'
  },
  {
    id: 'SB29JNfi45c',
    area: 'ytplayer2'
  },
  {
    id: '7ZY0XHQcx5k',
    area: 'ytplayer3'
  }
];

function videoController(obj, flag) {
  if (flag) {
    obj.playVideo();
  } else {
    obj.pauseVideo();
  }
}

function setPosition(obj) {
  /*
  const pos = {
    t_obj: obj.offsetTop,
    t_scr: $(document).scrollTop(),
    h_obj: obj.height(),
    h_win: window.innerHeight
  }
  if(pos.t_scr + pos.h_win > pos.t_obj && pos.t_scr - pos.h_win/3 < pos.t_obj){
    videoControl(obj, true);
  } else {
    videoControl(obj, false);
  }
  */
}

function onPlayerReady(e) {
  for (var i = 0; i < ytData.length; i++) {
    if(e.target.getIframe().id == ytData[i]['area']) {
      console.log(ytData[i]['area'] + ' のプレーヤー準備完了しました。');
      setPosition(ytPlayer[i]);
    }
  }
}

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
function onYouTubePlayerAPIReady() {
  for (var i = 0; i < ytData.length; i++) {
    ytPlayer[i] = new YT.Player(ytData[i]['area'], {
      height: '100%',
      width: '100%',
      videoId: ytData[i]['id'],
      events: {
        'onReady': onPlayerReady
      }
    });
  }
}

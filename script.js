// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ytPlayer = [];
var ytData = [
  {
    id: '-tKVN2mAKRI',
    area: 'ytplayer1'
  },
  {
    id: '-tKVN2mAKRI',
    area: 'ytplayer2'
  },
  {
    id: '-tKVN2mAKRI',
    area: 'ytplayer3'
  }
];

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

function onPlayerReady(e) {
  for (var i = 0; i < ytData.length; i++) {
    if(e.target.getIframe().id == ytData[i]['area']) {
      console.log(ytData[i]['area'] + ' のプレーヤー準備完了しました。');
    }
  }
}

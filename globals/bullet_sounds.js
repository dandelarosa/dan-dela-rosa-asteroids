const BULLET_AUDIO_PREFIX = 'bullet_';
var bulletAudioElements = [];
var currentBulletAudioIndex = 0;

(function() {
  var bulletAudioSrc = 'media/sounds/Universal/275151__bird-man__gun-shot.wav';
  for (i = 0; i < 4; i++) {
    var audio = document.createElement('audio');
    audio.id = BULLET_AUDIO_PREFIX + i;
    audio.src = bulletAudioSrc;
    bulletAudioElements.push(audio);
  }
})();

function playBulletAudio() {
  var audio = bulletAudioElements[currentBulletAudioIndex];
  audio.play();
  currentBulletAudioIndex++;
  if (currentBulletAudioIndex >= bulletAudioElements.length) {
    currentBulletAudioIndex = 0;
  }
}

var sounds = {};

function playSoundWithId(id) {
  sounds[id].play();
}

(function() {
  var files = [
    { id: 'explosion', src: 'media/sounds/Universal/147583__cactus2003__far-off-boom-without-amplify.wav' },
    { id: 'bullet', src: 'media/sounds/Universal/275151__bird-man__gun-shot.wav' },
    { id: 'reward', src: 'media/sounds/Universal/234924__gordeszkakerek__pick-up-or-found-it-secret-item.ogg' },
    { id: 'airraid', src: 'media/sounds/Clean/27788__drni__roland-juno106-lfo-to-dco-sirene.wav' },
    { id: 'siren', src: 'media/sounds/Clean/58015__guitarguy1985__yelp.wav' },
    { id: '300', src: 'media/sounds/DDA/300excerpt.mp3' },
    { id: 'good_s', src: 'media/sounds/DDA/good_s.mp3' },
    { id: 'lasttimeigave', src: 'media/sounds/DDA/lasttimeigave.mp3' },
    { id: 'lol', src: 'media/sounds/DDA/olololol.mp3' },
    { id: 'thunderstruck', src: 'media/sounds/DDA/Thunderstruck.mp3' },
    { id: 'yousinme', src: 'media/sounds/DDA/yousinme.mp3' },
    { id: 'ah_s', src: 'media/sounds/DDA/death/ah_s.mp3' },
    { id: 'bobsaget', src: 'media/sounds/DDA/death/bobsaget.mp3' },
    { id: 'fffuuuu', src: 'media/sounds/DDA/death/FFFUUUU.mp3' },
    { id: 'oh_s', src: 'media/sounds/DDA/death/oh_s.mp3' },
    { id: 'oh_s2', src: 'media/sounds/DDA/death/oh_s2.mp3' },
    { id: 'my_s', src: 'media/sounds/DDA/death/THATSMY.mp3' },
    { id: 'was_that', src: 'media/sounds/DDA/death/thehwasthat.mp3' },
    { id: 'bull', src: 'media/sounds/DDA/death/thisisbull.mp3' },
    { id: 'balls', src: 'media/sounds/DDA/kill/balls.mp3' },
    { id: 'b1', src: 'media/sounds/DDA/kill/b1.mp3' },
    { id: 'b2', src: 'media/sounds/DDA/kill/b2.mp3' },
    { id: 'bs', src: 'media/sounds/DDA/kill/bs.mp3' },
    { id: 'd', src: 'media/sounds/DDA/kill/d.mp3' },
    { id: 'f', src: 'media/sounds/DDA/kill/f.mp3' },
    { id: 'fu', src: 'media/sounds/DDA/kill/fu.mp3' },
    { id: 'hs', src: 'media/sounds/DDA/kill/hs.mp3' },
    { id: 'fs', src: 'media/sounds/DDA/kill/motherlovers.mp3' },
    { id: 'p', src: 'media/sounds/DDA/kill/p.mp3' },
    { id: '200lbs', src: 'media/sounds/DDA/ufo/200lbs.mp3' },
    { id: 'cant_do', src: 'media/sounds/DDA/ufo/cantdo.mp3' },
    { id: 'hes_an', src: 'media/sounds/DDA/ufo/hesan.mp3' },
    { id: 'jollypiratedonut', src: 'media/sounds/DDA/ufo/jollypiratedonut.mp3' },
    { id: 'walkamile', src: 'media/sounds/DDA/ufo/walkamile.mp3' },
  ];

  files.forEach(function(file) {
    var audio = document.createElement('audio');
    audio.id = file.id;
    audio.src = file.src;
    sounds[file.id] = audio;
  });
})();

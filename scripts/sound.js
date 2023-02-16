const PageTurnSounds = [
    new Audio('sounds/sfx/page-flip-10.mp3'),
    new Audio('sounds/sfx/page-flip-12.mp3')
]
const playlist = [
    'sounds/music/Hope.mp3',
]
let playlistAudio = new Audio(playlist[0]);
let i = 0;


playlistAudio.addEventListener('ended', function () {
    i = ++i < playlist.length ? i : 0;
    playlistAudio.src = playlist[i];
    playlistAudio.play();
}, true);

const ambient = new Audio('sounds/sfx/ambient-bg.mp3');
ambient.loop = true;

function PlayPageTurn(){
    
    let i = Math.floor(Math.random() * 10) % 2;
    PageTurnSounds[i].currentTime = 0;
    PageTurnSounds[i].play();
    // turn1.play();
}

function PlayPlaylist()
{
    playlistAudio.src = playlist[0];
    playlistAudio.play();
}

function PlayBackground(){
    ambient.play();
    PlayPlaylist();
}
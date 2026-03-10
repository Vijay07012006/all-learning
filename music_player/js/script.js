// alert('hello');
let audio = document.querySelector('audio');
let img = document.querySelector('.img img');
let progress = document.querySelector('#progress');


let backward = document.querySelector('.icon .fa-backward');
let ply = document.querySelector('.icon .fa-play');
let pause = document.querySelector('.icon .fa-pause');
let forward = document.querySelector('.icon .fa-forward');

let ar =
    [
        {
            "title": "Ishq",
            "path": "./music/song1.mp3",
            "image": "./images/ishq.jpeg"
        },
        {
            "title": "Pahle bhi",
            "path": "./music/song2.mp3",
            "image": "./images/pehle.jpeg"
        },
        {
            "title": "soulmate",
            "path": "./music/song3.mp3",
            "image": "./images/soulmate.jpeg"
        }
    ];

ply.onclick = () => {
    audio.play();
    document.querySelector('.icon .fa-play').style.display = "none";
    document.querySelector('.icon .fa-pause').style.display = "block";
}
pause.onclick = () => {
    audio.pause();
    document.querySelector('.icon .fa-play').style.display = "block";
    document.querySelector('.icon .fa-pause').style.display = "none";
}
let i = 0;
forward.onclick = () => {
    i = (i + 1) % ar.length;
    audio.src = ar[i].path;
    img.src = ar[i].image;
    audio.play();
    document.querySelector('.icon .fa-play').style.display = "none";
    document.querySelector('.icon .fa-pause').style.display = "block";
    document.getElementById('title').innerHTML = ar[i].title;

}
backward.onclick = () => {
    i = (i - 1 + ar.length) % ar.length;
    audio.src = ar[i].path;
    img.src = ar[i].image;
    audio.play();
    document.querySelector('.icon .fa-play').style.display = "none";
    document.querySelector('.icon .fa-pause').style.display = "block";
}
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        let percent = (audio.currentTime / audio.duration) * 100;
        progress.value = percent;
    }
});

progress.addEventListener('input', () => {
    if (audio.duration) {
        let newTime = (progress.value / 100) * audio.duration;
        audio.currentTime = newTime;
    }
});


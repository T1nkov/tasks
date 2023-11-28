/* 9. Добавить переключение нескольких песен */


const play = document.querySelector('.play');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
const audio = document.querySelector('audio');
const name_artist = document.querySelector('h1');
const audio_name = document.querySelector('h2');
const img = document.querySelector('.img')
let flag = false;
const audios =
    [{ path: "./assets/song1.mp3", artist: 'Sad Song', song: 'song1', img: './assets/img1.png' },
    { path: "./assets/song2.mp3", artist: 'LSP', song: 'song2', img: './assets/img2.png' },
    { path: "./assets/song3.mp3", artist: 'Santa Klaus', song: 'song3', img: './assets/img3.png' }];
let current_index_song = 0


play.addEventListener('click', () => {
    if (!flag) {
        audio.play();
        play.innerHTML = 'PAUSE';
        name_artist.innerHTML = audios[current_index_song].artist
        audio_name.innerHTML = audios[current_index_song].song
        flag = true
    } else {
        audio.pause();
        flag = false;
        play.innerHTML = 'PLAY';

    }
    img.style = `background-image: url(${audios[current_index_song].img})`
})

next.addEventListener('click', () => {
    if (audios.length - 1 === current_index_song) return;
    current_index_song++;
    audio.src = audios[current_index_song].path
    play.innerHTML = 'PAUSE';
    name_artist.innerHTML = audios[current_index_song].artist
    audio_name.innerHTML = audios[current_index_song].song
    img.style = `background-image: url(${audios[current_index_song].img})`
    audio.play();
    flag = true
})

previous.addEventListener('click', () => {
    if (0 == current_index_song) return;
    current_index_song--
    audio.src = audios[current_index_song].path
    play.innerHTML = 'PAUSE';
    name_artist.innerHTML = audios[current_index_song].artist
    audio_name.innerHTML = audios[current_index_song].song
    img.style = `background-image: url(${audios[current_index_song].img})`
    audio.play();
    flag = true
})


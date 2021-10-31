// В HTML есть <iframe> с видео для Vimeo плеера. Напиши скрипт который будет сохранять текущее время воспроизведения видео в локальное хранилище и, при перезагрузке страницы, продолжать воспроизводить видео с этого времени.

// Выполняй это задание в файлах 02-video.html и 02-video.js. Разбей его на несколько подзадач:
// 1. Ознакомься с документацией библиотеки Vimeo плеера.
// 2. Добавь библиотеку как зависимость проекта через npm.
// 3. Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
// 4. Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
// 5. Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
// 6. При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
// 7. Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframePlayer = document.querySelector('iframe#vimeo-player');
const player = new Player(iframePlayer);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(savePlayTime, 1000));

function savePlayTime({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}

if (LOCALSTORAGE_KEY) {
  player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
}

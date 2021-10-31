import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:
// 1. Добавь библиотеку SimpleLightbox как зависимость проекта используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).
// 2 .Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того, что библиотека была установлена через npm (синтаксис import/export).
// Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.

const galleryContainer = document.querySelector('.gallery');

addGalleryMarkup(galleryItems, galleryContainer);

function addGalleryMarkup(incomingElements, markupContainer) {
  let galleryMarkup = '';

  incomingElements.forEach(({ original, preview, description }) => {
    galleryMarkup += `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  });

  markupContainer.insertAdjacentHTML('afterbegin', galleryMarkup);
}

new SimpleLightbox('.some-element a', {});

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export default function galleryItemTpl(arr) {
  return arr
    .map(el => {
      return `<li class="gallery-card" href="${el.largeImageURL}">
  <img
    class="gallery-card__img"
    src="${el.webformatURL}"
    alt="${el.tags}"
    loading="lazy"
    id="${el.id}"
    data-src="${el.largeImageURL}"
  />

  <div class="info">
    <div class="info__thumb">
      <p class="info-item">
        <span>${el.likes}</span>
        <span class="material-icons">favorite</span>
      </p>
      <p class="info-item">
        <span>${el.views}</span>
        <span class="material-icons">visibility</span>
      </p>
      <p class="info-item">
        <span>${el.comments}</span>
        <span class="material-icons">textsms</span>
      </p>
      <p class="info-item">
        <span>${el.downloads}</span>
        <span class="material-icons">cloud_download</span>
      </p>
    </div>

    <div class="blur" style="background-image: url(${el.webformatURL})"></div>
  </div>
</li>`;
    })
    .join('');
}

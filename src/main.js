import axios from 'axios';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import refs from './js/refs.js';
import photoFinder from './js/fetchApi.js';
import galleryItemTpl from './js/galleryMarkup.js';

refs.searchForm.addEventListener('submit', onSearch);
refs.searchForm.addEventListener('input', e => {
  refs.resetBtn.disabled = false;
  refs.resetBtn.addEventListener('click', onReset, { once: true });
});

function onSearch(e) {
  e.preventDefault();
  refs.loading.classList.remove('is-hidden');

  const value = e.currentTarget.elements.searchQuery.value.trim();
  if (value === '') {
    onServerResponse('error', 'Please, enter valid query!');
    return;
  }

  try {
    refs.resetBtn.disabled = false;
    refs.resetBtn.addEventListener('click', onReset, { once: true });
    refs.message.classList.add('is-hidden');
    onNewFetch(value);
    fetchAndRender();
  } catch (err) {
    onServerResponse('error', 'Please, enter valid query!');
  }
}

function onServerResponse(cb, message) {
  refs.loading.classList.add('is-hidden');
  iziToast[cb]({ message, position: 'topRight' });
}

function onMarkupRender(list) {
  refs.gallery.insertAdjacentHTML('beforeend', list);
}

async function fetchAndRender() {
  refs.loading.classList.remove('is-hidden');

  await axios(photoFinder.getFetchUrl()).then(({ data }) => {
    if (data.totalHits === 0) {
      onServerResponse('warning', `Sorry, we couldn't find anything for you(`);
      onReset();
      return;
    }

    if (data.hits.length < photoFinder.perPage) {
      onServerResponse(
        'info',
        `This was all we had for you, try something else, please`
      );
      refs.loadMoreBtn.classList.add('is-hidden');
      refs.loadMoreBtn.removeEventListener('click', fetchAndRender);
      try {
        onMarkupRender(galleryItemTpl(data.hits));
        smoothScrollingTo(String(data.hits[0].id));
        return;
      } catch (err) {
        onServerResponse('error', 'Please, enter valid query!');
      }
    }

    if (photoFinder.page === 1) {
      onServerResponse('success', `Hooray! We found ${data.totalHits} images.`);
    }

    onMarkupRender(galleryItemTpl(data.hits));
    smoothScrollingTo(String(data.hits[0].id));
    photoFinder.setNextPage();
    refs.loadMoreBtn.classList.remove('is-hidden');
    refs.loadMoreBtn.addEventListener('click', fetchAndRender);
  });
}

function onNewFetch(value = '') {
  photoFinder.searcQuery = value;
  photoFinder.resetPage();
  refs.gallery.innerHTML = '';

  refs.loadMoreBtn.classList.add('is-hidden');
  refs.loadMoreBtn.removeEventListener('click', fetchAndRender);
}

function onReset() {
  refs.searchForm.reset();
  onNewFetch();
  refs.message.classList.remove('is-hidden');
  refs.resetBtn.disabled = true;
}

function smoothScrollingTo(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({
    alignToTop: true,
    behavior: 'smooth',
    block: 'center',
  });
}

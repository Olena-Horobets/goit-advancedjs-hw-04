class SearchAPIData {
  #BASE_URL;
  #API_KEY;

  constructor({ url, key, perPage }) {
    this.#BASE_URL = url;
    this.#API_KEY = key;
    this._searcQuery = '';
    this.page = 1;
    this.perPage = perPage;
  }

  set searcQuery(value) {
    this._searcQuery = value;
  }

  setNextPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  getBasicFetchUrl() {
    return `${this.#BASE_URL}?key=${this.#API_KEY}&q=${this._searcQuery}&page=${
      this.page
    }`;
  }
}

class SearchPhotoData extends SearchAPIData {
  constructor({ url, key, perPage, imageType, orientation, safesearch }) {
    super({ url, key, perPage });
    this.imageType = imageType;
    this.orientation = orientation;
    this.safesearch = safesearch;
  }

  getFetchUrl() {
    const url = `${this.getBasicFetchUrl()}&per_page=${
      this.perPage
    }&image_type=${this.imageType}&orientation=${this.orientation}&safesearch=${
      this.safesearch
    }`;
    return url;
  }
}

const photoFinderOptions = {
  url: 'https://pixabay.com/api/',
  key: '22936688-6b3396d854cca2c3f8d0c7d41',
  perPage: 40,
  imageType: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

const photoFinder = new SearchPhotoData({ ...photoFinderOptions });
export default photoFinder;

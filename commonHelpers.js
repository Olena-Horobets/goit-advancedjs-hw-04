var y=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var m=(e,t,r)=>(y(e,t,"read from private field"),r?r.call(e):t.get(e)),p=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},g=(e,t,r,a)=>(y(e,t,"write to private field"),a?a.call(e,r):t.set(e,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const s={body:document.querySelector("body"),searchForm:document.querySelector("#search-form"),resetBtn:document.querySelector('[data-action="reset"]'),loadMoreBtn:document.querySelector('[data-action="load-more"]'),gallery:document.querySelector("#gallery"),message:document.querySelector(".reqest-message")};var d,u;class P{constructor({url:t,key:r,perPage:a}){p(this,d,void 0);p(this,u,void 0);g(this,d,t),g(this,u,r),this._searcQuery="",this.page=1,this.perPage=a}set searcQuery(t){this._searcQuery=t}setNextPage(){this.page+=1}resetPage(){this.page=1}getBasicFetchUrl(){return`${m(this,d)}?key=${m(this,u)}&q=${this._searcQuery}&page=${this.page}`}}d=new WeakMap,u=new WeakMap;class B extends P{constructor({url:t,key:r,perPage:a,imageType:n,orientation:o,safesearch:l}){super({url:t,key:r,perPage:a}),this.imageType=n,this.orientation=o,this.safesearch=l}getFetchUrl(){return`${this.getBasicFetchUrl()}&per_page=${this.perPage}&image_type=${this.imageType}&orientation=${this.orientation}&safesearch=${this.safesearch}`}}const S={url:"https://pixabay.com/api/",key:"22936688-6b3396d854cca2c3f8d0c7d41",perPage:40,imageType:"photo",orientation:"horizontal",safesearch:!0},i=new B({...S});function v(e){return e.map(t=>`<li class="gallery-card" href="${t.largeImageURL}">
  <img
    class="gallery-card__img"
    src="${t.webformatURL}"
    alt="${t.tags}"
    loading="lazy"
    id="${t.id}"
    data-src="${t.largeImageURL}"
  />

  <div class="info">
    <div class="info__thumb">
      <p class="info-item">
        <span>${t.likes}</span>
        <span class="material-icons">favorite</span>
      </p>
      <p class="info-item">
        <span>${t.views}</span>
        <span class="material-icons">visibility</span>
      </p>
      <p class="info-item">
        <span>${t.comments}</span>
        <span class="material-icons">textsms</span>
      </p>
      <p class="info-item">
        <span>${t.downloads}</span>
        <span class="material-icons">cloud_download</span>
      </p>
    </div>

    <div class="blur" style="background-image: url(${t.webformatURL})"></div>
  </div>
</li>`).join("")}s.searchForm.addEventListener("submit",q);s.searchForm.addEventListener("input",e=>{s.resetBtn.disabled=!1,s.resetBtn.addEventListener("click",f,{once:!0})});function q(e){e.preventDefault(),console.log("loading");const t=e.currentTarget.elements.searchQuery.value.trim();if(t===""){c("Please, enter valid query!");return}try{s.resetBtn.disabled=!1,s.resetBtn.addEventListener("click",f,{once:!0}),s.message.classList.add("is-hidden"),$(t),h()}catch{c("Please, enter valid query!")}}function c(e){console.log(e)}function L(e){s.gallery.insertAdjacentHTML("beforeend",e)}async function h(){console.log("loading"),await fetch(i.getFetchUrl()).then(e=>e.json()).then(e=>{if(e.totalHits===0){c("Sorry, we couldn't find anything for you("),f();return}if(e.hits.length<i.perPage){c("This was all we had for you, try something else, please"),s.loadMoreBtn.classList.add("is-hidden"),s.loadMoreBtn.removeEventListener("click",h);try{L(v(e.hits)),b(String(e.hits[0].id));return}catch{c("Please, enter valid query!")}}i.page===1&&c(`Hooray! We found ${e.totalHits} images.`),L(v(e.hits)),b(String(e.hits[0].id)),i.setNextPage(),console.log("loading remove"),s.loadMoreBtn.classList.remove("is-hidden"),s.loadMoreBtn.addEventListener("click",h)})}function $(e=""){i.searcQuery=e,i.resetPage(),s.gallery.innerHTML="",s.loadMoreBtn.classList.add("is-hidden"),s.loadMoreBtn.removeEventListener("click",h)}function f(){s.searchForm.elements.query.value="",$(),s.message.classList.remove("is-hidden"),s.resetBtn.disabled=!0}function b(e){document.getElementById(e).scrollIntoView({alignToTop:!0,behavior:"smooth",block:"center"})}
//# sourceMappingURL=commonHelpers.js.map

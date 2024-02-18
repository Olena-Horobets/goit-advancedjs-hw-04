var y=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var p=(t,e,s)=>(y(t,e,"read from private field"),s?s.call(t):e.get(t)),m=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},g=(t,e,s,i)=>(y(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s);import{i as P}from"./assets/vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const r={body:document.querySelector("body"),searchForm:document.querySelector("#search-form"),resetBtn:document.querySelector('[data-action="reset"]'),loadMoreBtn:document.querySelector('[data-action="load-more"]'),gallery:document.querySelector("#gallery"),message:document.querySelector(".reqest-message")};var d,u;class B{constructor({url:e,key:s,perPage:i}){m(this,d,void 0);m(this,u,void 0);g(this,d,e),g(this,u,s),this._searcQuery="",this.page=1,this.perPage=i}set searcQuery(e){this._searcQuery=e}setNextPage(){this.page+=1}resetPage(){this.page=1}getBasicFetchUrl(){return`${p(this,d)}?key=${p(this,u)}&q=${this._searcQuery}&page=${this.page}`}}d=new WeakMap,u=new WeakMap;class S extends B{constructor({url:e,key:s,perPage:i,imageType:n,orientation:o,safesearch:l}){super({url:e,key:s,perPage:i}),this.imageType=n,this.orientation=o,this.safesearch=l}getFetchUrl(){return`${this.getBasicFetchUrl()}&per_page=${this.perPage}&image_type=${this.imageType}&orientation=${this.orientation}&safesearch=${this.safesearch}`}}const w={url:"https://pixabay.com/api/",key:"22936688-6b3396d854cca2c3f8d0c7d41",perPage:40,imageType:"photo",orientation:"horizontal",safesearch:!0},a=new S({...w});function v(t){return t.map(e=>`<li class="gallery-card" href="${e.largeImageURL}">
  <img
    class="gallery-card__img"
    src="${e.webformatURL}"
    alt="${e.tags}"
    loading="lazy"
    id="${e.id}"
    data-src="${e.largeImageURL}"
  />

  <div class="info">
    <div class="info__thumb">
      <p class="info-item">
        <span>${e.likes}</span>
        <span class="material-icons">favorite</span>
      </p>
      <p class="info-item">
        <span>${e.views}</span>
        <span class="material-icons">visibility</span>
      </p>
      <p class="info-item">
        <span>${e.comments}</span>
        <span class="material-icons">textsms</span>
      </p>
      <p class="info-item">
        <span>${e.downloads}</span>
        <span class="material-icons">cloud_download</span>
      </p>
    </div>

    <div class="blur" style="background-image: url(${e.webformatURL})"></div>
  </div>
</li>`).join("")}r.searchForm.addEventListener("submit",q);r.searchForm.addEventListener("input",t=>{r.resetBtn.disabled=!1,r.resetBtn.addEventListener("click",f,{once:!0})});function q(t){t.preventDefault(),console.log("loading");const e=t.currentTarget.elements.searchQuery.value.trim();if(e===""){c("error","Please, enter valid query!");return}try{r.resetBtn.disabled=!1,r.resetBtn.addEventListener("click",f,{once:!0}),r.message.classList.add("is-hidden"),$(e),h()}catch{c("error","Please, enter valid query!")}}function c(t,e){P[t]({message:e,position:"topRight"})}function L(t){r.gallery.insertAdjacentHTML("beforeend",t)}async function h(){console.log("loading"),await fetch(a.getFetchUrl()).then(t=>t.json()).then(t=>{if(t.totalHits===0){c("warning","Sorry, we couldn't find anything for you("),f();return}if(t.hits.length<a.perPage){c("info","This was all we had for you, try something else, please"),r.loadMoreBtn.classList.add("is-hidden"),r.loadMoreBtn.removeEventListener("click",h);try{L(v(t.hits)),b(String(t.hits[0].id));return}catch{c("error","Please, enter valid query!")}}a.page===1&&c("success",`Hooray! We found ${t.totalHits} images.`),L(v(t.hits)),b(String(t.hits[0].id)),a.setNextPage(),console.log("loading remove"),r.loadMoreBtn.classList.remove("is-hidden"),r.loadMoreBtn.addEventListener("click",h)})}function $(t=""){a.searcQuery=t,a.resetPage(),r.gallery.innerHTML="",r.loadMoreBtn.classList.add("is-hidden"),r.loadMoreBtn.removeEventListener("click",h)}function f(){r.searchForm.elements.searchQuery.value="",$(),r.message.classList.remove("is-hidden"),r.resetBtn.disabled=!0}function b(t){document.getElementById(t).scrollIntoView({alignToTop:!0,behavior:"smooth",block:"center"})}
//# sourceMappingURL=commonHelpers.js.map

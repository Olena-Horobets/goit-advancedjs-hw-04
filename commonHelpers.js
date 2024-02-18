var y=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var m=(t,e,r)=>(y(t,e,"read from private field"),r?r.call(t):e.get(t)),p=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},g=(t,e,r,n)=>(y(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r);import{i as P,a as B}from"./assets/vendor-8cce9181.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();const s={body:document.querySelector("body"),searchForm:document.querySelector("#search-form"),resetBtn:document.querySelector('[data-action="reset"]'),loadMoreBtn:document.querySelector('[data-action="load-more"]'),gallery:document.querySelector("#gallery"),message:document.querySelector(".reqest-message"),loading:document.querySelector(".loading-message")};var d,u;class S{constructor({url:e,key:r,perPage:n}){p(this,d,void 0);p(this,u,void 0);g(this,d,e),g(this,u,r),this._searcQuery="",this.page=1,this.perPage=n}set searcQuery(e){this._searcQuery=e}setNextPage(){this.page+=1}resetPage(){this.page=1}getBasicFetchUrl(){return`${m(this,d)}?key=${m(this,u)}&q=${this._searcQuery}&page=${this.page}`}}d=new WeakMap,u=new WeakMap;class w extends S{constructor({url:e,key:r,perPage:n,imageType:i,orientation:a,safesearch:l}){super({url:e,key:r,perPage:n}),this.imageType=i,this.orientation=a,this.safesearch=l}getFetchUrl(){return`${this.getBasicFetchUrl()}&per_page=${this.perPage}&image_type=${this.imageType}&orientation=${this.orientation}&safesearch=${this.safesearch}`}}const _={url:"https://pixabay.com/api/",key:"22936688-6b3396d854cca2c3f8d0c7d41",perPage:40,imageType:"photo",orientation:"horizontal",safesearch:!0},o=new w({..._});function v(t){return t.map(e=>`<li class="gallery-card">
      <a href="${e.largeImageURL} class="gallery__link">
        <img
          class="gallery-card__img"
          src="${e.webformatURL}"
          alt="${e.tags}"
          loading="lazy"
          id="${e.id}"
          data-src="${e.largeImageURL}"
        />
      </a>

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
  
</li>`).join("")}s.searchForm.addEventListener("submit",q);s.searchForm.addEventListener("input",t=>{s.resetBtn.disabled=!1,s.resetBtn.addEventListener("click",f,{once:!0})});function q(t){t.preventDefault(),s.loading.classList.remove("is-hidden");const e=t.currentTarget.elements.searchQuery.value.trim();if(e===""){c("error","Please, enter valid query!");return}try{s.resetBtn.disabled=!1,s.resetBtn.addEventListener("click",f,{once:!0}),s.message.classList.add("is-hidden"),$(e),h()}catch{c("error","Please, enter valid query!")}}function c(t,e){s.loading.classList.add("is-hidden"),P[t]({message:e,position:"topRight"})}function L(t){s.gallery.insertAdjacentHTML("beforeend",t)}async function h(){s.loading.classList.remove("is-hidden"),await B(o.getFetchUrl()).then(({data:t})=>{if(t.totalHits===0){c("warning","Sorry, we couldn't find anything for you("),f();return}if(t.hits.length<o.perPage){c("info","This was all we had for you, try something else, please"),s.loadMoreBtn.classList.add("is-hidden"),s.loadMoreBtn.removeEventListener("click",h);try{L(v(t.hits)),b(String(t.hits[0].id));return}catch{c("error","Please, enter valid query!")}}o.page===1&&c("success",`Hooray! We found ${t.totalHits} images.`),L(v(t.hits)),b(String(t.hits[0].id)),o.setNextPage(),s.loadMoreBtn.classList.remove("is-hidden"),s.loadMoreBtn.addEventListener("click",h)})}function $(t=""){o.searcQuery=t,o.resetPage(),s.gallery.innerHTML="",s.loadMoreBtn.classList.add("is-hidden"),s.loadMoreBtn.removeEventListener("click",h)}function f(){s.searchForm.reset(),$(),s.message.classList.remove("is-hidden"),s.resetBtn.disabled=!0}function b(t){document.getElementById(t).scrollIntoView({alignToTop:!0,behavior:"smooth",block:"center"})}
//# sourceMappingURL=commonHelpers.js.map

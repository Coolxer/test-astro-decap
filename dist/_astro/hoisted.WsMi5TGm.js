import"./hoisted.BeuNfMPY.js";class i extends HTMLElement{constructor(){super(),this.isManualToggle=!1,this.breadcrumbs=null,this.mainBemClass=null,this.totalWidth=0,this.mainBemClass=this.dataset.mainBemClass||null;const t=this.dataset.id;if(!("truncated"in this.dataset)||!t)return;this.breadcrumbs=document.getElementById(t),this.breadcrumbs?.querySelectorAll(`.${this.mainBemClass}__crumb`)?.forEach(s=>{this.totalWidth+=s.offsetWidth});const e=new ResizeObserver(s=>{for(const r of s)this.checkOverflow(r.target.clientWidth)});this.breadcrumbs&&e.observe(this.breadcrumbs)}connectedCallback(){this.showHiddenCrumbs()}toggleTruncated(t){t?this.breadcrumbs?.classList.add("is-truncated"):this.breadcrumbs?.classList.remove("is-truncated")}showHiddenCrumbs(){this.breadcrumbs?.querySelector(`.${this.mainBemClass}__truncated-button`)?.addEventListener("click",()=>{this.breadcrumbs?.classList.remove("is-truncated"),this.isManualToggle=!0})}checkOverflow(t){this.totalWidth>t&&!this.isManualToggle?this.toggleTruncated(!0):(this.toggleTruncated(!1),this.isManualToggle=!1)}}customElements.define("astro-breadcrumbs",i);

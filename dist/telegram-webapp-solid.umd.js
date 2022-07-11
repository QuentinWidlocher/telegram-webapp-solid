(function(c,d){typeof exports=="object"&&typeof module<"u"?d(exports):typeof define=="function"&&define.amd?define(["exports"],d):(c=typeof globalThis<"u"?globalThis:c||self,d(c["telegram-webapp-solid"]={}))})(this,function(c){"use strict";const d={};function re(e){d.context=e}const ce=(e,t)=>e===t,fe=Symbol("solid-proxy"),_={equals:ce};let F=G;const T={},m=1,N=2,ue={owned:null,cleanups:null,context:null,owner:null};var g=null;let C=null,f=null,x=null,u=null,w=null,$=0;function W(e,t){t=t?Object.assign({},_,t):_;const n={value:e,observers:null,observerSlots:null,pending:T,comparator:t.equals||void 0},i=s=>(typeof s=="function"&&(s=s(n.pending!==T?n.pending:n.value)),M(n,s));return[de.bind(n),i]}function y(e,t,n){const i=X(e,t,!1,m);B(i)}function k(e,t,n){F=pe;const i=X(e,t,!1,m);i.user=!0,w?w.push(i):B(i)}function ae(e){if(x)return e();let t;const n=x=[];try{t=e()}finally{x=null}return R(()=>{for(let i=0;i<n.length;i+=1){const s=n[i];if(s.pending!==T){const o=s.pending;s.pending=T,M(s,o)}}},!1),t}function j(e){let t,n=f;return f=null,t=e(),f=n,t}function K(e){k(()=>j(e))}function L(e){return g===null||(g.cleanups===null?g.cleanups=[e]:g.cleanups.push(e)),e}function de(){const e=C;if(this.sources&&(this.state||e)){const t=u;u=null,this.state===m||e?B(this):P(this),u=t}if(f){const t=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(t)):(f.sources=[this],f.sourceSlots=[t]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function M(e,t,n){if(x)return e.pending===T&&x.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let i=!1;return e.value=t,e.observers&&e.observers.length&&R(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s];i&&C.disposed.has(o),(i&&!o.tState||!i&&!o.state)&&(o.pure?u.push(o):w.push(o),o.observers&&Q(o)),i||(o.state=m)}if(u.length>1e6)throw u=[],new Error},!1),t}function B(e){if(!e.fn)return;Y(e);const t=g,n=f,i=$;f=g=e,he(e,e.value,i),f=n,g=t}function he(e,t,n){let i;try{i=e.fn(t)}catch(s){q(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?M(e,i):e.value=i,e.updatedAt=n)}function X(e,t,n,i=m,s){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:g,context:null,pure:n};return g===null||g!==ue&&(g.owned?g.owned.push(o):g.owned=[o]),o}function E(e){const t=C;if(e.state===0||t)return;if(e.state===N||t)return P(e);if(e.suspense&&j(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<$);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===m||t)B(e);else if(e.state===N||t){const s=u;u=null,P(e,n[0]),u=s}}function R(e,t){if(u)return e();let n=!1;t||(u=[]),w?n=!0:w=[],$++;try{const i=e();return ge(n),i}catch(i){q(i)}finally{u=null,n||(w=null)}}function ge(e){u&&(G(u),u=null),!e&&(w.length?ae(()=>{F(w),w=null}):w=null)}function G(e){for(let t=0;t<e.length;t++)E(e[t])}function pe(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:E(s)}d.context&&re();const i=e.length;for(t=0;t<n;t++)E(e[t]);for(t=i;t<e.length;t++)E(e[t])}function P(e,t){const n=C;e.state=0;for(let i=0;i<e.sources.length;i+=1){const s=e.sources[i];s.sources&&(s.state===m||n?s!==t&&E(s):(s.state===N||n)&&P(s,t))}}function Q(e){const t=C;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=N,i.pure?u.push(i):w.push(i),i.observers&&Q(i))}}function Y(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();i<s.length&&(o.sourceSlots[l]=i,s[i]=o,n.observerSlots[i]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)Y(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function q(e){throw e}function H(){return!0}const we={get(e,t,n){return t===fe?n:e.get(t)},has(e,t){return e.has(t)},set:H,deleteProperty:H,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:H,deleteProperty:H}},ownKeys(e){return e.keys()}};function O(e){return(e=typeof e=="function"?e():e)==null?{}:e}function J(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const i=O(e[n])[t];if(i!==void 0)return i}},has(t){for(let n=e.length-1;n>=0;n--)if(t in O(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(O(e[n])));return[...new Set(t)]}},we)}function me(e){return K(()=>{window.Telegram.WebApp.BackButton.show()}),L(()=>{window.Telegram.WebApp.BackButton.hide()}),k(function(){e.onClick?window.Telegram.WebApp.BackButton.onClick(e.onClick):window.Telegram.WebApp.BackButton.onClick(void 0)}),null}function v(e){return()=>window.Telegram.WebApp.HapticFeedback.impactOccurred(e)}function Z(){return()=>window.Telegram.WebApp.HapticFeedback.selectionChanged()}function be(e){const t=window.Telegram.WebApp.MainButton.text,n=v(e.hapticForce);return K(()=>{window.Telegram.WebApp.MainButton.show()}),L(()=>{window.Telegram.WebApp.MainButton.hide()}),k(function(){e.text?window.Telegram.WebApp.MainButton.setText(e.text):window.Telegram.WebApp.MainButton.setText(t)}),k(function(){e.onClick?window.Telegram.WebApp.MainButton.onClick(()=>{e.hapticForce&&n&&n(),e.onClick()}):window.Telegram.WebApp.MainButton.onClick(void 0)}),null}const ye=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Se=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ye]),Ae=new Set(["innerHTML","textContent","innerText","children"]),Te={className:"class",htmlFor:"for"},z={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},Ce=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),xe={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ee(e,t,n){let i=n.length,s=t.length,o=i,l=0,r=0,a=t[s-1].nextSibling,h=null;for(;l<s||r<o;){if(t[l]===n[r]){l++,r++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const p=o<i?r?n[r-1].nextSibling:n[o-r]:a;for(;r<o;)e.insertBefore(n[r++],p)}else if(o===r)for(;l<s;)(!h||!h.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[r]===t[s-1]){const p=t[--s].nextSibling;e.insertBefore(n[r++],t[l++].nextSibling),e.insertBefore(n[--o],p),t[s]=n[o]}else{if(!h){h=new Map;let b=r;for(;b<o;)h.set(n[b],b++)}const p=h.get(t[l]);if(p!=null)if(r<p&&p<o){let b=l,V=1,oe;for(;++b<s&&b<o&&!((oe=h.get(t[b]))==null||oe!==p+V);)V++;if(V>p-r){const lt=t[l];for(;r<p;)e.insertBefore(n[r++],lt)}else e.replaceChild(n[r++],t[l++])}else l++;else t[l++].remove()}}}const ee="_$DX_DELEGATE";function D(e,t,n){const i=document.createElement("template");i.innerHTML=e;let s=i.content.firstChild;return n&&(s=s.firstChild),s}function Ne(e,t=window.document){const n=t[ee]||(t[ee]=new Set);for(let i=0,s=e.length;i<s;i++){const o=e[i];n.has(o)||(n.add(o),t.addEventListener(o,Oe))}}function We(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ke(e,t,n,i){i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i)}function Be(e,t){t==null?e.removeAttribute("class"):e.className=t}function Pe(e,t,n,i){i?Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n:Array.isArray(n)?e.addEventListener(t,s=>n[0](n[1],s)):e.addEventListener(t,n)}function He(e,t,n={}){const i=Object.keys(t||{}),s=Object.keys(n);let o,l;for(o=0,l=s.length;o<l;o++){const r=s[o];!r||r==="undefined"||t[r]||(ne(e,r,!1),delete n[r])}for(o=0,l=i.length;o<l;o++){const r=i[o],a=!!t[r];!r||r==="undefined"||n[r]===a||!a||(ne(e,r,!0),n[r]=a)}return n}function $e(e,t,n={}){const i=e.style,s=typeof n=="string";if(t==null&&s||typeof t=="string")return i.cssText=t;s&&(i.cssText=void 0,n={}),t||(t={});let o,l;for(l in n)t[l]==null&&i.removeProperty(l),delete n[l];for(l in t)o=t[l],o!==n[l]&&(i.setProperty(l,o),n[l]=o);return n}function I(e,t,n,i){typeof t=="function"?y(s=>se(e,t(),s,n,i)):se(e,t,void 0,n,i)}function te(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return S(e,t,i,n);y(s=>S(e,t(),s,n),i)}function Le(e,t,n,i,s={},o=!1){t||(t={});for(const l in s)if(!(l in t)){if(l==="children")continue;ie(e,l,null,s[l],n,o)}for(const l in t){if(l==="children"){i||S(e,t.children);continue}const r=t[l];s[l]=ie(e,l,r,s[l],n,o)}}function Me(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ne(e,t,n){const i=t.trim().split(/\s+/);for(let s=0,o=i.length;s<o;s++)e.classList.toggle(i[s],n)}function ie(e,t,n,i,s,o){let l,r,a;if(t==="style")return $e(e,n,i);if(t==="classList")return He(e,n,i);if(n===i)return i;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:")e.addEventListener(t.slice(3),n);else if(t.slice(0,10)==="oncapture:")e.addEventListener(t.slice(10),n,!0);else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),p=Ce.has(h);Pe(e,h,n,p),p&&Ne([h])}else if((a=Ae.has(t))||!s&&(z[t]||(r=Se.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?Be(e,n):l&&!r&&!a?e[Me(t)]=n:e[z[t]||t]=n;else{const h=s&&t.indexOf(":")>-1&&xe[t.split(":")[0]];h?ke(e,h,t,n):We(e,Te[t]||t,n)}return n}function Oe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),d.registry&&!d.done&&(d.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>i.remove()));n!==null;){const i=n[t];if(i&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?i(s,e):i(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function se(e,t,n={},i,s){return t||(t={}),!s&&"children"in t&&y(()=>n.children=S(e,t.children,n.children)),t.ref&&t.ref(e),y(()=>Le(e,t,i,!0,n,!0)),n}function S(e,t,n,i,s){for(d.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=i!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(d.context)return n;if(o==="number"&&(t=t.toString()),l){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=A(e,n,i,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(d.context)return n;n=A(e,n,i)}else{if(o==="function")return y(()=>{let r=t();for(;typeof r=="function";)r=r();n=S(e,r,n,i)}),()=>n;if(Array.isArray(t)){const r=[];if(U(r,t,s))return y(()=>n=S(e,r,n,i,!0)),()=>n;if(d.context){for(let a=0;a<r.length;a++)if(r[a].parentNode)return n=r}if(r.length===0){if(n=A(e,n,i),l)return n}else Array.isArray(n)?n.length===0?le(e,r,i):Ee(e,n,r):(n&&A(e),le(e,r));n=r}else if(t instanceof Node){if(d.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=A(e,n,i,t);A(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function U(e,t,n){let i=!1;for(let s=0,o=t.length;s<o;s++){let l=t[s],r;if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=U(e,l)||i;else if((r=typeof l)=="string")e.push(document.createTextNode(l));else if(r==="function")if(n){for(;typeof l=="function";)l=l();i=U(e,Array.isArray(l)?l:[l])||i}else e.push(l),i=!0;else e.push(document.createTextNode(l.toString()))}return i}function le(e,t,n){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function A(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const r=t[l];if(s!==r){const a=r.parentNode===e;!o&&!l?a?e.replaceChild(s,r):e.insertBefore(s,n):a&&r.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const ve=D("<main></main>");function De(e){return(()=>{const t=ve.cloneNode(!0);return t.style.setProperty("height","var(--tg-viewport-stable-height)"),t.style.setProperty("width","100vw"),t.style.setProperty("overflow","hidden"),t.style.setProperty("backgroundColor","var(--tg-theme-bg-color)"),t.style.setProperty("color","var(--tg-theme-text-color)"),I(t,e,!1,!0),te(t,()=>e.children),t})()}const Ie=D("<button></button>");function Ue(e){const t=v(e.hapticForce??"medium"),n=J(e,{onClick:i=>{t(),e.onClick&&typeof e.onClick=="function"&&e.onClick(i)}});return(()=>{const i=Ie.cloneNode(!0);return I(i,n,!1,!0),te(i,()=>e.children),i})()}const Ve=D("<input>");function _e(e){const t=Z(),n=J(e,{onselectionchange:i=>{t()}});return(()=>{const i=Ve.cloneNode(!0);return I(i,n,!1,!0),i})()}const[Fe,je]=W(window.Telegram.WebApp.isExpanded);function Ke(e){e&&je(window.Telegram.WebApp.isExpanded)}window.Telegram.WebApp.onEvent("viewportChanged",Ke);function Xe(){return[Fe,()=>window.Telegram.WebApp.expand()]}function Re(){return window.Telegram.WebApp.close}function Ge(){return[()=>window.Telegram.WebApp.initDataUnsafe,window.Telegram.WebApp.sendData]}const[Qe,Ye]=W({themeParams:window.Telegram.WebApp.themeParams,colorScheme:window.Telegram.WebApp.colorScheme});function qe(){function e(){Ye({themeParams:window.Telegram.WebApp.themeParams,colorScheme:window.Telegram.WebApp.colorScheme})}return window.Telegram.WebApp.onEvent("themeChanged",e),L(()=>{window.Telegram.WebApp.offEvent("themeChanged",e)}),Qe}function Je(){return window.Telegram.WebApp.initDataUnsafe.user}const[Ze,ze]=W(window.Telegram.WebApp.viewportHeight),[et,tt]=W(window.Telegram.WebApp.viewportStableHeight);function nt(e){e&&tt(window.Telegram.WebApp.viewportStableHeight),ze(window.Telegram.WebApp.viewportHeight)}window.Telegram.WebApp.onEvent("viewportChanged",nt);function it(){return Ze}function st(){return et}c.BackButton=me,c.HapticButton=Ue,c.HapticInput=_e,c.MainButton=be,c.StableContainer=De,c.createCloseSignal=Re,c.createExpandSignal=Xe,c.createHapticImpactSignal=v,c.createHapticSelectionSignal=Z,c.createInitDataSignal=Ge,c.createThemeSignal=qe,c.createUserSignal=Je,c.createViewportHeightSignal=it,c.createViewportStableHeightSignal=st,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=telegram-webapp-solid.umd.js.map

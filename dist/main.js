(()=>{"use strict";var n={387:(n,e,t)=>{t.d(e,{Z:()=>y});var o=t(81),a=t.n(o),r=t(645),s=t.n(r),i=t(667),c=t.n(i),d=new URL(t(314),t.b),l=new URL(t(246),t.b),u=new URL(t(548),t.b),m=new URL(t(254),t.b),p=new URL(t(893),t.b),f=s()(a()),g=c()(d),v=c()(l),h=c()(u),b=c()(m),x=c()(p);f.push([n.id,":root {\n  font-size: 16px;\n  --dark-neutral: #a3a3a3;\n  --darker-neutral: #404040;\n  --darkest-neutral: #262626;\n  --red: #ef4444;\n}\n\n#content {\n  position: relative;\n}\n\n.contacts-container {\n  position: absolute;\n\n  padding: 30px;\n\n  height: 550px;\n  width: 800px;\n  background: var(--darkest-neutral);\n\n  border-radius: 18px;\n\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 1.6fr 1fr;\n  grid-template-rows: 1fr;\n  gap: 25px;\n}\n\n.map-container {\n  background: url("+g+") no-repeat;\n  background-position: center;\n  background-size: cover;\n\n  border-radius: 9px;\n}\n\n.info-container {\n  align-self: center;\n\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.phone,\n.address,\n.workingTime,\n.email {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n\n  font-size: 1.1rem;\n}\n\n.phone:hover,\n.address:hover,\n.workingTime:hover,\n.email:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.phone-icon,\n.address-icon,\n.workingTime-icon,\n.email-icon {\n  height: 40px;\n  width: 40px;\n  background: #fff;\n}\n\n.phone-icon {\n  background: url("+v+");\n  background-size: cover;\n  background-position: center;\n}\n\n.address-icon {\n  background: url("+h+");\n  background-size: cover;\n  background-position: center;\n}\n\n.workingTime-icon {\n  background: url("+b+");\n  background-size: cover;\n  background-position: center;\n}\n\n.email-icon {\n  background: url("+x+");\n  background-size: cover;\n  background-position: center;\n}\n",""]);const y=f},123:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(81),a=t.n(o),r=t(645),s=t.n(r)()(a());s.push([n.id,".main-info {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.headline {\n  font-weight: 700;\n  font-size: 4.5rem;\n  cursor: pointer;\n}\n\n.subheadline {\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n",""]);const i=s},754:(n,e,t)=>{t.d(e,{Z:()=>L});var o=t(81),a=t.n(o),r=t(645),s=t.n(r),i=t(667),c=t.n(i),d=new URL(t(665),t.b),l=new URL(t(451),t.b),u=new URL(t(773),t.b),m=new URL(t(670),t.b),p=new URL(t(360),t.b),f=new URL(t(936),t.b),g=s()(a()),v=c()(d),h=c()(l),b=c()(u),x=c()(m),y=c()(p),k=c()(f);g.push([n.id,":root {\n  font-size: 16px;\n  --dark-neutral: #a3a3a3;\n  --darker-neutral: #404040;\n  --darkest-neutral: #262626;\n  --red: #ef4444;\n}\n\n#content {\n  position: relative;\n}\n\n.menu-container {\n  position: absolute;\n\n  padding: 30px;\n\n  height: 550px;\n  width: 800px;\n  background: var(--darkest-neutral);\n\n  border-radius: 18px;\n\n  display: grid;\n  grid-template: repeat(2, 240px) / repeat(3, 220px);\n  justify-content: space-between;\n  align-content: space-between;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n\n  cursor: pointer;\n}\n\n.menu-item:hover {\n  background: var(--darker-neutral);\n}\n\n.image.ramen1 {\n  background: url("+v+") no-repeat;\n  background-position: top;\n  background-size: 65%;\n  min-height: 130px;\n\n  margin-bottom: 10px;\n}\n\n.image.ramen2 {\n  background: url("+h+") no-repeat;\n  background-position: top;\n  background-size: 65%;\n  min-height: 130px;\n\n  margin-bottom: 10px;\n}\n\n.image.ramen3 {\n  background: url("+b+") no-repeat;\n  background-position: top;\n  background-size: 65%;\n  min-height: 130px;\n\n  margin-bottom: 10px;\n}\n\n.image.ramen4 {\n  background: url("+x+") no-repeat;\n  background-position: top;\n  background-size: 65%;\n  min-height: 130px;\n\n  margin-bottom: 10px;\n}\n\n.image.ramen5 {\n  background: url("+y+") no-repeat;\n  background-position: top;\n  background-size: 65%;\n  min-height: 130px;\n\n  margin-bottom: 10px;\n}\n\n.image.ramen6 {\n  background: url("+k+") no-repeat;\n  background-position: top;\n  background-size: 65%;\n  min-height: 130px;\n\n  margin-bottom: 10px;\n}\n\n.price {\n  position: absolute;\n\n  right: 10px;\n  top: 100px;\n\n  background: var(--red);\n  padding: 3px 6px;\n  border-radius: 9px;\n}\n\n.name {\n  font-weight: 700;\n  font-size: 1.2rem;\n\n  align-self: center;\n  justify-self: center;\n\n  margin-bottom: 5px;\n}\n\n.description {\n  color: var(--dark-neutral);\n  font-size: 0.6rem;\n\n  align-self: center;\n  justify-self: flex-start;\n}\n",""]);const L=g},922:(n,e,t)=>{t.d(e,{Z:()=>m});var o=t(81),a=t.n(o),r=t(645),s=t.n(r),i=t(667),c=t.n(i),d=new URL(t(775),t.b),l=s()(a()),u=c()(d);l.push([n.id,'*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Rubik", sans-serif;\n}\n\n:root {\n  font-size: 16px;\n  --dark-neutral: #a3a3a3;\n}\n\nbody {\n  background: url('+u+") no-repeat rgb(5, 5, 5);\n  background-position: top;\n  background-size: cover;\n\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n\n  color: #fff;\n  text-align: center;\n}\n\n.top-menu {\n  padding: 40px 0;\n  display: flex;\n  justify-content: center;\n  gap: 40px;\n\n  font-size: 1.3rem;\n  font-weight: 400;\n\n  color: var(--dark-neutral);\n\n  cursor: pointer;\n}\n\n.home:hover,\n.menu:hover,\n.contacts:hover {\n  color: #fff;\n}\n",""]);const m=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},s=[],i=0;i<n.length;i++){var c=n[i],d=o.base?c[0]+o.base:c[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var m=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=a(p,o);o.byIndex=i,e.splice(i,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var s=0;s<r.length;s++){var i=t(r[s]);e[i].references--}for(var c=o(n,a),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},775:(n,e,t)=>{n.exports=t.p+"f94243c2f6262327c6fd.png"},548:(n,e,t)=>{n.exports=t.p+"3f735571b5ea63b25960.svg"},893:(n,e,t)=>{n.exports=t.p+"89279be823615f0cd3d8.svg"},314:(n,e,t)=>{n.exports=t.p+"373d235a5b8f7ed809b0.png"},246:(n,e,t)=>{n.exports=t.p+"3d031c0610d0a736accb.svg"},254:(n,e,t)=>{n.exports=t.p+"e610e7ef0e2f7d3ef5f1.svg"},665:(n,e,t)=>{n.exports=t.p+"e27fcd5e8b4637a895eb.png"},451:(n,e,t)=>{n.exports=t.p+"640af8194aa7f67c0546.png"},773:(n,e,t)=>{n.exports=t.p+"61181797e9f24ea25a18.png"},670:(n,e,t)=>{n.exports=t.p+"17ab54c64802530ef671.png"},360:(n,e,t)=>{n.exports=t.p+"1805abb5a91966aead8b.png"},936:(n,e,t)=>{n.exports=t.p+"ad96ded942a0517f0297.png"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),a=t.n(o),r=t(569),s=t.n(r),i=t(565),c=t.n(i),d=t(216),l=t.n(d),u=t(589),m=t.n(u),p=t(922),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var g=t(123),v={};v.styleTagTransform=m(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),e()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;var h=t(754),b={};b.styleTagTransform=m(),b.setAttributes=c(),b.insert=s().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=l(),e()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;var x=t(387),y={};function k(){const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("main-info");const t=document.createElement("div");t.classList.add("headline"),t.textContent="MICHI RAMEN";const o=document.createElement("div");o.classList.add("subheadline"),o.textContent="Online ordering is available",e.appendChild(t),e.appendChild(o),n.appendChild(e)}y.styleTagTransform=m(),y.setAttributes=c(),y.insert=s().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=l(),e()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals;let L="home";const E=document.querySelector("body"),w=document.querySelector("#content");!function(n,e){const t=document.createElement("div");t.classList.add("top-menu");const o=document.createElement("div");o.classList.add("home"),o.textContent="Home";const a=document.createElement("div");a.classList.add("menu"),a.textContent="Menu";const r=document.createElement("div");r.classList.add("contacts"),r.textContent="Contacts",t.append(o,a,r),n.insertBefore(t,e)}(E,w),k();const C=document.querySelector(".home"),T=document.querySelector(".menu"),S=document.querySelector(".contacts");C.style.color="#fff",C.addEventListener("click",(()=>{"home"!==L&&(L="home",C.style.color="#fff",T.removeAttribute("style"),S.removeAttribute("style")),w.innerHTML="",k()})),T.addEventListener("click",(()=>{"menu"!==L&&(L="menu",T.style.color="#fff",C.removeAttribute("style"),S.removeAttribute("style")),w.innerHTML="",function(){const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("menu-container");const t=document.createElement("div");t.classList.add("menu-item");const o=document.createElement("div");o.classList.add("image"),o.classList.add("ramen1");const a=document.createElement("div");a.classList.add("price"),a.textContent="$12";const r=document.createElement("div");r.classList.add("name"),r.textContent="Tonkotsu ramen";const s=document.createElement("div");s.classList.add("description"),s.textContent="Originating from modern-day Fukuoka and lending its mouthwatering fragrance to Tokyo’s Asakusa region, tonkotsu ramen is made from boiling pork bones for hours until it brings a creamy cloudy look to the tonkotsu broth.",t.append(o,a,r,s);const i=document.createElement("div");i.classList.add("menu-item");const c=document.createElement("div");c.classList.add("image"),c.classList.add("ramen2");const d=document.createElement("div");d.classList.add("price"),d.textContent="$10";const l=document.createElement("div");l.classList.add("name"),l.textContent="Miso Ramen";const u=document.createElement("div");u.classList.add("description"),u.textContent="Coming from the Sapporo region of Hokkaido, miso ramen takes its name from its main ingredient. This broth is strong and savory and has an opaque appearance.",i.append(c,d,l,u);const m=document.createElement("div");m.classList.add("menu-item");const p=document.createElement("div");p.classList.add("image"),p.classList.add("ramen3");const f=document.createElement("div");f.classList.add("price"),f.textContent="$15";const g=document.createElement("div");g.classList.add("name"),g.textContent="Shoyu Ramen";const v=document.createElement("div");v.classList.add("description"),v.textContent="Shoyu means soy sauce in Japanese and this style of noodle dish was actually the first type of ramen and is still going strong. There’s lots of different varieties of shoyu ramen but the taste is normally salty and tangy.",m.append(p,f,g,v);const h=document.createElement("div");h.classList.add("menu-item");const b=document.createElement("div");b.classList.add("image"),b.classList.add("ramen4");const x=document.createElement("div");x.classList.add("price"),x.textContent="$9";const y=document.createElement("div");y.classList.add("name"),y.textContent="Shio Ramen";const k=document.createElement("div");k.classList.add("description"),k.textContent="Shio means salt and this style of ramen tends to be light and transparent. It’s often made by boiling down chicken bones and flavored with seafood based products like dried sardines, dashi stock, and bonito flakes.",h.append(b,x,y,k);const L=document.createElement("div");L.classList.add("menu-item");const E=document.createElement("div");E.classList.add("image"),E.classList.add("ramen5");const w=document.createElement("div");w.classList.add("price"),w.textContent="$12";const C=document.createElement("div");C.classList.add("name"),C.textContent="B&F Ramen";const T=document.createElement("div");T.classList.add("description"),T.textContent="From Tokyo, B&F ramen has a clear soy sauce-based broth with chicken and pork, curly noodles, and classic toppings like sliced pork, bamboo shoots, and nori seaweed.",L.append(E,w,C,T);const S=document.createElement("div");S.classList.add("menu-item");const z=document.createElement("div");z.classList.add("image"),z.classList.add("ramen6");const A=document.createElement("div");A.classList.add("price"),A.textContent="$17";const R=document.createElement("div");R.classList.add("name"),R.textContent="Tsukemen";const Z=document.createElement("div");Z.classList.add("description"),Z.textContent="These thick and hearty ramen noodles are cooked, plunged into cool water, and then served alongside a bowl of tare ramen broth. You dip the noodles and let the thick soup coat each strand in tasty moisture.",S.append(z,A,R,Z),e.append(t,i,m,h,L,S),n.appendChild(e)}()})),S.addEventListener("click",(()=>{"contacts"!==L&&(L="contacts",S.style.color="#fff",C.removeAttribute("style"),T.removeAttribute("style")),w.innerHTML="",function(){const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("contacts-container");const t=document.createElement("div");t.classList.add("map-container"),e.appendChild(t);const o=document.createElement("div");o.classList.add("info-container");const a=document.createElement("div");a.classList.add("phone");const r=document.createElement("div");r.classList.add("phone-icon");const s=document.createElement("div");s.classList.add("phone-text"),s.textContent="+359 877 607 023",a.append(r,s);const i=document.createElement("div");i.classList.add("address");const c=document.createElement("div");c.classList.add("address-icon");const d=document.createElement("div");d.classList.add("address-text"),d.textContent='ul. "Angel Kanchev" 2',i.append(c,d);const l=document.createElement("div");l.classList.add("workingTime");const u=document.createElement("div");u.classList.add("workingTime-icon");const m=document.createElement("div");m.classList.add("workingTime-text"),m.textContent="Mon-Sun: 10am. - 11pm",l.append(u,m);const p=document.createElement("div");p.classList.add("email");const f=document.createElement("div");f.classList.add("email-icon");const g=document.createElement("div");g.classList.add("email-text"),g.textContent="michi@restaurant.com",p.append(f,g),o.append(a,i,l,p),e.appendChild(o),n.appendChild(e)}()}))})()})();
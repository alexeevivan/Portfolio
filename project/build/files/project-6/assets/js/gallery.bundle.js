(()=>{"use strict";var e,r={687:(e,r,t)=>{t(838);var o=t(707),n=t.n(o),l=t(762),a=t.n(l);n().registerPlugin(a(),Observer),document.querySelectorAll(".list__item").forEach((e=>{let r=e.querySelector(".list__item-title");n().timeline({scrollTrigger:{trigger:e,start:"0% 75%",end:"25% 50%",scrub:3}}).fromTo(r,{opacity:0,scale:2,y:"100%"},{opacity:1,scale:1,y:"0%",ease:"power2.inOut"},0)})),n().registerPlugin(Observer);let s,i=document.querySelectorAll("section"),c=document.querySelectorAll(".section__name"),u=n().utils.toArray(".section-heading"),p=n().utils.toArray(".txt"),f=n().utils.toArray(".outer"),d=n().utils.toArray(".inner"),y=-1,v=n().utils.wrap(0,i.length),g=!0;function h(e,r,t){console.log(t),e=v(e),s=!0;let o=-1===r,l=o?-1:1,a=n().timeline({defaults:{duration:1.25,ease:"power1.inOut"},onComplete:()=>s=!1});console.log("fromTop : "+o),console.log("dFactor : "+l),g?(y>=0&&(n().set(i[y],{zIndex:0}),a.to(c[y],{yPercent:-15*l}).set(i[y],{autoAlpha:0})),n().set(i[e],{autoAlpha:1,zIndex:1}),a.fromTo([f[e],d[e]],{yPercent:e=>e?-100*l:100*l},{yPercent:0},0).fromTo(c[e],{yPercent:15*l},{yPercent:0},0).from(p[e],{autoAlpha:0,yPercent:100,duration:1,ease:"power3"},1.5)):(n().set(d[0],{yPercent:0}),n().to(i[0],{autoAlpha:1,duration:2.5,ease:"Power0.easeNone"}),g=!1),console.log(">> "+u),console.log(">> "+e+" / "+u),console.log("currentIndex : "+y),u.forEach((e=>{e.classList.remove("animate__fadeInUp","animate__fadeOutUp"),e.offsetWidth})),g||console.log("isFirst : "+g),u[e].classList.add("animate__fadeInUp"),y=e}n().set(d,{yPercent:-100}),Observer.create({type:"wheel, touch",wheelSpeed:-1,onDown:()=>!s&&h(y-1,-1,"onDown"),onUp:()=>!s&&h(y+1,1,"onUp"),tolerance:10,preventDefault:!0}),h(0,1)}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var l=t[e]={exports:{}};return r[e].call(l.exports,l,l.exports,o),l.exports}o.m=r,e=[],o.O=(r,t,n,l)=>{if(!t){var a=1/0;for(u=0;u<e.length;u++){for(var[t,n,l]=e[u],s=!0,i=0;i<t.length;i++)(!1&l||a>=l)&&Object.keys(o.O).every((e=>o.O[e](t[i])))?t.splice(i--,1):(s=!1,l<a&&(a=l));if(s){e.splice(u--,1);var c=n();void 0!==c&&(r=c)}}return r}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[t,n,l]},o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={121:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var n,l,[a,s,i]=t,c=0;if(a.some((r=>0!==e[r]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(i)var u=i(o)}for(r&&r(t);c<a.length;c++)l=a[c],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=o.O(void 0,[381,319],(()=>o(687)));n=o.O(n)})();
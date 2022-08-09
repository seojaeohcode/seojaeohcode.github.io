const Sr=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};Sr();function rs(e,t){const n=Object.create(null),s=e.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Lr="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kr=rs(Lr);function yi(e){return!!e||e===""}function os(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=pe(s)?$r(s):os(s);if(i)for(const r in i)t[r]=i[r]}return t}else{if(pe(e))return e;if(me(e))return e}}const Fr=/;(?![^(]*\))/g,Nr=/:(.+)/;function $r(e){const t={};return e.split(Fr).forEach(n=>{if(n){const s=n.split(Nr);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ls(e){let t="";if(pe(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const s=ls(e[n]);s&&(t+=s+" ")}else if(me(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const te={},Ct=[],Le=()=>{},Hr=()=>!1,jr=/^on[^a-z]/,bn=e=>jr.test(e),cs=e=>e.startsWith("onUpdate:"),he=Object.assign,as=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Br=Object.prototype.hasOwnProperty,D=(e,t)=>Br.call(e,t),j=Array.isArray,Bt=e=>_n(e)==="[object Map]",Ur=e=>_n(e)==="[object Set]",B=e=>typeof e=="function",pe=e=>typeof e=="string",us=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",xi=e=>me(e)&&B(e.then)&&B(e.catch),qr=Object.prototype.toString,_n=e=>qr.call(e),zr=e=>_n(e).slice(8,-1),Dr=e=>_n(e)==="[object Object]",fs=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,on=rs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Kr=/-(\w)/g,Be=wn(e=>e.replace(Kr,(t,n)=>n?n.toUpperCase():"")),Wr=/\B([A-Z])/g,Mt=wn(e=>e.replace(Wr,"-$1").toLowerCase()),yn=wn(e=>e.charAt(0).toUpperCase()+e.slice(1)),On=wn(e=>e?`on${yn(e)}`:""),Wt=(e,t)=>!Object.is(e,t),Sn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},dn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Vr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Os;const Yr=()=>Os||(Os=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let He;class Xr{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&He&&(this.parent=He,this.index=(He.scopes||(He.scopes=[])).push(this)-1)}run(t){if(this.active){const n=He;try{return He=this,t()}finally{He=n}}}on(){He=this}off(){He=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Qr(e,t=He){t&&t.active&&t.effects.push(e)}const ds=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ei=e=>(e.w&nt)>0,Ci=e=>(e.n&nt)>0,Jr=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=nt},Zr=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const i=t[s];Ei(i)&&!Ci(i)?i.delete(e):t[n++]=i,i.w&=~nt,i.n&=~nt}t.length=n}},jn=new WeakMap;let Ht=0,nt=1;const Bn=30;let Me;const ht=Symbol(""),Un=Symbol("");class hs{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Qr(this,s)}run(){if(!this.active)return this.fn();let t=Me,n=Ge;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Me,Me=this,Ge=!0,nt=1<<++Ht,Ht<=Bn?Jr(this):Ss(this),this.fn()}finally{Ht<=Bn&&Zr(this),nt=1<<--Ht,Me=this.parent,Ge=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Me===this?this.deferStop=!0:this.active&&(Ss(this),this.onStop&&this.onStop(),this.active=!1)}}function Ss(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ge=!0;const Pi=[];function Ot(){Pi.push(Ge),Ge=!1}function St(){const e=Pi.pop();Ge=e===void 0?!0:e}function Ee(e,t,n){if(Ge&&Me){let s=jn.get(e);s||jn.set(e,s=new Map);let i=s.get(n);i||s.set(n,i=ds()),Ti(i)}}function Ti(e,t){let n=!1;Ht<=Bn?Ci(e)||(e.n|=nt,n=!Ei(e)):n=!e.has(Me),n&&(e.add(Me),Me.deps.push(e))}function Ke(e,t,n,s,i,r){const o=jn.get(e);if(!o)return;let c=[];if(t==="clear")c=[...o.values()];else if(n==="length"&&j(e))o.forEach((l,f)=>{(f==="length"||f>=s)&&c.push(l)});else switch(n!==void 0&&c.push(o.get(n)),t){case"add":j(e)?fs(n)&&c.push(o.get("length")):(c.push(o.get(ht)),Bt(e)&&c.push(o.get(Un)));break;case"delete":j(e)||(c.push(o.get(ht)),Bt(e)&&c.push(o.get(Un)));break;case"set":Bt(e)&&c.push(o.get(ht));break}if(c.length===1)c[0]&&qn(c[0]);else{const l=[];for(const f of c)f&&l.push(...f);qn(ds(l))}}function qn(e,t){const n=j(e)?e:[...e];for(const s of n)s.computed&&Ls(s);for(const s of n)s.computed||Ls(s)}function Ls(e,t){(e!==Me||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Gr=rs("__proto__,__v_isRef,__isVue"),Ai=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(us)),eo=ps(),to=ps(!1,!0),no=ps(!0),ks=so();function so(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=V(this);for(let r=0,o=this.length;r<o;r++)Ee(s,"get",r+"");const i=s[t](...n);return i===-1||i===!1?s[t](...n.map(V)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ot();const s=V(this)[t].apply(this,n);return St(),s}}),e}function ps(e=!1,t=!1){return function(s,i,r){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&r===(e?t?wo:Si:t?Oi:Mi).get(s))return s;const o=j(s);if(!e&&o&&D(ks,i))return Reflect.get(ks,i,r);const c=Reflect.get(s,i,r);return(us(i)?Ai.has(i):Gr(i))||(e||Ee(s,"get",i),t)?c:fe(c)?o&&fs(i)?c:c.value:me(c)?e?Li(c):Gt(c):c}}const io=Ri(),ro=Ri(!0);function Ri(e=!1){return function(n,s,i,r){let o=n[s];if(Vt(o)&&fe(o)&&!fe(i))return!1;if(!e&&!Vt(i)&&(zn(i)||(i=V(i),o=V(o)),!j(n)&&fe(o)&&!fe(i)))return o.value=i,!0;const c=j(n)&&fs(s)?Number(s)<n.length:D(n,s),l=Reflect.set(n,s,i,r);return n===V(r)&&(c?Wt(i,o)&&Ke(n,"set",s,i):Ke(n,"add",s,i)),l}}function oo(e,t){const n=D(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Ke(e,"delete",t,void 0),s}function lo(e,t){const n=Reflect.has(e,t);return(!us(t)||!Ai.has(t))&&Ee(e,"has",t),n}function co(e){return Ee(e,"iterate",j(e)?"length":ht),Reflect.ownKeys(e)}const Ii={get:eo,set:io,deleteProperty:oo,has:lo,ownKeys:co},ao={get:no,set(e,t){return!0},deleteProperty(e,t){return!0}},uo=he({},Ii,{get:to,set:ro}),ms=e=>e,xn=e=>Reflect.getPrototypeOf(e);function en(e,t,n=!1,s=!1){e=e.__v_raw;const i=V(e),r=V(t);n||(t!==r&&Ee(i,"get",t),Ee(i,"get",r));const{has:o}=xn(i),c=s?ms:n?bs:Yt;if(o.call(i,t))return c(e.get(t));if(o.call(i,r))return c(e.get(r));e!==i&&e.get(t)}function tn(e,t=!1){const n=this.__v_raw,s=V(n),i=V(e);return t||(e!==i&&Ee(s,"has",e),Ee(s,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function nn(e,t=!1){return e=e.__v_raw,!t&&Ee(V(e),"iterate",ht),Reflect.get(e,"size",e)}function Fs(e){e=V(e);const t=V(this);return xn(t).has.call(t,e)||(t.add(e),Ke(t,"add",e,e)),this}function Ns(e,t){t=V(t);const n=V(this),{has:s,get:i}=xn(n);let r=s.call(n,e);r||(e=V(e),r=s.call(n,e));const o=i.call(n,e);return n.set(e,t),r?Wt(t,o)&&Ke(n,"set",e,t):Ke(n,"add",e,t),this}function $s(e){const t=V(this),{has:n,get:s}=xn(t);let i=n.call(t,e);i||(e=V(e),i=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return i&&Ke(t,"delete",e,void 0),r}function Hs(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Ke(e,"clear",void 0,void 0),n}function sn(e,t){return function(s,i){const r=this,o=r.__v_raw,c=V(o),l=t?ms:e?bs:Yt;return!e&&Ee(c,"iterate",ht),o.forEach((f,u)=>s.call(i,l(f),l(u),r))}}function rn(e,t,n){return function(...s){const i=this.__v_raw,r=V(i),o=Bt(r),c=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...s),u=n?ms:t?bs:Yt;return!t&&Ee(r,"iterate",l?Un:ht),{next(){const{value:h,done:p}=f.next();return p?{value:h,done:p}:{value:c?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function fo(){const e={get(r){return en(this,r)},get size(){return nn(this)},has:tn,add:Fs,set:Ns,delete:$s,clear:Hs,forEach:sn(!1,!1)},t={get(r){return en(this,r,!1,!0)},get size(){return nn(this)},has:tn,add:Fs,set:Ns,delete:$s,clear:Hs,forEach:sn(!1,!0)},n={get(r){return en(this,r,!0)},get size(){return nn(this,!0)},has(r){return tn.call(this,r,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:sn(!0,!1)},s={get(r){return en(this,r,!0,!0)},get size(){return nn(this,!0)},has(r){return tn.call(this,r,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=rn(r,!1,!1),n[r]=rn(r,!0,!1),t[r]=rn(r,!1,!0),s[r]=rn(r,!0,!0)}),[e,n,t,s]}const[ho,po,mo,go]=fo();function gs(e,t){const n=t?e?go:mo:e?po:ho;return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(D(n,i)&&i in s?n:s,i,r)}const vo={get:gs(!1,!1)},bo={get:gs(!1,!0)},_o={get:gs(!0,!1)},Mi=new WeakMap,Oi=new WeakMap,Si=new WeakMap,wo=new WeakMap;function yo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xo(e){return e.__v_skip||!Object.isExtensible(e)?0:yo(zr(e))}function Gt(e){return Vt(e)?e:vs(e,!1,Ii,vo,Mi)}function Eo(e){return vs(e,!1,uo,bo,Oi)}function Li(e){return vs(e,!0,ao,_o,Si)}function vs(e,t,n,s,i){if(!me(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const o=xo(e);if(o===0)return e;const c=new Proxy(e,o===2?s:n);return i.set(e,c),c}function Pt(e){return Vt(e)?Pt(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function zn(e){return!!(e&&e.__v_isShallow)}function ki(e){return Pt(e)||Vt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function Fi(e){return dn(e,"__v_skip",!0),e}const Yt=e=>me(e)?Gt(e):e,bs=e=>me(e)?Li(e):e;function Ni(e){Ge&&Me&&(e=V(e),Ti(e.dep||(e.dep=ds())))}function $i(e,t){e=V(e),e.dep&&qn(e.dep)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Co(e){return Hi(e,!1)}function Po(e){return Hi(e,!0)}function Hi(e,t){return fe(e)?e:new To(e,t)}class To{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:Yt(t)}get value(){return Ni(this),this._value}set value(t){t=this.__v_isShallow?t:V(t),Wt(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Yt(t),$i(this))}}function Tt(e){return fe(e)?e.value:e}const Ao={get:(e,t,n)=>Tt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return fe(i)&&!fe(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function ji(e){return Pt(e)?e:new Proxy(e,Ao)}class Ro{constructor(t,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new hs(t,()=>{this._dirty||(this._dirty=!0,$i(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const t=V(this);return Ni(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Io(e,t,n=!1){let s,i;const r=B(e);return r?(s=e,i=Le):(s=e.get,i=e.set),new Ro(s,i,r||!i,n)}function et(e,t,n,s){let i;try{i=s?e(...s):e()}catch(r){En(r,t,n)}return i}function Ae(e,t,n,s){if(B(e)){const r=et(e,t,n,s);return r&&xi(r)&&r.catch(o=>{En(o,t,n)}),r}const i=[];for(let r=0;r<e.length;r++)i.push(Ae(e[r],t,n,s));return i}function En(e,t,n,s=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,c=n;for(;r;){const f=r.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,c)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){et(l,null,10,[e,o,c]);return}}Mo(e,n,i,s)}function Mo(e,t,n,s=!0){console.error(e)}let hn=!1,Dn=!1;const xe=[];let ze=0;const Ut=[];let jt=null,wt=0;const qt=[];let Qe=null,yt=0;const Bi=Promise.resolve();let _s=null,Kn=null;function Ui(e){const t=_s||Bi;return e?t.then(this?e.bind(this):e):t}function Oo(e){let t=ze+1,n=xe.length;for(;t<n;){const s=t+n>>>1;Xt(xe[s])<e?t=s+1:n=s}return t}function qi(e){(!xe.length||!xe.includes(e,hn&&e.allowRecurse?ze+1:ze))&&e!==Kn&&(e.id==null?xe.push(e):xe.splice(Oo(e.id),0,e),zi())}function zi(){!hn&&!Dn&&(Dn=!0,_s=Bi.then(Wi))}function So(e){const t=xe.indexOf(e);t>ze&&xe.splice(t,1)}function Di(e,t,n,s){j(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?s+1:s))&&n.push(e),zi()}function Lo(e){Di(e,jt,Ut,wt)}function ko(e){Di(e,Qe,qt,yt)}function Cn(e,t=null){if(Ut.length){for(Kn=t,jt=[...new Set(Ut)],Ut.length=0,wt=0;wt<jt.length;wt++)jt[wt]();jt=null,wt=0,Kn=null,Cn(e,t)}}function Ki(e){if(Cn(),qt.length){const t=[...new Set(qt)];if(qt.length=0,Qe){Qe.push(...t);return}for(Qe=t,Qe.sort((n,s)=>Xt(n)-Xt(s)),yt=0;yt<Qe.length;yt++)Qe[yt]();Qe=null,yt=0}}const Xt=e=>e.id==null?1/0:e.id;function Wi(e){Dn=!1,hn=!0,Cn(e),xe.sort((n,s)=>Xt(n)-Xt(s));const t=Le;try{for(ze=0;ze<xe.length;ze++){const n=xe[ze];n&&n.active!==!1&&et(n,null,14)}}finally{ze=0,xe.length=0,Ki(),hn=!1,_s=null,(xe.length||Ut.length||qt.length)&&Wi(e)}}function Fo(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||te;let i=n;const r=t.startsWith("update:"),o=r&&t.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=s[u]||te;p&&(i=n.map(_=>_.trim())),h&&(i=n.map(Vr))}let c,l=s[c=On(t)]||s[c=On(Be(t))];!l&&r&&(l=s[c=On(Mt(t))]),l&&Ae(l,e,6,i);const f=s[c+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ae(f,e,6,i)}}function Vi(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},c=!1;if(!B(e)){const l=f=>{const u=Vi(f,t,!0);u&&(c=!0,he(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!c?(s.set(e,null),null):(j(r)?r.forEach(l=>o[l]=null):he(o,r),s.set(e,o),o)}function Pn(e,t){return!e||!bn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,Mt(t))||D(e,t))}let Oe=null,Tn=null;function pn(e){const t=Oe;return Oe=e,Tn=e&&e.type.__scopeId||null,t}function ws(e){Tn=e}function ys(){Tn=null}function at(e,t=Oe,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&Xs(-1);const r=pn(t),o=e(...i);return pn(r),s._d&&Xs(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Ln(e){const{type:t,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:c,attrs:l,emit:f,render:u,renderCache:h,data:p,setupState:_,ctx:A,inheritAttrs:L}=e;let I,R;const $=pn(e);try{if(n.shapeFlag&4){const W=i||s;I=je(u.call(W,W,h,r,_,p,A)),R=l}else{const W=t;I=je(W.length>1?W(r,{attrs:l,slots:c,emit:f}):W(r,null)),R=t.props?l:No(l)}}catch(W){zt.length=0,En(W,e,1),I=oe(De)}let z=I;if(R&&L!==!1){const W=Object.keys(R),{shapeFlag:re}=z;W.length&&re&7&&(o&&W.some(cs)&&(R=$o(R,o)),z=st(z,R))}return n.dirs&&(z=st(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),I=z,pn($),I}const No=e=>{let t;for(const n in e)(n==="class"||n==="style"||bn(n))&&((t||(t={}))[n]=e[n]);return t},$o=(e,t)=>{const n={};for(const s in e)(!cs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ho(e,t,n){const{props:s,children:i,component:r}=e,{props:o,children:c,patchFlag:l}=t,f=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?js(s,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==s[p]&&!Pn(f,p))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:s===o?!1:s?o?js(s,o,f):!0:!!o;return!1}function js(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(t[r]!==e[r]&&!Pn(n,r))return!0}return!1}function jo({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Bo=e=>e.__isSuspense;function Uo(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):ko(e)}function ln(e,t){if(ce){let n=ce.provides;const s=ce.parent&&ce.parent.provides;s===n&&(n=ce.provides=Object.create(s)),n[e]=t}}function tt(e,t,n=!1){const s=ce||Oe;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&B(t)?t.call(s.proxy):t}}const Bs={};function cn(e,t,n){return Yi(e,t,n)}function Yi(e,t,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=te){const c=ce;let l,f=!1,u=!1;if(fe(e)?(l=()=>e.value,f=zn(e)):Pt(e)?(l=()=>e,s=!0):j(e)?(u=!0,f=e.some(R=>Pt(R)||zn(R)),l=()=>e.map(R=>{if(fe(R))return R.value;if(Pt(R))return Et(R);if(B(R))return et(R,c,2)})):B(e)?t?l=()=>et(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return h&&h(),Ae(e,c,3,[p])}:l=Le,t&&s){const R=l;l=()=>Et(R())}let h,p=R=>{h=I.onStop=()=>{et(R,c,4)}};if(Jt)return p=Le,t?n&&Ae(t,c,3,[l(),u?[]:void 0,p]):l(),Le;let _=u?[]:Bs;const A=()=>{if(!!I.active)if(t){const R=I.run();(s||f||(u?R.some(($,z)=>Wt($,_[z])):Wt(R,_)))&&(h&&h(),Ae(t,c,3,[R,_===Bs?void 0:_,p]),_=R)}else I.run()};A.allowRecurse=!!t;let L;i==="sync"?L=A:i==="post"?L=()=>ve(A,c&&c.suspense):L=()=>Lo(A);const I=new hs(l,L);return t?n?A():_=I.run():i==="post"?ve(I.run.bind(I),c&&c.suspense):I.run(),()=>{I.stop(),c&&c.scope&&as(c.scope.effects,I)}}function qo(e,t,n){const s=this.proxy,i=pe(e)?e.includes(".")?Xi(s,e):()=>s[e]:e.bind(s,s);let r;B(t)?r=t:(r=t.handler,n=t);const o=ce;At(this);const c=Yi(i,r.bind(s),n);return o?At(o):pt(),c}function Xi(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Et(e,t){if(!me(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))Et(e.value,t);else if(j(e))for(let n=0;n<e.length;n++)Et(e[n],t);else if(Ur(e)||Bt(e))e.forEach(n=>{Et(n,t)});else if(Dr(e))for(const n in e)Et(e[n],t);return e}function zo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return er(()=>{e.isMounted=!0}),tr(()=>{e.isUnmounting=!0}),e}const Pe=[Function,Array],Do={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pe,onEnter:Pe,onAfterEnter:Pe,onEnterCancelled:Pe,onBeforeLeave:Pe,onLeave:Pe,onAfterLeave:Pe,onLeaveCancelled:Pe,onBeforeAppear:Pe,onAppear:Pe,onAfterAppear:Pe,onAppearCancelled:Pe},setup(e,{slots:t}){const n=Il(),s=zo();let i;return()=>{const r=t.default&&Ji(t.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const L of r)if(L.type!==De){o=L;break}}const c=V(e),{mode:l}=c;if(s.isLeaving)return kn(o);const f=Us(o);if(!f)return kn(o);const u=Wn(f,c,s,n);Vn(f,u);const h=n.subTree,p=h&&Us(h);let _=!1;const{getTransitionKey:A}=f.type;if(A){const L=A();i===void 0?i=L:L!==i&&(i=L,_=!0)}if(p&&p.type!==De&&(!ft(f,p)||_)){const L=Wn(p,c,s,n);if(Vn(p,L),l==="out-in")return s.isLeaving=!0,L.afterLeave=()=>{s.isLeaving=!1,n.update()},kn(o);l==="in-out"&&f.type!==De&&(L.delayLeave=(I,R,$)=>{const z=Qi(s,p);z[String(p.key)]=p,I._leaveCb=()=>{R(),I._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=$})}return o}}},Ko=Do;function Qi(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Wn(e,t,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:h,onLeave:p,onAfterLeave:_,onLeaveCancelled:A,onBeforeAppear:L,onAppear:I,onAfterAppear:R,onAppearCancelled:$}=t,z=String(e.key),W=Qi(n,e),re=(q,ne)=>{q&&Ae(q,s,9,ne)},de=(q,ne)=>{const ie=ne[1];re(q,ne),j(q)?q.every(ae=>ae.length<=1)&&ie():q.length<=1&&ie()},be={mode:r,persisted:o,beforeEnter(q){let ne=c;if(!n.isMounted)if(i)ne=L||c;else return;q._leaveCb&&q._leaveCb(!0);const ie=W[z];ie&&ft(e,ie)&&ie.el._leaveCb&&ie.el._leaveCb(),re(ne,[q])},enter(q){let ne=l,ie=f,ae=u;if(!n.isMounted)if(i)ne=I||l,ie=R||f,ae=$||u;else return;let ue=!1;const Re=q._enterCb=Ve=>{ue||(ue=!0,Ve?re(ae,[q]):re(ie,[q]),be.delayedLeave&&be.delayedLeave(),q._enterCb=void 0)};ne?de(ne,[q,Re]):Re()},leave(q,ne){const ie=String(e.key);if(q._enterCb&&q._enterCb(!0),n.isUnmounting)return ne();re(h,[q]);let ae=!1;const ue=q._leaveCb=Re=>{ae||(ae=!0,ne(),Re?re(A,[q]):re(_,[q]),q._leaveCb=void 0,W[ie]===e&&delete W[ie])};W[ie]=e,p?de(p,[q,ue]):ue()},clone(q){return Wn(q,t,n,s)}};return be}function kn(e){if(An(e))return e=st(e),e.children=null,e}function Us(e){return An(e)?e.children?e.children[0]:void 0:e}function Vn(e,t){e.shapeFlag&6&&e.component?Vn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ji(e,t=!1,n){let s=[],i=0;for(let r=0;r<e.length;r++){let o=e[r];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ye?(o.patchFlag&128&&i++,s=s.concat(Ji(o.children,t,c))):(t||o.type!==De)&&s.push(c!=null?st(o,{key:c}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Zi(e){return B(e)?{setup:e,name:e.name}:e}const an=e=>!!e.type.__asyncLoader,An=e=>e.type.__isKeepAlive;function Wo(e,t){Gi(e,"a",t)}function Vo(e,t){Gi(e,"da",t)}function Gi(e,t,n=ce){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Rn(t,s,n),n){let i=n.parent;for(;i&&i.parent;)An(i.parent.vnode)&&Yo(s,t,n,i),i=i.parent}}function Yo(e,t,n,s){const i=Rn(t,e,s,!0);nr(()=>{as(s[t],i)},n)}function Rn(e,t,n=ce,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ot(),At(n);const c=Ae(t,n,e,o);return pt(),St(),c});return s?i.unshift(r):i.push(r),r}}const We=e=>(t,n=ce)=>(!Jt||e==="sp")&&Rn(e,t,n),Xo=We("bm"),er=We("m"),Qo=We("bu"),Jo=We("u"),tr=We("bum"),nr=We("um"),Zo=We("sp"),Go=We("rtg"),el=We("rtc");function tl(e,t=ce){Rn("ec",e,t)}function lt(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const c=i[o];r&&(c.oldValue=r[o].value);let l=c.dir[s];l&&(Ot(),Ae(l,n,8,[e.el,c,e,t]),St())}}const sr="components";function ir(e,t){return sl(sr,e,!0,t)||e}const nl=Symbol();function sl(e,t,n=!0,s=!1){const i=Oe||ce;if(i){const r=i.type;if(e===sr){const c=kl(r);if(c&&(c===t||c===Be(t)||c===yn(Be(t))))return r}const o=qs(i[e]||r[e],t)||qs(i.appContext[e],t);return!o&&s?r:o}}function qs(e,t){return e&&(e[t]||e[Be(t)]||e[yn(Be(t))])}const Yn=e=>e?gr(e)?Ps(e)||e.proxy:Yn(e.parent):null,mn=he(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yn(e.parent),$root:e=>Yn(e.root),$emit:e=>e.emit,$options:e=>or(e),$forceUpdate:e=>e.f||(e.f=()=>qi(e.update)),$nextTick:e=>e.n||(e.n=Ui.bind(e.proxy)),$watch:e=>qo.bind(e)}),il={get({_:e},t){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:c,appContext:l}=e;let f;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(s!==te&&D(s,t))return o[t]=1,s[t];if(i!==te&&D(i,t))return o[t]=2,i[t];if((f=e.propsOptions[0])&&D(f,t))return o[t]=3,r[t];if(n!==te&&D(n,t))return o[t]=4,n[t];Xn&&(o[t]=0)}}const u=mn[t];let h,p;if(u)return t==="$attrs"&&Ee(e,"get",t),u(e);if((h=c.__cssModules)&&(h=h[t]))return h;if(n!==te&&D(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,D(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return i!==te&&D(i,t)?(i[t]=n,!0):s!==te&&D(s,t)?(s[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let c;return!!n[o]||e!==te&&D(e,o)||t!==te&&D(t,o)||(c=r[0])&&D(c,o)||D(s,o)||D(mn,o)||D(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Xn=!0;function rl(e){const t=or(e),n=e.proxy,s=e.ctx;Xn=!1,t.beforeCreate&&zs(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:c,provide:l,inject:f,created:u,beforeMount:h,mounted:p,beforeUpdate:_,updated:A,activated:L,deactivated:I,beforeDestroy:R,beforeUnmount:$,destroyed:z,unmounted:W,render:re,renderTracked:de,renderTriggered:be,errorCaptured:q,serverPrefetch:ne,expose:ie,inheritAttrs:ae,components:ue,directives:Re,filters:Ve}=t;if(f&&ol(f,s,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const Y=o[G];B(Y)&&(s[G]=Y.bind(n))}if(i){const G=i.call(n,n);me(G)&&(e.data=Gt(G))}if(Xn=!0,r)for(const G in r){const Y=r[G],_e=B(Y)?Y.bind(n,n):B(Y.get)?Y.get.bind(n,n):Le,vt=!B(Y)&&B(Y.set)?Y.set.bind(n):Le,Ue=Te({get:_e,set:vt});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:Fe=>Ue.value=Fe})}if(c)for(const G in c)rr(c[G],s,n,G);if(l){const G=B(l)?l.call(n):l;Reflect.ownKeys(G).forEach(Y=>{ln(Y,G[Y])})}u&&zs(u,e,"c");function le(G,Y){j(Y)?Y.forEach(_e=>G(_e.bind(n))):Y&&G(Y.bind(n))}if(le(Xo,h),le(er,p),le(Qo,_),le(Jo,A),le(Wo,L),le(Vo,I),le(tl,q),le(el,de),le(Go,be),le(tr,$),le(nr,W),le(Zo,ne),j(ie))if(ie.length){const G=e.exposed||(e.exposed={});ie.forEach(Y=>{Object.defineProperty(G,Y,{get:()=>n[Y],set:_e=>n[Y]=_e})})}else e.exposed||(e.exposed={});re&&e.render===Le&&(e.render=re),ae!=null&&(e.inheritAttrs=ae),ue&&(e.components=ue),Re&&(e.directives=Re)}function ol(e,t,n=Le,s=!1){j(e)&&(e=Qn(e));for(const i in e){const r=e[i];let o;me(r)?"default"in r?o=tt(r.from||i,r.default,!0):o=tt(r.from||i):o=tt(r),fe(o)&&s?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:c=>o.value=c}):t[i]=o}}function zs(e,t,n){Ae(j(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function rr(e,t,n,s){const i=s.includes(".")?Xi(n,s):()=>n[s];if(pe(e)){const r=t[e];B(r)&&cn(i,r)}else if(B(e))cn(i,e.bind(n));else if(me(e))if(j(e))e.forEach(r=>rr(r,t,n,s));else{const r=B(e.handler)?e.handler.bind(n):t[e.handler];B(r)&&cn(i,r,e)}}function or(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,c=r.get(t);let l;return c?l=c:!i.length&&!n&&!s?l=t:(l={},i.length&&i.forEach(f=>gn(l,f,o,!0)),gn(l,t,o)),r.set(t,l),l}function gn(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&gn(e,r,n,!0),i&&i.forEach(o=>gn(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const c=ll[o]||n&&n[o];e[o]=c?c(e[o],t[o]):t[o]}return e}const ll={data:Ds,props:ut,emits:ut,methods:ut,computed:ut,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:ut,directives:ut,watch:al,provide:Ds,inject:cl};function Ds(e,t){return t?e?function(){return he(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function cl(e,t){return ut(Qn(e),Qn(t))}function Qn(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ge(e,t){return e?[...new Set([].concat(e,t))]:t}function ut(e,t){return e?he(he(Object.create(null),e),t):t}function al(e,t){if(!e)return t;if(!t)return e;const n=he(Object.create(null),e);for(const s in t)n[s]=ge(e[s],t[s]);return n}function ul(e,t,n,s=!1){const i={},r={};dn(r,In,1),e.propsDefaults=Object.create(null),lr(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=s?i:Eo(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function fl(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,c=V(i),[l]=e.propsOptions;let f=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Pn(e.emitsOptions,p))continue;const _=t[p];if(l)if(D(r,p))_!==r[p]&&(r[p]=_,f=!0);else{const A=Be(p);i[A]=Jn(l,c,A,_,e,!1)}else _!==r[p]&&(r[p]=_,f=!0)}}}else{lr(e,t,i,r)&&(f=!0);let u;for(const h in c)(!t||!D(t,h)&&((u=Mt(h))===h||!D(t,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Jn(l,c,h,void 0,e,!0)):delete i[h]);if(r!==c)for(const h in r)(!t||!D(t,h)&&!0)&&(delete r[h],f=!0)}f&&Ke(e,"set","$attrs")}function lr(e,t,n,s){const[i,r]=e.propsOptions;let o=!1,c;if(t)for(let l in t){if(on(l))continue;const f=t[l];let u;i&&D(i,u=Be(l))?!r||!r.includes(u)?n[u]=f:(c||(c={}))[u]=f:Pn(e.emitsOptions,l)||(!(l in s)||f!==s[l])&&(s[l]=f,o=!0)}if(r){const l=V(n),f=c||te;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Jn(i,l,h,f[h],e,!D(f,h))}}return o}function Jn(e,t,n,s,i,r){const o=e[n];if(o!=null){const c=D(o,"default");if(c&&s===void 0){const l=o.default;if(o.type!==Function&&B(l)){const{propsDefaults:f}=i;n in f?s=f[n]:(At(i),s=f[n]=l.call(null,t),pt())}else s=l}o[0]&&(r&&!c?s=!1:o[1]&&(s===""||s===Mt(n))&&(s=!0))}return s}function cr(e,t,n=!1){const s=t.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},c=[];let l=!1;if(!B(e)){const u=h=>{l=!0;const[p,_]=cr(h,t,!0);he(o,p),_&&c.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!l)return s.set(e,Ct),Ct;if(j(r))for(let u=0;u<r.length;u++){const h=Be(r[u]);Ks(h)&&(o[h]=te)}else if(r)for(const u in r){const h=Be(u);if(Ks(h)){const p=r[u],_=o[h]=j(p)||B(p)?{type:p}:p;if(_){const A=Ys(Boolean,_.type),L=Ys(String,_.type);_[0]=A>-1,_[1]=L<0||A<L,(A>-1||D(_,"default"))&&c.push(h)}}}const f=[o,c];return s.set(e,f),f}function Ks(e){return e[0]!=="$"}function Ws(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Vs(e,t){return Ws(e)===Ws(t)}function Ys(e,t){return j(t)?t.findIndex(n=>Vs(n,e)):B(t)&&Vs(t,e)?0:-1}const ar=e=>e[0]==="_"||e==="$stable",xs=e=>j(e)?e.map(je):[je(e)],dl=(e,t,n)=>{if(t._n)return t;const s=at((...i)=>xs(t(...i)),n);return s._c=!1,s},ur=(e,t,n)=>{const s=e._ctx;for(const i in e){if(ar(i))continue;const r=e[i];if(B(r))t[i]=dl(i,r,s);else if(r!=null){const o=xs(r);t[i]=()=>o}}},fr=(e,t)=>{const n=xs(t);e.slots.default=()=>n},hl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),dn(t,"_",n)):ur(t,e.slots={})}else e.slots={},t&&fr(e,t);dn(e.slots,In,1)},pl=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,o=te;if(s.shapeFlag&32){const c=t._;c?n&&c===1?r=!1:(he(i,t),!n&&c===1&&delete i._):(r=!t.$stable,ur(t,i)),o=t}else t&&(fr(e,t),o={default:1});if(r)for(const c in i)!ar(c)&&!(c in o)&&delete i[c]};function dr(){return{app:null,config:{isNativeTag:Hr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ml=0;function gl(e,t){return function(s,i=null){B(s)||(s=Object.assign({},s)),i!=null&&!me(i)&&(i=null);const r=dr(),o=new Set;let c=!1;const l=r.app={_uid:ml++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Nl,get config(){return r.config},set config(f){},use(f,...u){return o.has(f)||(f&&B(f.install)?(o.add(f),f.install(l,...u)):B(f)&&(o.add(f),f(l,...u))),l},mixin(f){return r.mixins.includes(f)||r.mixins.push(f),l},component(f,u){return u?(r.components[f]=u,l):r.components[f]},directive(f,u){return u?(r.directives[f]=u,l):r.directives[f]},mount(f,u,h){if(!c){const p=oe(s,i);return p.appContext=r,u&&t?t(p,f):e(p,f,h),c=!0,l._container=f,f.__vue_app__=l,Ps(p.component)||p.component.proxy}},unmount(){c&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return r.provides[f]=u,l}};return l}}function Zn(e,t,n,s,i=!1){if(j(e)){e.forEach((p,_)=>Zn(p,t&&(j(t)?t[_]:t),n,s,i));return}if(an(s)&&!i)return;const r=s.shapeFlag&4?Ps(s.component)||s.component.proxy:s.el,o=i?null:r,{i:c,r:l}=e,f=t&&t.r,u=c.refs===te?c.refs={}:c.refs,h=c.setupState;if(f!=null&&f!==l&&(pe(f)?(u[f]=null,D(h,f)&&(h[f]=null)):fe(f)&&(f.value=null)),B(l))et(l,c,12,[o,u]);else{const p=pe(l),_=fe(l);if(p||_){const A=()=>{if(e.f){const L=p?u[l]:l.value;i?j(L)&&as(L,r):j(L)?L.includes(r)||L.push(r):p?(u[l]=[r],D(h,l)&&(h[l]=u[l])):(l.value=[r],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,D(h,l)&&(h[l]=o)):fe(l)&&(l.value=o,e.k&&(u[e.k]=o))};o?(A.id=-1,ve(A,n)):A()}}}const ve=Uo;function vl(e){return bl(e)}function bl(e,t){const n=Yr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:c,createComment:l,setText:f,setElementText:u,parentNode:h,nextSibling:p,setScopeId:_=Le,cloneNode:A,insertStaticContent:L}=e,I=(a,d,m,b=null,v=null,x=null,P=!1,y=null,E=!!d.dynamicChildren)=>{if(a===d)return;a&&!ft(a,d)&&(b=S(a),Ce(a,v,x,!0),a=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:w,ref:k,shapeFlag:M}=d;switch(w){case Es:R(a,d,m,b);break;case De:$(a,d,m,b);break;case un:a==null&&z(d,m,b,P);break;case ye:Re(a,d,m,b,v,x,P,y,E);break;default:M&1?de(a,d,m,b,v,x,P,y,E):M&6?Ve(a,d,m,b,v,x,P,y,E):(M&64||M&128)&&w.process(a,d,m,b,v,x,P,y,E,ee)}k!=null&&v&&Zn(k,a&&a.ref,x,d||a,!d)},R=(a,d,m,b)=>{if(a==null)s(d.el=c(d.children),m,b);else{const v=d.el=a.el;d.children!==a.children&&f(v,d.children)}},$=(a,d,m,b)=>{a==null?s(d.el=l(d.children||""),m,b):d.el=a.el},z=(a,d,m,b)=>{[a.el,a.anchor]=L(a.children,d,m,b,a.el,a.anchor)},W=({el:a,anchor:d},m,b)=>{let v;for(;a&&a!==d;)v=p(a),s(a,m,b),a=v;s(d,m,b)},re=({el:a,anchor:d})=>{let m;for(;a&&a!==d;)m=p(a),i(a),a=m;i(d)},de=(a,d,m,b,v,x,P,y,E)=>{P=P||d.type==="svg",a==null?be(d,m,b,v,x,P,y,E):ie(a,d,v,x,P,y,E)},be=(a,d,m,b,v,x,P,y)=>{let E,w;const{type:k,props:M,shapeFlag:F,transition:N,patchFlag:K,dirs:Q}=a;if(a.el&&A!==void 0&&K===-1)E=a.el=A(a.el);else{if(E=a.el=o(a.type,x,M&&M.is,M),F&8?u(E,a.children):F&16&&ne(a.children,E,null,b,v,x&&k!=="foreignObject",P,y),Q&&lt(a,null,b,"created"),M){for(const se in M)se!=="value"&&!on(se)&&r(E,se,null,M[se],x,a.children,b,v,C);"value"in M&&r(E,"value",null,M.value),(w=M.onVnodeBeforeMount)&&$e(w,b,a)}q(E,a,a.scopeId,P,b)}Q&&lt(a,null,b,"beforeMount");const J=(!v||v&&!v.pendingBranch)&&N&&!N.persisted;J&&N.beforeEnter(E),s(E,d,m),((w=M&&M.onVnodeMounted)||J||Q)&&ve(()=>{w&&$e(w,b,a),J&&N.enter(E),Q&&lt(a,null,b,"mounted")},v)},q=(a,d,m,b,v)=>{if(m&&_(a,m),b)for(let x=0;x<b.length;x++)_(a,b[x]);if(v){let x=v.subTree;if(d===x){const P=v.vnode;q(a,P,P.scopeId,P.slotScopeIds,v.parent)}}},ne=(a,d,m,b,v,x,P,y,E=0)=>{for(let w=E;w<a.length;w++){const k=a[w]=y?Je(a[w]):je(a[w]);I(null,k,d,m,b,v,x,P,y)}},ie=(a,d,m,b,v,x,P)=>{const y=d.el=a.el;let{patchFlag:E,dynamicChildren:w,dirs:k}=d;E|=a.patchFlag&16;const M=a.props||te,F=d.props||te;let N;m&&ct(m,!1),(N=F.onVnodeBeforeUpdate)&&$e(N,m,d,a),k&&lt(d,a,m,"beforeUpdate"),m&&ct(m,!0);const K=v&&d.type!=="foreignObject";if(w?ae(a.dynamicChildren,w,y,m,b,K,x):P||_e(a,d,y,null,m,b,K,x,!1),E>0){if(E&16)ue(y,d,M,F,m,b,v);else if(E&2&&M.class!==F.class&&r(y,"class",null,F.class,v),E&4&&r(y,"style",M.style,F.style,v),E&8){const Q=d.dynamicProps;for(let J=0;J<Q.length;J++){const se=Q[J],Ie=M[se],bt=F[se];(bt!==Ie||se==="value")&&r(y,se,Ie,bt,v,a.children,m,b,C)}}E&1&&a.children!==d.children&&u(y,d.children)}else!P&&w==null&&ue(y,d,M,F,m,b,v);((N=F.onVnodeUpdated)||k)&&ve(()=>{N&&$e(N,m,d,a),k&&lt(d,a,m,"updated")},b)},ae=(a,d,m,b,v,x,P)=>{for(let y=0;y<d.length;y++){const E=a[y],w=d[y],k=E.el&&(E.type===ye||!ft(E,w)||E.shapeFlag&70)?h(E.el):m;I(E,w,k,null,b,v,x,P,!0)}},ue=(a,d,m,b,v,x,P)=>{if(m!==b){for(const y in b){if(on(y))continue;const E=b[y],w=m[y];E!==w&&y!=="value"&&r(a,y,w,E,P,d.children,v,x,C)}if(m!==te)for(const y in m)!on(y)&&!(y in b)&&r(a,y,m[y],null,P,d.children,v,x,C);"value"in b&&r(a,"value",m.value,b.value)}},Re=(a,d,m,b,v,x,P,y,E)=>{const w=d.el=a?a.el:c(""),k=d.anchor=a?a.anchor:c("");let{patchFlag:M,dynamicChildren:F,slotScopeIds:N}=d;N&&(y=y?y.concat(N):N),a==null?(s(w,m,b),s(k,m,b),ne(d.children,m,k,v,x,P,y,E)):M>0&&M&64&&F&&a.dynamicChildren?(ae(a.dynamicChildren,F,m,v,x,P,y),(d.key!=null||v&&d===v.subTree)&&hr(a,d,!0)):_e(a,d,m,k,v,x,P,y,E)},Ve=(a,d,m,b,v,x,P,y,E)=>{d.slotScopeIds=y,a==null?d.shapeFlag&512?v.ctx.activate(d,m,b,P,E):gt(d,m,b,v,x,P,E):le(a,d,E)},gt=(a,d,m,b,v,x,P)=>{const y=a.component=Rl(a,b,v);if(An(a)&&(y.ctx.renderer=ee),Ml(y),y.asyncDep){if(v&&v.registerDep(y,G),!a.el){const E=y.subTree=oe(De);$(null,E,d,m)}return}G(y,a,d,m,v,x,P)},le=(a,d,m)=>{const b=d.component=a.component;if(Ho(a,d,m))if(b.asyncDep&&!b.asyncResolved){Y(b,d,m);return}else b.next=d,So(b.update),b.update();else d.el=a.el,b.vnode=d},G=(a,d,m,b,v,x,P)=>{const y=()=>{if(a.isMounted){let{next:k,bu:M,u:F,parent:N,vnode:K}=a,Q=k,J;ct(a,!1),k?(k.el=K.el,Y(a,k,P)):k=K,M&&Sn(M),(J=k.props&&k.props.onVnodeBeforeUpdate)&&$e(J,N,k,K),ct(a,!0);const se=Ln(a),Ie=a.subTree;a.subTree=se,I(Ie,se,h(Ie.el),S(Ie),a,v,x),k.el=se.el,Q===null&&jo(a,se.el),F&&ve(F,v),(J=k.props&&k.props.onVnodeUpdated)&&ve(()=>$e(J,N,k,K),v)}else{let k;const{el:M,props:F}=d,{bm:N,m:K,parent:Q}=a,J=an(d);if(ct(a,!1),N&&Sn(N),!J&&(k=F&&F.onVnodeBeforeMount)&&$e(k,Q,d),ct(a,!0),M&&H){const se=()=>{a.subTree=Ln(a),H(M,a.subTree,a,v,null)};J?d.type.__asyncLoader().then(()=>!a.isUnmounted&&se()):se()}else{const se=a.subTree=Ln(a);I(null,se,m,b,a,v,x),d.el=se.el}if(K&&ve(K,v),!J&&(k=F&&F.onVnodeMounted)){const se=d;ve(()=>$e(k,Q,se),v)}(d.shapeFlag&256||Q&&an(Q.vnode)&&Q.vnode.shapeFlag&256)&&a.a&&ve(a.a,v),a.isMounted=!0,d=m=b=null}},E=a.effect=new hs(y,()=>qi(w),a.scope),w=a.update=()=>E.run();w.id=a.uid,ct(a,!0),w()},Y=(a,d,m)=>{d.component=a;const b=a.vnode.props;a.vnode=d,a.next=null,fl(a,d.props,b,m),pl(a,d.children,m),Ot(),Cn(void 0,a.update),St()},_e=(a,d,m,b,v,x,P,y,E=!1)=>{const w=a&&a.children,k=a?a.shapeFlag:0,M=d.children,{patchFlag:F,shapeFlag:N}=d;if(F>0){if(F&128){Ue(w,M,m,b,v,x,P,y,E);return}else if(F&256){vt(w,M,m,b,v,x,P,y,E);return}}N&8?(k&16&&C(w,v,x),M!==w&&u(m,M)):k&16?N&16?Ue(w,M,m,b,v,x,P,y,E):C(w,v,x,!0):(k&8&&u(m,""),N&16&&ne(M,m,b,v,x,P,y,E))},vt=(a,d,m,b,v,x,P,y,E)=>{a=a||Ct,d=d||Ct;const w=a.length,k=d.length,M=Math.min(w,k);let F;for(F=0;F<M;F++){const N=d[F]=E?Je(d[F]):je(d[F]);I(a[F],N,m,null,v,x,P,y,E)}w>k?C(a,v,x,!0,!1,M):ne(d,m,b,v,x,P,y,E,M)},Ue=(a,d,m,b,v,x,P,y,E)=>{let w=0;const k=d.length;let M=a.length-1,F=k-1;for(;w<=M&&w<=F;){const N=a[w],K=d[w]=E?Je(d[w]):je(d[w]);if(ft(N,K))I(N,K,m,null,v,x,P,y,E);else break;w++}for(;w<=M&&w<=F;){const N=a[M],K=d[F]=E?Je(d[F]):je(d[F]);if(ft(N,K))I(N,K,m,null,v,x,P,y,E);else break;M--,F--}if(w>M){if(w<=F){const N=F+1,K=N<k?d[N].el:b;for(;w<=F;)I(null,d[w]=E?Je(d[w]):je(d[w]),m,K,v,x,P,y,E),w++}}else if(w>F)for(;w<=M;)Ce(a[w],v,x,!0),w++;else{const N=w,K=w,Q=new Map;for(w=K;w<=F;w++){const we=d[w]=E?Je(d[w]):je(d[w]);we.key!=null&&Q.set(we.key,w)}let J,se=0;const Ie=F-K+1;let bt=!1,Rs=0;const kt=new Array(Ie);for(w=0;w<Ie;w++)kt[w]=0;for(w=N;w<=M;w++){const we=a[w];if(se>=Ie){Ce(we,v,x,!0);continue}let Ne;if(we.key!=null)Ne=Q.get(we.key);else for(J=K;J<=F;J++)if(kt[J-K]===0&&ft(we,d[J])){Ne=J;break}Ne===void 0?Ce(we,v,x,!0):(kt[Ne-K]=w+1,Ne>=Rs?Rs=Ne:bt=!0,I(we,d[Ne],m,null,v,x,P,y,E),se++)}const Is=bt?_l(kt):Ct;for(J=Is.length-1,w=Ie-1;w>=0;w--){const we=K+w,Ne=d[we],Ms=we+1<k?d[we+1].el:b;kt[w]===0?I(null,Ne,m,Ms,v,x,P,y,E):bt&&(J<0||w!==Is[J]?Fe(Ne,m,Ms,2):J--)}}},Fe=(a,d,m,b,v=null)=>{const{el:x,type:P,transition:y,children:E,shapeFlag:w}=a;if(w&6){Fe(a.component.subTree,d,m,b);return}if(w&128){a.suspense.move(d,m,b);return}if(w&64){P.move(a,d,m,ee);return}if(P===ye){s(x,d,m);for(let M=0;M<E.length;M++)Fe(E[M],d,m,b);s(a.anchor,d,m);return}if(P===un){W(a,d,m);return}if(b!==2&&w&1&&y)if(b===0)y.beforeEnter(x),s(x,d,m),ve(()=>y.enter(x),v);else{const{leave:M,delayLeave:F,afterLeave:N}=y,K=()=>s(x,d,m),Q=()=>{M(x,()=>{K(),N&&N()})};F?F(x,K,Q):Q()}else s(x,d,m)},Ce=(a,d,m,b=!1,v=!1)=>{const{type:x,props:P,ref:y,children:E,dynamicChildren:w,shapeFlag:k,patchFlag:M,dirs:F}=a;if(y!=null&&Zn(y,null,m,a,!0),k&256){d.ctx.deactivate(a);return}const N=k&1&&F,K=!an(a);let Q;if(K&&(Q=P&&P.onVnodeBeforeUnmount)&&$e(Q,d,a),k&6)O(a.component,m,b);else{if(k&128){a.suspense.unmount(m,b);return}N&&lt(a,null,d,"beforeUnmount"),k&64?a.type.remove(a,d,m,v,ee,b):w&&(x!==ye||M>0&&M&64)?C(w,d,m,!1,!0):(x===ye&&M&384||!v&&k&16)&&C(E,d,m),b&&Lt(a)}(K&&(Q=P&&P.onVnodeUnmounted)||N)&&ve(()=>{Q&&$e(Q,d,a),N&&lt(a,null,d,"unmounted")},m)},Lt=a=>{const{type:d,el:m,anchor:b,transition:v}=a;if(d===ye){g(m,b);return}if(d===un){re(a);return}const x=()=>{i(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(a.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:y}=v,E=()=>P(m,x);y?y(a.el,x,E):E()}else x()},g=(a,d)=>{let m;for(;a!==d;)m=p(a),i(a),a=m;i(d)},O=(a,d,m)=>{const{bum:b,scope:v,update:x,subTree:P,um:y}=a;b&&Sn(b),v.stop(),x&&(x.active=!1,Ce(P,a,d,m)),y&&ve(y,d),ve(()=>{a.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},C=(a,d,m,b=!1,v=!1,x=0)=>{for(let P=x;P<a.length;P++)Ce(a[P],d,m,b,v)},S=a=>a.shapeFlag&6?S(a.component.subTree):a.shapeFlag&128?a.suspense.next():p(a.anchor||a.el),X=(a,d,m)=>{a==null?d._vnode&&Ce(d._vnode,null,null,!0):I(d._vnode||null,a,d,null,null,null,m),Ki(),d._vnode=a},ee={p:I,um:Ce,m:Fe,r:Lt,mt:gt,mc:ne,pc:_e,pbc:ae,n:S,o:e};let U,H;return t&&([U,H]=t(ee)),{render:X,hydrate:U,createApp:gl(X,U)}}function ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function hr(e,t,n=!1){const s=e.children,i=t.children;if(j(s)&&j(i))for(let r=0;r<s.length;r++){const o=s[r];let c=i[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[r]=Je(i[r]),c.el=o.el),n||hr(o,c))}}function _l(e){const t=e.slice(),n=[0];let s,i,r,o,c;const l=e.length;for(s=0;s<l;s++){const f=e[s];if(f!==0){if(i=n[n.length-1],e[i]<f){t[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)c=r+o>>1,e[n[c]]<f?r=c+1:o=c;f<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}const wl=e=>e.__isTeleport,ye=Symbol(void 0),Es=Symbol(void 0),De=Symbol(void 0),un=Symbol(void 0),zt=[];let Se=null;function it(e=!1){zt.push(Se=e?null:[])}function yl(){zt.pop(),Se=zt[zt.length-1]||null}let Qt=1;function Xs(e){Qt+=e}function xl(e){return e.dynamicChildren=Qt>0?Se||Ct:null,yl(),Qt>0&&Se&&Se.push(e),e}function rt(e,t,n,s,i,r){return xl(T(e,t,n,s,i,r,!0))}function Gn(e){return e?e.__v_isVNode===!0:!1}function ft(e,t){return e.type===t.type&&e.key===t.key}const In="__vInternal",pr=({key:e})=>e!=null?e:null,fn=({ref:e,ref_key:t,ref_for:n})=>e!=null?pe(e)||fe(e)||B(e)?{i:Oe,r:e,k:t,f:!!n}:e:null;function T(e,t=null,n=null,s=0,i=null,r=e===ye?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&pr(t),ref:t&&fn(t),scopeId:Tn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(Cs(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=pe(n)?8:16),Qt>0&&!o&&Se&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Se.push(l),l}const oe=El;function El(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===nl)&&(e=De),Gn(e)){const c=st(e,t,!0);return n&&Cs(c,n),Qt>0&&!r&&Se&&(c.shapeFlag&6?Se[Se.indexOf(e)]=c:Se.push(c)),c.patchFlag|=-2,c}if(Fl(e)&&(e=e.__vccOpts),t){t=Cl(t);let{class:c,style:l}=t;c&&!pe(c)&&(t.class=ls(c)),me(l)&&(ki(l)&&!j(l)&&(l=he({},l)),t.style=os(l))}const o=pe(e)?1:Bo(e)?128:wl(e)?64:me(e)?4:B(e)?2:0;return T(e,t,n,s,i,o,r,!0)}function Cl(e){return e?ki(e)||In in e?he({},e):e:null}function st(e,t,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=e,c=t?Pl(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&pr(c),ref:t&&t.ref?n&&i?j(i)?i.concat(fn(t)):[i,fn(t)]:fn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&st(e.ssContent),ssFallback:e.ssFallback&&st(e.ssFallback),el:e.el,anchor:e.anchor}}function mt(e=" ",t=0){return oe(Es,null,e,t)}function mr(e,t){const n=oe(un,null,e);return n.staticCount=t,n}function je(e){return e==null||typeof e=="boolean"?oe(De):j(e)?oe(ye,null,e.slice()):typeof e=="object"?Je(e):oe(Es,null,String(e))}function Je(e){return e.el===null||e.memo?e:st(e)}function Cs(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Cs(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(In in t)?t._ctx=Oe:i===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Oe},n=32):(t=String(t),s&64?(n=16,t=[mt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Pl(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=ls([t.class,s.class]));else if(i==="style")t.style=os([t.style,s.style]);else if(bn(i)){const r=t[i],o=s[i];o&&r!==o&&!(j(r)&&r.includes(o))&&(t[i]=r?[].concat(r,o):o)}else i!==""&&(t[i]=s[i])}return t}function $e(e,t,n,s=null){Ae(e,t,7,[n,s])}const Tl=dr();let Al=0;function Rl(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||Tl,r={uid:Al++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cr(s,i),emitsOptions:Vi(s,i),emit:null,emitted:null,propsDefaults:te,inheritAttrs:s.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Fo.bind(null,r),e.ce&&e.ce(r),r}let ce=null;const Il=()=>ce||Oe,At=e=>{ce=e,e.scope.on()},pt=()=>{ce&&ce.scope.off(),ce=null};function gr(e){return e.vnode.shapeFlag&4}let Jt=!1;function Ml(e,t=!1){Jt=t;const{props:n,children:s}=e.vnode,i=gr(e);ul(e,n,i,t),hl(e,s);const r=i?Ol(e,t):void 0;return Jt=!1,r}function Ol(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Fi(new Proxy(e.ctx,il));const{setup:s}=n;if(s){const i=e.setupContext=s.length>1?Ll(e):null;At(e),Ot();const r=et(s,e,0,[e.props,i]);if(St(),pt(),xi(r)){if(r.then(pt,pt),t)return r.then(o=>{Qs(e,o,t)}).catch(o=>{En(o,e,0)});e.asyncDep=r}else Qs(e,r,t)}else vr(e,t)}function Qs(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=ji(t)),vr(e,n)}let Js;function vr(e,t,n){const s=e.type;if(!e.render){if(!t&&Js&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=e.appContext.config,{delimiters:c,compilerOptions:l}=s,f=he(he({isCustomElement:r,delimiters:c},o),l);s.render=Js(i,f)}}e.render=s.render||Le}At(e),Ot(),rl(e),St(),pt()}function Sl(e){return new Proxy(e.attrs,{get(t,n){return Ee(e,"get","$attrs"),t[n]}})}function Ll(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=Sl(e))},slots:e.slots,emit:e.emit,expose:t}}function Ps(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ji(Fi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in mn)return mn[n](e)}}))}function kl(e){return B(e)&&e.displayName||e.name}function Fl(e){return B(e)&&"__vccOpts"in e}const Te=(e,t)=>Io(e,t,Jt);function br(e,t,n){const s=arguments.length;return s===2?me(t)&&!j(t)?Gn(t)?oe(e,null,[t]):oe(e,t):oe(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Gn(n)&&(n=[n]),oe(e,t,n))}const Nl="3.2.36",$l="http://www.w3.org/2000/svg",dt=typeof document!="undefined"?document:null,Zs=dt&&dt.createElement("template"),Hl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t?dt.createElementNS($l,e):dt.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Zs.innerHTML=s?`<svg>${e}</svg>`:e;const c=Zs.content;if(s){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}t.insertBefore(c,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function jl(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Bl(e,t,n){const s=e.style,i=pe(n);if(n&&!i){for(const r in n)es(s,r,n[r]);if(t&&!pe(t))for(const r in t)n[r]==null&&es(s,r,"")}else{const r=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const Gs=/\s*!important$/;function es(e,t,n){if(j(n))n.forEach(s=>es(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Ul(e,t);Gs.test(n)?e.setProperty(Mt(s),n.replace(Gs,""),"important"):e[s]=n}}const ei=["Webkit","Moz","ms"],Fn={};function Ul(e,t){const n=Fn[t];if(n)return n;let s=Be(t);if(s!=="filter"&&s in e)return Fn[t]=s;s=yn(s);for(let i=0;i<ei.length;i++){const r=ei[i]+s;if(r in e)return Fn[t]=r}return t}const ti="http://www.w3.org/1999/xlink";function ql(e,t,n,s,i){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ti,t.slice(6,t.length)):e.setAttributeNS(ti,t,n);else{const r=kr(t);n==null||r&&!yi(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function zl(e,t,n,s,i,r,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,i,r),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=yi(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}const[_r,Dl]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let ts=0;const Kl=Promise.resolve(),Wl=()=>{ts=0},Vl=()=>ts||(Kl.then(Wl),ts=_r());function Yl(e,t,n,s){e.addEventListener(t,n,s)}function Xl(e,t,n,s){e.removeEventListener(t,n,s)}function Ql(e,t,n,s,i=null){const r=e._vei||(e._vei={}),o=r[t];if(s&&o)o.value=s;else{const[c,l]=Jl(t);if(s){const f=r[t]=Zl(s,i);Yl(e,c,f,l)}else o&&(Xl(e,c,o,l),r[t]=void 0)}}const ni=/(?:Once|Passive|Capture)$/;function Jl(e){let t;if(ni.test(e)){t={};let n;for(;n=e.match(ni);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Mt(e.slice(2)),t]}function Zl(e,t){const n=s=>{const i=s.timeStamp||_r();(Dl||i>=n.attached-1)&&Ae(Gl(s,n.value),t,5,[s])};return n.value=e,n.attached=Vl(),n}function Gl(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const si=/^on[a-z]/,ec=(e,t,n,s,i=!1,r,o,c,l)=>{t==="class"?jl(e,s,i):t==="style"?Bl(e,n,s):bn(t)?cs(t)||Ql(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):tc(e,t,s,i))?zl(e,t,s,r,o,c,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ql(e,t,s,i))};function tc(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&si.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||si.test(t)&&pe(n)?!1:t in e}const nc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ko.props;const sc=he({patchProp:ec},Hl);let ii;function ic(){return ii||(ii=vl(sc))}const rc=(...e)=>{const t=ic().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=oc(s);if(!i)return;const r=t._component;!B(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function oc(e){return pe(e)?document.querySelector(e):e}var lc="/assets/logo-removebg-preview.e520c101.png";var ot=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n};const cc={},ac=e=>(ws("data-v-8e47ed44"),e=e(),ys(),e),uc=ac(()=>T("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"},null,-1)),fc={class:"wrap"},dc={id:"nav"},hc=mt("About"),pc=mt("Lab"),mc=mt("Technology"),gc=mt("Award"),vc=mt("News"),bc=mt("Survey"),_c=mr('<div id="intro" data-v-8e47ed44><div id="logobox" data-v-8e47ed44><img src="'+lc+'" alt="" data-v-8e47ed44></div><div id="explain" data-v-8e47ed44><div id="headline" data-v-8e47ed44><p data-v-8e47ed44>Milky-Way has a lot of</p><p data-v-8e47ed44>Information likes Star</p><p data-v-8e47ed44>In the milkyway.</p></div><div id="maintext" class="alpha" data-v-8e47ed44><p data-v-8e47ed44>Laboratory, technical introduction, awards of the month, latest news, surveys, etc</p><p data-v-8e47ed44>Press the button on the menu to get more news about the development</p><p data-v-8e47ed44>It will help new developers. Let&#39;s learn hard as a new developer.</p></div><div id="induce" data-v-8e47ed44><p data-v-8e47ed44><span class="material-icons iconsizeup" data-v-8e47ed44>keyboard_double_arrow_up</span> click Menu &amp; Look Down <span class="material-icons iconsizeup" data-v-8e47ed44>keyboard_double_arrow_down</span></p></div></div></div>',1);function wc(e,t){const n=ir("router-link");return it(),rt(ye,null,[uc,T("div",fc,[T("div",dc,[T("ul",null,[T("li",null,[oe(n,{to:"/"},{default:at(()=>[hc]),_:1})]),T("li",null,[oe(n,{to:"/Lab"},{default:at(()=>[pc]),_:1})]),T("li",null,[oe(n,{to:"/Technology"},{default:at(()=>[mc]),_:1})]),T("li",null,[oe(n,{to:"/Award"},{default:at(()=>[gc]),_:1})]),T("li",null,[oe(n,{to:"/News"},{default:at(()=>[vc]),_:1})]),T("li",null,[oe(n,{to:"/Survey"},{default:at(()=>[bc]),_:1})])])]),_c])],64)}var yc=ot(cc,[["render",wc],["__scopeId","data-v-8e47ed44"]]);const xc={},Ec=e=>(ws("data-v-1eb38957"),e=e(),ys(),e),Cc={id:"wrap",class:"color footerfont"},Pc=Ec(()=>T("a",{href:"https://github.com/seojaeohcode",target:"_blank",class:"fontsize"},[T("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[T("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]),T("p",{id:"creator"},"Developer: SeoJaeOh")],-1)),Tc=[Pc];function Ac(e,t){return it(),rt("div",Cc,Tc)}var Rc=ot(xc,[["render",Ac],["__scopeId","data-v-1eb38957"]]);const Ic={name:"App",setup(e){return(t,n)=>{const s=ir("router-view");return it(),rt(ye,null,[oe(yc),oe(s),oe(Rc)],64)}}};/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const xt=typeof window!="undefined";function Mc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Z=Object.assign;function Nn(e,t){const n={};for(const s in t){const i=t[s];n[s]=ke(i)?i.map(e):e(i)}return n}const Dt=()=>{},ke=Array.isArray,Oc=/\/$/,Sc=e=>e.replace(Oc,"");function $n(e,t,n="/"){let s,i={},r="",o="";const c=t.indexOf("#");let l=t.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(s=t.slice(0,l),r=t.slice(l+1,c>-1?c:t.length),i=e(r)),c>-1&&(s=s||t.slice(0,c),o=t.slice(c,t.length)),s=Nc(s!=null?s:t,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Lc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ri(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function kc(e,t,n){const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Rt(t.matched[s],n.matched[i])&&wr(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Rt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function wr(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Fc(e[n],t[n]))return!1;return!0}function Fc(e,t){return ke(e)?oi(e,t):ke(t)?oi(t,e):e===t}function oi(e,t){return ke(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Nc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Zt;(function(e){e.pop="pop",e.push="push"})(Zt||(Zt={}));var Kt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Kt||(Kt={}));function $c(e){if(!e)if(xt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Sc(e)}const Hc=/^[^#]+#/;function jc(e,t){return e.replace(Hc,"#")+t}function Bc(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Mn=()=>({left:window.pageXOffset,top:window.pageYOffset});function Uc(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Bc(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function li(e,t){return(history.state?history.state.position-t:-1)+e}const ns=new Map;function qc(e,t){ns.set(e,t)}function zc(e){const t=ns.get(e);return ns.delete(e),t}let Dc=()=>location.protocol+"//"+location.host;function yr(e,t){const{pathname:n,search:s,hash:i}=t,r=e.indexOf("#");if(r>-1){let c=i.includes(e.slice(r))?e.slice(r).length:1,l=i.slice(c);return l[0]!=="/"&&(l="/"+l),ri(l,"")}return ri(n,e)+s+i}function Kc(e,t,n,s){let i=[],r=[],o=null;const c=({state:p})=>{const _=yr(e,location),A=n.value,L=t.value;let I=0;if(p){if(n.value=_,t.value=p,o&&o===A){o=null;return}I=L?p.position-L.position:0}else s(_);i.forEach(R=>{R(n.value,A,{delta:I,type:Zt.pop,direction:I?I>0?Kt.forward:Kt.back:Kt.unknown})})};function l(){o=n.value}function f(p){i.push(p);const _=()=>{const A=i.indexOf(p);A>-1&&i.splice(A,1)};return r.push(_),_}function u(){const{history:p}=window;!p.state||p.replaceState(Z({},p.state,{scroll:Mn()}),"")}function h(){for(const p of r)p();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:f,destroy:h}}function ci(e,t,n,s=!1,i=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?Mn():null}}function Wc(e){const{history:t,location:n}=window,s={value:yr(e,n)},i={value:t.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,f,u){const h=e.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+l:Dc()+e+l;try{t[u?"replaceState":"pushState"](f,"",p),i.value=f}catch(_){console.error(_),n[u?"replace":"assign"](p)}}function o(l,f){const u=Z({},t.state,ci(i.value.back,l,i.value.forward,!0),f,{position:i.value.position});r(l,u,!0),s.value=l}function c(l,f){const u=Z({},i.value,t.state,{forward:l,scroll:Mn()});r(u.current,u,!0);const h=Z({},ci(s.value,l,null),{position:u.position+1},f);r(l,h,!1),s.value=l}return{location:s,state:i,push:c,replace:o}}function Vc(e){e=$c(e);const t=Wc(e),n=Kc(e,t.state,t.location,t.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Z({location:"",base:e,go:s,createHref:jc.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Yc(e){return typeof e=="string"||e&&typeof e=="object"}function xr(e){return typeof e=="string"||typeof e=="symbol"}const Xe={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Er=Symbol("");var ai;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ai||(ai={}));function It(e,t){return Z(new Error,{type:e,[Er]:!0},t)}function qe(e,t){return e instanceof Error&&Er in e&&(t==null||!!(e.type&t))}const ui="[^/]+?",Xc={sensitive:!1,strict:!1,start:!0,end:!0},Qc=/[.+*?^${}()[\]/\\]/g;function Jc(e,t){const n=Z({},Xc,t),s=[];let i=n.start?"^":"";const r=[];for(const f of e){const u=f.length?[]:[90];n.strict&&!f.length&&(i+="/");for(let h=0;h<f.length;h++){const p=f[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(i+="/"),i+=p.value.replace(Qc,"\\$&"),_+=40;else if(p.type===1){const{value:A,repeatable:L,optional:I,regexp:R}=p;r.push({name:A,repeatable:L,optional:I});const $=R||ui;if($!==ui){_+=10;try{new RegExp(`(${$})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${A}" (${$}): `+W.message)}}let z=L?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;h||(z=I&&f.length<2?`(?:/${z})`:"/"+z),I&&(z+="?"),i+=z,_+=20,I&&(_+=-8),L&&(_+=-20),$===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(f){const u=f.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const _=u[p]||"",A=r[p-1];h[A.name]=_&&A.repeatable?_.split("/"):_}return h}function l(f){let u="",h=!1;for(const p of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of p)if(_.type===0)u+=_.value;else if(_.type===1){const{value:A,repeatable:L,optional:I}=_,R=A in f?f[A]:"";if(ke(R)&&!L)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const $=ke(R)?R.join("/"):R;if(!$)if(I)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${A}"`);u+=$}}return u||"/"}return{re:o,score:s,keys:r,parse:c,stringify:l}}function Zc(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Gc(e,t){let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){const r=Zc(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(fi(s))return 1;if(fi(i))return-1}return i.length-s.length}function fi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ea={type:0,value:""},ta=/[a-zA-Z0-9_]/;function na(e){if(!e)return[[]];if(e==="/")return[[ea]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(_){throw new Error(`ERR (${n})/"${f}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let c=0,l,f="",u="";function h(){!f||(n===0?r.push({type:0,value:f}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:f,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;c<e.length;){if(l=e[c++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(f&&h(),o()):l===":"?(h(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:ta.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),h(),o(),i}function sa(e,t,n){const s=Jc(na(e.path),n),i=Z(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function ia(e,t){const n=[],s=new Map;t=hi({strict:!1,end:!0,sensitive:!1},t);function i(u){return s.get(u)}function r(u,h,p){const _=!p,A=oa(u);A.aliasOf=p&&p.record;const L=hi(t,u),I=[A];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const W of z)I.push(Z({},A,{components:p?p.record.components:A.components,path:W,aliasOf:p?p.record:A}))}let R,$;for(const z of I){const{path:W}=z;if(h&&W[0]!=="/"){const re=h.record.path,de=re[re.length-1]==="/"?"":"/";z.path=h.record.path+(W&&de+W)}if(R=sa(z,h,L),p?p.alias.push(R):($=$||R,$!==R&&$.alias.push(R),_&&u.name&&!di(R)&&o(u.name)),A.children){const re=A.children;for(let de=0;de<re.length;de++)r(re[de],R,p&&p.children[de])}p=p||R,l(R)}return $?()=>{o($)}:Dt}function o(u){if(xr(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function l(u){let h=0;for(;h<n.length&&Gc(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Cr(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!di(u)&&s.set(u.record.name,u)}function f(u,h){let p,_={},A,L;if("name"in u&&u.name){if(p=s.get(u.name),!p)throw It(1,{location:u});L=p.record.name,_=Z(ra(h.params,p.keys.filter($=>!$.optional).map($=>$.name)),u.params),A=p.stringify(_)}else if("path"in u)A=u.path,p=n.find($=>$.re.test(A)),p&&(_=p.parse(A),L=p.record.name);else{if(p=h.name?s.get(h.name):n.find($=>$.re.test(h.path)),!p)throw It(1,{location:u,currentLocation:h});L=p.record.name,_=Z({},h.params,u.params),A=p.stringify(_)}const I=[];let R=p;for(;R;)I.unshift(R.record),R=R.parent;return{name:L,path:A,params:_,matched:I,meta:ca(I)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:f,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function ra(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function oa(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:la(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function la(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function di(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ca(e){return e.reduce((t,n)=>Z(t,n.meta),{})}function hi(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Cr(e,t){return t.children.some(n=>n===e||Cr(e,n))}const Pr=/#/g,aa=/&/g,ua=/\//g,fa=/=/g,da=/\?/g,Tr=/\+/g,ha=/%5B/g,pa=/%5D/g,Ar=/%5E/g,ma=/%60/g,Rr=/%7B/g,ga=/%7C/g,Ir=/%7D/g,va=/%20/g;function Ts(e){return encodeURI(""+e).replace(ga,"|").replace(ha,"[").replace(pa,"]")}function ba(e){return Ts(e).replace(Rr,"{").replace(Ir,"}").replace(Ar,"^")}function ss(e){return Ts(e).replace(Tr,"%2B").replace(va,"+").replace(Pr,"%23").replace(aa,"%26").replace(ma,"`").replace(Rr,"{").replace(Ir,"}").replace(Ar,"^")}function _a(e){return ss(e).replace(fa,"%3D")}function wa(e){return Ts(e).replace(Pr,"%23").replace(da,"%3F")}function ya(e){return e==null?"":wa(e).replace(ua,"%2F")}function vn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function xa(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Tr," "),o=r.indexOf("="),c=vn(o<0?r:r.slice(0,o)),l=o<0?null:vn(r.slice(o+1));if(c in t){let f=t[c];ke(f)||(f=t[c]=[f]),f.push(l)}else t[c]=l}return t}function pi(e){let t="";for(let n in e){const s=e[n];if(n=_a(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(ke(s)?s.map(r=>r&&ss(r)):[s&&ss(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function Ea(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=ke(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const Ca=Symbol(""),mi=Symbol(""),As=Symbol(""),Mr=Symbol(""),is=Symbol("");function Ft(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ze(e,t,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,c)=>{const l=h=>{h===!1?c(It(4,{from:n,to:t})):h instanceof Error?c(h):Yc(h)?c(It(2,{from:t,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},f=e.call(s&&s.instances[i],t,n,l);let u=Promise.resolve(f);e.length<3&&(u=u.then(l)),u.catch(h=>c(h))})}function Hn(e,t,n,s){const i=[];for(const r of e)for(const o in r.components){let c=r.components[o];if(!(t!=="beforeRouteEnter"&&!r.instances[o]))if(Pa(c)){const f=(c.__vccOpts||c)[t];f&&i.push(Ze(f,n,s,r,o))}else{let l=c();i.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Mc(f)?f.default:f;r.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&Ze(p,n,s,r,o)()}))}}return i}function Pa(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function gi(e){const t=tt(As),n=tt(Mr),s=Te(()=>t.resolve(Tt(e.to))),i=Te(()=>{const{matched:l}=s.value,{length:f}=l,u=l[f-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(Rt.bind(null,u));if(p>-1)return p;const _=vi(l[f-2]);return f>1&&vi(u)===_&&h[h.length-1].path!==_?h.findIndex(Rt.bind(null,l[f-2])):p}),r=Te(()=>i.value>-1&&Ia(n.params,s.value.params)),o=Te(()=>i.value>-1&&i.value===n.matched.length-1&&wr(n.params,s.value.params));function c(l={}){return Ra(l)?t[Tt(e.replace)?"replace":"push"](Tt(e.to)).catch(Dt):Promise.resolve()}return{route:s,href:Te(()=>s.value.href),isActive:r,isExactActive:o,navigate:c}}const Ta=Zi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gi,setup(e,{slots:t}){const n=Gt(gi(e)),{options:s}=tt(As),i=Te(()=>({[bi(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[bi(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:br("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Aa=Ta;function Ra(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ia(e,t){for(const n in t){const s=t[n],i=e[n];if(typeof s=="string"){if(s!==i)return!1}else if(!ke(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function vi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const bi=(e,t,n)=>e!=null?e:t!=null?t:n,Ma=Zi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=tt(is),i=Te(()=>e.route||s.value),r=tt(mi,0),o=Te(()=>{let f=Tt(r);const{matched:u}=i.value;let h;for(;(h=u[f])&&!h.components;)f++;return f}),c=Te(()=>i.value.matched[o.value]);ln(mi,Te(()=>o.value+1)),ln(Ca,c),ln(is,i);const l=Co();return cn(()=>[l.value,c.value,e.name],([f,u,h],[p,_,A])=>{u&&(u.instances[h]=f,_&&_!==u&&f&&f===p&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),f&&u&&(!_||!Rt(u,_)||!p)&&(u.enterCallbacks[h]||[]).forEach(L=>L(f))},{flush:"post"}),()=>{const f=i.value,u=e.name,h=c.value,p=h&&h.components[u];if(!p)return _i(n.default,{Component:p,route:f});const _=h.props[u],A=_?_===!0?f.params:typeof _=="function"?_(f):_:null,I=br(p,Z({},A,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return _i(n.default,{Component:I,route:f})||I}}});function _i(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Oa=Ma;function Sa(e){const t=ia(e.routes,e),n=e.parseQuery||xa,s=e.stringifyQuery||pi,i=e.history,r=Ft(),o=Ft(),c=Ft(),l=Po(Xe);let f=Xe;xt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Nn.bind(null,g=>""+g),h=Nn.bind(null,ya),p=Nn.bind(null,vn);function _(g,O){let C,S;return xr(g)?(C=t.getRecordMatcher(g),S=O):S=g,t.addRoute(S,C)}function A(g){const O=t.getRecordMatcher(g);O&&t.removeRoute(O)}function L(){return t.getRoutes().map(g=>g.record)}function I(g){return!!t.getRecordMatcher(g)}function R(g,O){if(O=Z({},O||l.value),typeof g=="string"){const H=$n(n,g,O.path),a=t.resolve({path:H.path},O),d=i.createHref(H.fullPath);return Z(H,a,{params:p(a.params),hash:vn(H.hash),redirectedFrom:void 0,href:d})}let C;if("path"in g)C=Z({},g,{path:$n(n,g.path,O.path).path});else{const H=Z({},g.params);for(const a in H)H[a]==null&&delete H[a];C=Z({},g,{params:h(g.params)}),O.params=h(O.params)}const S=t.resolve(C,O),X=g.hash||"";S.params=u(p(S.params));const ee=Lc(s,Z({},g,{hash:ba(X),path:S.path})),U=i.createHref(ee);return Z({fullPath:ee,hash:X,query:s===pi?Ea(g.query):g.query||{}},S,{redirectedFrom:void 0,href:U})}function $(g){return typeof g=="string"?$n(n,g,l.value.path):Z({},g)}function z(g,O){if(f!==g)return It(8,{from:O,to:g})}function W(g){return be(g)}function re(g){return W(Z($(g),{replace:!0}))}function de(g){const O=g.matched[g.matched.length-1];if(O&&O.redirect){const{redirect:C}=O;let S=typeof C=="function"?C(g):C;return typeof S=="string"&&(S=S.includes("?")||S.includes("#")?S=$(S):{path:S},S.params={}),Z({query:g.query,hash:g.hash,params:"path"in S?{}:g.params},S)}}function be(g,O){const C=f=R(g),S=l.value,X=g.state,ee=g.force,U=g.replace===!0,H=de(C);if(H)return be(Z($(H),{state:X,force:ee,replace:U}),O||C);const a=C;a.redirectedFrom=O;let d;return!ee&&kc(s,S,C)&&(d=It(16,{to:a,from:S}),vt(S,S,!0,!1)),(d?Promise.resolve(d):ne(a,S)).catch(m=>qe(m)?qe(m,2)?m:_e(m):G(m,a,S)).then(m=>{if(m){if(qe(m,2))return be(Z({replace:U},$(m.to),{state:X,force:ee}),O||a)}else m=ae(a,S,!0,U,X);return ie(a,S,m),m})}function q(g,O){const C=z(g,O);return C?Promise.reject(C):Promise.resolve()}function ne(g,O){let C;const[S,X,ee]=La(g,O);C=Hn(S.reverse(),"beforeRouteLeave",g,O);for(const H of S)H.leaveGuards.forEach(a=>{C.push(Ze(a,g,O))});const U=q.bind(null,g,O);return C.push(U),_t(C).then(()=>{C=[];for(const H of r.list())C.push(Ze(H,g,O));return C.push(U),_t(C)}).then(()=>{C=Hn(X,"beforeRouteUpdate",g,O);for(const H of X)H.updateGuards.forEach(a=>{C.push(Ze(a,g,O))});return C.push(U),_t(C)}).then(()=>{C=[];for(const H of g.matched)if(H.beforeEnter&&!O.matched.includes(H))if(ke(H.beforeEnter))for(const a of H.beforeEnter)C.push(Ze(a,g,O));else C.push(Ze(H.beforeEnter,g,O));return C.push(U),_t(C)}).then(()=>(g.matched.forEach(H=>H.enterCallbacks={}),C=Hn(ee,"beforeRouteEnter",g,O),C.push(U),_t(C))).then(()=>{C=[];for(const H of o.list())C.push(Ze(H,g,O));return C.push(U),_t(C)}).catch(H=>qe(H,8)?H:Promise.reject(H))}function ie(g,O,C){for(const S of c.list())S(g,O,C)}function ae(g,O,C,S,X){const ee=z(g,O);if(ee)return ee;const U=O===Xe,H=xt?history.state:{};C&&(S||U?i.replace(g.fullPath,Z({scroll:U&&H&&H.scroll},X)):i.push(g.fullPath,X)),l.value=g,vt(g,O,C,U),_e()}let ue;function Re(){ue||(ue=i.listen((g,O,C)=>{if(!Lt.listening)return;const S=R(g),X=de(S);if(X){be(Z(X,{replace:!0}),S).catch(Dt);return}f=S;const ee=l.value;xt&&qc(li(ee.fullPath,C.delta),Mn()),ne(S,ee).catch(U=>qe(U,12)?U:qe(U,2)?(be(U.to,S).then(H=>{qe(H,20)&&!C.delta&&C.type===Zt.pop&&i.go(-1,!1)}).catch(Dt),Promise.reject()):(C.delta&&i.go(-C.delta,!1),G(U,S,ee))).then(U=>{U=U||ae(S,ee,!1),U&&(C.delta&&!qe(U,8)?i.go(-C.delta,!1):C.type===Zt.pop&&qe(U,20)&&i.go(-1,!1)),ie(S,ee,U)}).catch(Dt)}))}let Ve=Ft(),gt=Ft(),le;function G(g,O,C){_e(g);const S=gt.list();return S.length?S.forEach(X=>X(g,O,C)):console.error(g),Promise.reject(g)}function Y(){return le&&l.value!==Xe?Promise.resolve():new Promise((g,O)=>{Ve.add([g,O])})}function _e(g){return le||(le=!g,Re(),Ve.list().forEach(([O,C])=>g?C(g):O()),Ve.reset()),g}function vt(g,O,C,S){const{scrollBehavior:X}=e;if(!xt||!X)return Promise.resolve();const ee=!C&&zc(li(g.fullPath,0))||(S||!C)&&history.state&&history.state.scroll||null;return Ui().then(()=>X(g,O,ee)).then(U=>U&&Uc(U)).catch(U=>G(U,g,O))}const Ue=g=>i.go(g);let Fe;const Ce=new Set,Lt={currentRoute:l,listening:!0,addRoute:_,removeRoute:A,hasRoute:I,getRoutes:L,resolve:R,options:e,push:W,replace:re,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:r.add,beforeResolve:o.add,afterEach:c.add,onError:gt.add,isReady:Y,install(g){const O=this;g.component("RouterLink",Aa),g.component("RouterView",Oa),g.config.globalProperties.$router=O,Object.defineProperty(g.config.globalProperties,"$route",{enumerable:!0,get:()=>Tt(l)}),xt&&!Fe&&l.value===Xe&&(Fe=!0,W(i.location).catch(X=>{}));const C={};for(const X in Xe)C[X]=Te(()=>l.value[X]);g.provide(As,O),g.provide(Mr,Gt(C)),g.provide(is,l);const S=g.unmount;Ce.add(g),g.unmount=function(){Ce.delete(g),Ce.size<1&&(f=Xe,ue&&ue(),ue=null,l.value=Xe,Fe=!1,le=!1),S()}}};return Lt}function _t(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function La(e,t){const n=[],s=[],i=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const c=t.matched[o];c&&(e.matched.find(f=>Rt(f,c))?s.push(c):n.push(c));const l=e.matched[o];l&&(t.matched.find(f=>Rt(f,l))||i.push(l))}return[n,s,i]}var ka="/assets/aquarius.db0ca3cb.png",Fa="/assets/pisces.95a90473.png",Na="/assets/aries.70088db9.png",$a="/assets/taurus.0a23aa17.png",Ha="/assets/gemini.8e8caa73.png",ja="/assets/cancer.f8564ade.png",Ba="/assets/Leo.beed7447.png",Ua="/assets/virgo.81e57a84.png",qa="/assets/libra.dd87492a.png",za="/assets/scorpio.6b2b6f53.png",Da="/assets/sagittarius.cf693c3a.png",Ka="/assets/capricon.a6db3c14.png";const wi=[ka,Fa,Na,$a,Ha,ja,Ba,Ua,qa,za,Da,Ka],Wa={mounted(){let e=1;const t=document.getElementById("constellation");t.classList.add("fade"),t.src=`${wi[0]}`,setInterval(()=>{t.src=`${wi[e]}`,e>10?e=0:e++},6e3)}},Va=mr('<div id="linktext" data-v-18ad325e> ABOUT </div><div id="wrap" data-v-18ad325e><div id="zodiacimg" data-v-18ad325e><img src="" alt="" id="constellation" class="" data-v-18ad325e></div><div id="explain" data-v-18ad325e><div id="why" data-v-18ad325e><p data-v-18ad325e> Why did I make Milky Way? </p><p data-v-18ad325e> Knowledge is like a star. </p><p data-v-18ad325e> If you look at the pattern, </p><p data-v-18ad325e> the stars look like constellations. </p><p data-v-18ad325e> If you can&#39;t find the pattern, </p><p data-v-18ad325e> stars are just scattered stones. </p></div><div id="what" data-v-18ad325e><p data-v-18ad325e> What am I going to show? </p><p data-v-18ad325e> Lab : </p><p data-v-18ad325e> I&#39;ll show you the codes. </p><p data-v-18ad325e> The remaining parts : </p><p data-v-18ad325e> Various information about technology. </p></div><div id="how" data-v-18ad325e><p data-v-18ad325e> How am I going to show it? </p><p data-v-18ad325e> I&#39;ll show you through the slide show. </p></div></div></div>',2);function Ya(e,t,n,s,i,r){return Va}var Xa=ot(Wa,[["render",Ya],["__scopeId","data-v-18ad325e"]]);const Qa={},Ja=T("h2",null,"Award",-1),Za=[Ja];function Ga(e,t){return it(),rt("div",null,Za)}var eu=ot(Qa,[["render",Ga]]),tu="/assets/logo.03d6d6da.png",nu="/assets/box_img.4b452bfe.jpg";const Nt=[`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #wrap1{
                width: 100%;
                margin: 0 auto;
                text-align: justify;
                text-shadow: 2px 2px 2px black;
            }

        #wrap1 div:last-child {
            margin-bottom: 0;
        }
        
        #wrap1 div{
            padding-right: 1rem;
            padding-left: 1rem;
        }

        @media (min-width:320px)and (max-width:767px) {
            #wrap1 div{
                font-size: 5vw;
            }
        }

        @media (min-width: 768px) and (max-width:1024px) {
            #wrap1 div{
                font-size: 3.5vw;
            }
        }

        @media (min-width: 1025px) {
            #wrap1 div{
                font-size: 2vw;
            }
        }
    </style>
    <title>Document</title>
</head>

<body>
    <div id="wrap1">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget massa sed nisi consectetur convallis. Maecenas gravida eros sit amet consectetur blandit. Vivamus nulla nisl, aliquet vitae felis rhoncus, ornare imperdiet nibh. Etiam rhoncus purus ac consectetur ornare. 
        </div>
        <div>Aenean fringilla elit non dignissim sodales. Nullam et mauris scelerisque, venenatis lacus vitae, scelerisque orci. Nulla finibus, erat maximus placerat euismod, nisi libero fringilla nulla, eu pharetra orci enim quis nisi. Aliquam bibendum nisi ac nulla sodales, sed fringilla purus vulputate. 
        </div>
        <div>Praesent volutpat lectus at finibus blandit. Integer euismod vestibulum est sed lacinia. Fusce fermentum commodo purus ut venenatis. Ut maximus dignissim efficitur. Praesent faucibus elementum purus, consequat maximus elit tempus ac. Curabitur volutpat congue nisl, at aliquam nisl accumsan bibendum.
        </div>
    </div>
</body>

</html>`,`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #wrap1{
                width: 100%;
                margin: 0 auto;
                text-align: justify;
                text-shadow: 2px 2px 2px black;
            }
            
        #wrap1 p:last-child{
                margin-bottom: 0;
                padding-bottom: 3rem;
            }
        
        #wrap1 p{
            padding-right: 1rem;
            padding-left: 1rem;
        }
        
        @media (min-width:320px)and (max-width:767px) {
            .font{
                font-size: 5vw;
            }
        }

        @media (min-width: 768px) and (max-width:1024px) {
            .font{
                font-size: 3.5vw;
            }
        }

        @media (min-width: 1025px) {
            .font{
                font-size: 2vw;
            }
        }
    </style>
    <title>Document</title>
</head>

<body>
    <div id="wrap1" class="font">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget massa sed nisi consectetur convallis. Maecenas gravida eros sit amet consectetur blandit. Vivamus nulla nisl, aliquet vitae felis rhoncus, ornare imperdiet nibh. Etiam rhoncus purus ac consectetur ornare. 
        </p>
        <p>Aenean fringilla elit non dignissim sodales. Nullam et mauris scelerisque, venenatis lacus vitae, scelerisque orci. Nulla finibus, erat maximus placerat euismod, nisi libero fringilla nulla, eu pharetra orci enim quis nisi. Aliquam bibendum nisi ac nulla sodales, sed fringilla purus vulputate. 
        </p>
        <p>Praesent volutpat lectus at finibus blandit. Integer euismod vestibulum est sed lacinia. Fusce fermentum commodo purus ut venenatis. Ut maximus dignissim efficitur. Praesent faucibus elementum purus, consequat maximus elit tempus ac. Curabitur volutpat congue nisl, at aliquam nisl accumsan bibendum.
        </p>
    </div>
</body>

</html>`,`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #wrap1{
                width: 90%;
                margin: 0 auto;
                text-align: justify;
                text-shadow: 2px 2px 2px black;
            }
            
        #wrap1 span:last-child{
                margin-bottom: 0;
                padding-bottom: 3rem;
            }
        
        #wrap1 span{
            padding-right: 1rem;
            padding-left: 1rem;
        }
        
        @media (min-width:320px)and (max-width:767px) {
            .font{
                font-size: 5vw;
            }
        }

        @media (min-width: 768px) and (max-width:1024px) {
            .font{
                font-size: 3.5vw;
            }
        }

        @media (min-width: 1025px) {
            .font{
                font-size: 2vw;
            }
        }
    </style>
    <title>Document</title>
</head>

<body>
    <div id="wrap1" class="font">
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget massa sed nisi consectetur convallis. Maecenas gravida eros sit amet consectetur blandit. Vivamus nulla nisl, aliquet vitae felis rhoncus, ornare imperdiet nibh. Etiam rhoncus purus ac consectetur ornare. 
        </span>
        <span>Aenean fringilla elit non dignissim sodales. Nullam et mauris scelerisque, venenatis lacus vitae, scelerisque orci. Nulla finibus, erat maximus placerat euismod, nisi libero fringilla nulla, eu pharetra orci enim quis nisi. Aliquam bibendum nisi ac nulla sodales, sed fringilla purus vulputate. 
        </span>
        <span>Praesent volutpat lectus at finibus blandit. Integer euismod vestibulum est sed lacinia. Fusce fermentum commodo purus ut venenatis. Ut maximus dignissim efficitur. Praesent faucibus elementum purus, consequat maximus elit tempus ac. Curabitur volutpat congue nisl, at aliquam nisl accumsan bibendum.
        </span>
    </div>
</body>

</html>`,`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #wrap1{
                width: 100%;
                margin: 0 auto;
                text-align: justify;
                position:relative;
            }
        table{
            color:black;
        }
        table:first-child tr{
            background: #eee;
        }
        table:last-child tr:nth-child(n+2){
            background: #eee;
        }
        #wrap1 table:last-child{
            
        }
        @media (min-width:320px)and (max-width:767px) {
            #wrap1 table:first-child{
            font-size: 4vw;
            }
            
            #wrap1 table:last-child{
            font-size: 5vw;
            }
        }

        @media (min-width: 768px) and (max-width:1024px) {
            #wrap1 table:first-child{
            font-size: 4vw;
            }
            
            #wrap1 table:last-child{
            font-size: 5vw;
            }
        }

        @media (min-width: 1025px) {
            #wrap1 table:first-child{
            font-size: 4vw;
            }
            
            #wrap1 table:last-child{
            font-size: 4vw;
            }
        }
    </style>
    <title>Document</title>
</head>

<body>
    <div id="wrap1">
        <table border="1" align = "center" width="150">
            <th>table</th>
            <th>making</th>
            <tr>
                <td>first cell</td>
                <td>second cell</td>
            </tr>
            <tr>
                <td>first cell</td>
                <td>second cell</td>
        </table>

        <table border="1" bordercolor="blue" align = "center" width="150">
            <tr bgcolor="blue" align ="center">
            <p><td colspan = "3" span style="color:white">today income/spending</td></p>
            </tr>
            <tr align = "center" bgcolor="skybule">
            <td>content</td>
            <td>income</td>
            <td>spending</td>
            </tr>
            <tr>
            <td>salary</td>
            <td>1,000,000</td>
            <td></td>
            </tr>
            <tr>
            <td>lunch</td>
            <td></td>
            <td>5,000</td>
            </tr>
            <tr>
            <td>present</td>
            <td></td>
            <td>30,000</td>
            </tr>
            <tr>
            <td rowspan="3" align = "center" bgcolor="skyblue">sum</td>
            <td>income</td>
            <td>spending</td>
            </tr>
            <tr>
            <td>1,000,000</td>
            <td>35,000</td>	
            </tr>
            <tr>
            <td>change</td>
            <td>965,000</td>	
            </tr>
        </table>
    </div>
</body>

</html>`,`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #wrap1{
                width: 100%;
                margin: 0 auto;
            }
        @media (min-width:320px)and (max-width:767px) {
            img{
            width: 60vw;
        }
        }

        @media (min-width: 768px) and (max-width:1024px) {
            img{
            width: 20vw;
        }
        }

        @media (min-width: 1025px) {
            img{
            width: 30vw;
        }
        }
    </style>
    <title>Document</title>
</head>

<body>
    <div id="wrap1">
        <img src=${tu} alt="Vue!">
    </div>
</body>

</html>`,`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #wrap {
            width: 100%;
            margin: 0 auto;
        }
        @media (min-width:320px)and (max-width:767px) {
            #wrap {
                font-size: 4vw;
            }
            input{
                width: 35%;
                height: 4vw;
                vertical-align: middle;
                margin : 0.5rem;
            }
        #check{
            width: 10%;
        }    
        }

        @media (min-width: 768px) and (max-width:1024px) {
            #wrap {
                font-size: 4vw;
            }
            input{
                width: 35%;
                height: 4vw;
                vertical-align: middle;
                margin : 0.5rem;
            }
        #check{
            width: 10%;
        }  
        }

        @media (min-width: 1025px) {
            #wrap {
                font-size: 3vw;
            }
            input{
                width: 35%;
                height: 4vw;
                vertical-align: middle;
                margin : 0.5rem;
            }
            button{
                height: 4vw;
                vertical-align: middle;
            }
            select{
                height: 4vw;
                vertical-align: middle;
            }
        #check{
            width: 10%;
        }  
        }
    </style>
    <title>Document</title>
</head>

<body>
    <div id="wrap">
        <h1>\uD544\uC218\uC815\uBCF4</h1>
        <label>\uC774\uB984</label><input type="text" maxlength="4" size="10" placeholder="\uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694" autofocus required><br>
        <label>\uD68C\uC6D0\uB4F1\uAE09</label><input type="text" size="10" readonly value="\uC2E0\uC785\uD68C\uC6D0"><br>
        <label>\uC544\uC774\uB514</label><input type="text" size="20" placeholder="\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694" required><button>\uC911\uBCF5\uD655\uC778</button><br>
        <label>\uBE44\uBC00\uBC88\uD638</label><input type="password" placeholder="\uC22B\uC790\uD3EC\uD568 10\uC790 \uBE44\uBC00\uBC88\uD638" size="20" required><br>
        <label>\uBE44\uBC00\uBC88\uD638\uD655\uC778</label><input type="password" placeholder="\uB2E4\uC2DC \uD55C\uBC88 \uBE44\uBC00\uBC88\uD638 \uC785\uB825" size="20" required><br>
        <label>\uD734\uB300\uD3F0 \uBC88\uD638</label>
        <select>
            <option>\uC120\uD0DD</option>
            <option>010</option>
            <option>011</option>
            <option>016</option>
            <option>017</option>
        </select>
        - <input type="text" size="6" required> - <input type="text" size="6" required><button>\uC911\uBCF5\uD655\uC778</button><br>
        <label>\uC774\uBA54\uC77C</label><input type="text" size="10" required>@<input type="text" size="15" required>
        <select>
            <option>\uC9C1\uC811\uC785\uB825</option>
            <option>naver.com</option>
            <option>daum.net</option>
            <option>gmail.com</option>
        </select>
        <button>\uC911\uBCF5\uD655\uC778</button><br>
        <input type="checkbox" checked id="check">\uC815\uBCF4\uC218\uC2E0\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.<br>
    </div>
</body>

</html>`,`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #wrap {
            width: 100%;
            margin: 0 auto;
        }
        iframe{
            width: 75vw;
            height: 50vw;
        }
        @media (min-width:320px)and (max-width:767px) {
            
        }

        @media (min-width: 768px) and (max-width:1024px) {
            
        }

        @media (min-width: 1025px) {
            
        }
    </style>
    <title>Document</title>
</head>

<body>
    <div id="wrap">
        <iframe src="https://www.youtube.com/embed/t0Q2otsqC4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</body>

</html>`],$t=[`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #wrap2{
            width: 100%;
            font: 10px;
        }
        #Box{
            width: 6rem;
            height: 8rem;
            background: url(${nu}) no-repeat 0 0;
            animation: ball 4s steps(9) infinite ;
            margin: 0 auto;
            margin-top: 2rem;
            padding-bottom: 2rem;
        }
        @keyframes ball{
            from{
                background-position: 0 0;
            }
            to{
                background-position: -72.5rem 0;
                /* \uC774\uBBF8\uC9C0\uC758 \uCD1D\uAE38\uC774 \uB2E8\uC704\uB123\uAE30 */
            }
        }
    </style>
    <title>Document</title>
</head>
<body>
    <div id="wrap1">
        <div id="Box"></div>
    </div>
</body>
</html>`,`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
    #wrap2{
        width:100%;
        margin:0 auto;
    }
        .tri1{
            border-top: 10vw solid red;
            border-right: 10vw solid pink;
            border-bottom: 10vw solid blue;
            border-left: 10vw solid yellow;
        }
        .tri5{
            width: 0;
            height: 0;
            /* alpha transparent opacity */
            border-right: 10vw solid transparent;
            border-bottom: 10vw solid blue;
            border-left: 10vw solid transparent;
        }
        .tri6{
            width: 0;
            height: 0;
            border-top: 10vw solid transparent;
            border-right: 10vw solid transparent;
            border-bottom: 10vw solid blue;
            border-left: 10vw solid yellow;
        }
    </style>
    <title>\uC0BC\uAC01\uD615\uADF8\uB9AC\uAE30</title>
</head>
<body>
<div id="wrap1">
    <div class="tri1">1</div>
    <div class="tri5">5</div>
    <div class="tri6">6</div>
</div>
</body>
</html>`],su={mounted(){let e=0,t=0;const n=document.querySelector("#htmlstorage .category"),s=document.querySelector("#htmlstorage .view"),i=document.querySelector("#cssstorage .category"),r=document.querySelector("#cssstorage .view");n.innerHTML="div vs p vs span(div)",i.innerHTML="sprite",s.innerHTML=Nt[0],r.innerHTML=$t[0];const o=document.querySelector("#jsstorage .view");console.log(o),document.getElementById("htmlminus").addEventListener("click",c),document.getElementById("htmlplus").addEventListener("click",l),document.getElementById("cssminus").addEventListener("click",f),document.getElementById("cssplus").addEventListener("click",u),document.getElementById("jsminus").addEventListener("click",h),document.getElementById("jsplus").addEventListener("click",p);function c(){e-1<0?e=Nt.length-1:e--,s.innerHTML=Nt[e],e==0?n.innerHTML="div vs p vs span(div)":e==1?n.innerHTML="div vs p vs span(p)":e==2?n.innerHTML="div vs p vs span(span)":e==3?n.innerHTML="table":e==4?n.innerHTML="image":e==5?n.innerHTML="form":e==6&&(n.innerHTML="Iframe")}function l(){e+1>=Nt.length?e=0:e++,s.innerHTML=Nt[e],e==0?n.innerHTML="div vs p vs span(div)":e==1?n.innerHTML="div vs p vs span(p)":e==2?n.innerHTML="div vs p vs span(span)":e==3?n.innerHTML="table":e==4?n.innerHTML="image":e==5?n.innerHTML="form":e==6&&(n.innerHTML="Iframe")}function f(){t-1<0?t=$t.length-1:t--,r.innerHTML=$t[t]}function u(){t+1>=$t.length?t=0:t++,r.innerHTML=$t[t]}function h(){}function p(){}},updated(){}},Or=e=>(ws("data-v-258f07b4"),e=e(),ys(),e),iu=Or(()=>T("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"},null,-1)),ru=Or(()=>T("div",{id:"wrap"},[T("div",{id:"container"},[T("div",{id:"html"},[T("div",{class:"title"},[T("div",{class:"titleimg"},[T("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[T("title",null,"HTML5"),T("path",{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"})])]),T("div",{class:"titletext"},[T("button",null,[T("span",{class:"material-icons",id:"htmlminus"},"arrow_back")]),T("span",null,"HTML VIEW"),T("button",null,[T("span",{class:"material-icons",id:"htmlplus"},"arrow_forward")])]),T("div",{id:"htmlstorage"},[T("div",{class:"category"}),T("div",{class:"view"})])])]),T("div",{id:"css"},[T("div",{class:"title"},[T("div",{class:"titleimg"},[T("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[T("title",null,"CSS3"),T("path",{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"})])]),T("div",{class:"titletext"},[T("button",null,[T("span",{class:"material-icons",id:"cssminus"},"arrow_back")]),T("span",null,"CSS VIEW"),T("button",null,[T("span",{class:"material-icons",id:"cssplus"},"arrow_forward")])]),T("div",{id:"cssstorage"},[T("div",{class:"category"}),T("div",{class:"view"})])])]),T("div",{id:"javascript"},[T("div",{class:"title"},[T("div",{class:"titleimg"},[T("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[T("title",null,"JavaScript"),T("path",{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"})])]),T("div",{class:"titletext"},[T("button",null,[T("span",{class:"material-icons",id:"jsminus"},"arrow_back")]),T("span",null,"JS VIEW"),T("button",null,[T("span",{class:"material-icons",id:"jsplus"},"arrow_forward")])]),T("div",{id:"jsstorage"},[T("div",{class:"category"}),T("div",{class:"view"})])])])])],-1));function ou(e,t,n,s,i,r){return it(),rt(ye,null,[iu,ru],64)}var lu=ot(su,[["render",ou],["__scopeId","data-v-258f07b4"]]);const cu={},au=T("h2",null,"News",-1),uu=[au];function fu(e,t){return it(),rt("div",null,uu)}var du=ot(cu,[["render",fu]]);const hu={},pu=T("h2",null,"Survey",-1),mu=[pu];function gu(e,t){return it(),rt("div",null,mu)}var vu=ot(hu,[["render",gu]]);const bu={},_u=T("h2",null,"Technology",-1),wu=[_u];function yu(e,t){return it(),rt("div",null,wu)}var xu=ot(bu,[["render",yu]]);const Eu=[{path:"/",name:"About",component:Xa},{path:"/Award",name:"Award",component:eu},{path:"/Lab",name:"Lab",component:lu},{path:"/News",name:"News",component:du},{path:"/Survey",name:"Survey",component:vu},{path:"/Technology",name:"Technology",component:xu}],Cu=Sa({history:Vc(),routes:Eu}),Pu=rc(Ic);Pu.use(Cu).mount("#app");

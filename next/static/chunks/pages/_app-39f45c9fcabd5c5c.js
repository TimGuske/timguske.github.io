(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2413)}])},9720:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return l},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return f},isThenable:function(){return s}});let l="refresh",o="navigate",u="restore",i="server-patch",a="prefetch",c="fast-refresh",f="server-action";function s(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},245:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(9082),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1032:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n(8754)._(n(7294)),l=n(4879),o=n(1572),u=n(8373),i=n(6221),a=n(5933),c=n(4167),f=n(8874),s=n(6342),d=n(245),p=n(6015),h=n(9720),b=new Set;function v(e,t,n,r,l,u){if(u||(0,o.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let l=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(b.has(l))return;b.add(l)}Promise.resolve(u?e.prefetch(t,l):e.prefetch(t,n,r)).catch(e=>{})}}function _(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let y=r.default.forwardRef(function(e,t){let n,u;let{href:b,as:y,children:j,prefetch:x=null,passHref:m,replace:O,shallow:E,scroll:g,locale:C,onClick:P,onMouseEnter:k,onTouchStart:T,legacyBehavior:M=!1,...N}=e;n=j,M&&("string"==typeof n||"number"==typeof n)&&(n=r.default.createElement("a",null,n));let R=r.default.useContext(c.RouterContext),A=r.default.useContext(f.AppRouterContext),I=null!=R?R:A,L=!R,S=!1!==x,w=null===x?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:K,as:U}=r.default.useMemo(()=>{if(!R){let e=_(b);return{href:e,as:y?_(y):e}}let[e,t]=(0,l.resolveHref)(R,b,!0);return{href:e,as:y?(0,l.resolveHref)(R,y):t||e}},[R,b,y]),F=r.default.useRef(K),H=r.default.useRef(U);M&&(u=r.default.Children.only(n));let D=M?u&&"object"==typeof u&&u.ref:t,[z,B,V]=(0,s.useIntersection)({rootMargin:"200px"}),q=r.default.useCallback(e=>{(H.current!==U||F.current!==K)&&(V(),H.current=U,F.current=K),z(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[U,D,K,V,z]);r.default.useEffect(()=>{I&&B&&S&&v(I,K,U,{locale:C},{kind:w},L)},[U,K,B,C,S,null==R?void 0:R.locale,I,L,w]);let G={ref:q,onClick(e){M||"function"!=typeof P||P(e),M&&u.props&&"function"==typeof u.props.onClick&&u.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,l,u,i,a,c,f){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,o.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[u?"replace":"push"](n,l,{shallow:i,locale:c,scroll:e}):t[u?"replace":"push"](l||n,{scroll:e})};f?r.default.startTransition(d):d()}(e,I,K,U,O,E,g,C,L)},onMouseEnter(e){M||"function"!=typeof k||k(e),M&&u.props&&"function"==typeof u.props.onMouseEnter&&u.props.onMouseEnter(e),I&&(S||!L)&&v(I,K,U,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:w},L)},onTouchStart(e){M||"function"!=typeof T||T(e),M&&u.props&&"function"==typeof u.props.onTouchStart&&u.props.onTouchStart(e),I&&(S||!L)&&v(I,K,U,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:w},L)}};if((0,i.isAbsoluteUrl)(U))G.href=U;else if(!M||m||"a"===u.type&&!("href"in u.props)){let e=void 0!==C?C:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,d.getDomainLocale)(U,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);G.href=t||(0,p.addBasePath)((0,a.addLocale)(U,e,null==R?void 0:R.defaultLocale))}return M?r.default.cloneElement(u,G):r.default.createElement("a",{...N,...G},n)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(7294),l=n(6231),o="function"==typeof IntersectionObserver,u=new Map,i=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,c=a||!o,[f,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(o){if(c||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:l,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let l=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:l},i.push(n),u.set(n,t),t}(n);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),u.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!f){let e=(0,l.requestIdleCallback)(()=>s(!0));return()=>(0,l.cancelIdleCallback)(e)}},[c,n,t,f,d.current]),[p,f,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2413:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),l=n(1664),o=n.n(l);function u(){return(0,r.jsx)("div",{children:(0,r.jsxs)("nav",{className:"border fixed split-nav",children:[(0,r.jsx)("div",{className:"nav-brand",children:(0,r.jsx)("h3",{children:(0,r.jsx)("a",{href:"/#",children:"Patricias Kochbuch"})})}),(0,r.jsxs)("div",{class:"collapsible",children:[(0,r.jsx)("input",{id:"collapsible1",type:"checkbox",name:"collapsible1"}),(0,r.jsxs)("label",{for:"collapsible1",children:[(0,r.jsx)("div",{class:"bar1"}),(0,r.jsx)("div",{class:"bar2"}),(0,r.jsx)("div",{class:"bar3"})]}),(0,r.jsx)("div",{class:"collapsible-body",children:(0,r.jsxs)("ul",{class:"inline",children:[(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/",className:"nav-link",children:"Startseite"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/kontakt",className:"nav-link",children:"Kontakt"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/pullover",className:"nav-link",children:"Pullover"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/benutzer",className:"nav-link",children:"Benutzer"})})]})})]})]})})}var i=n(759),a=n.n(i);function c(e){let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)("div",{className:a().main,children:t})]})}function f(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(c,{children:(0,r.jsx)(t,{...n})})}n(593)},593:function(){},759:function(e){e.exports={main:"Layout_main__BqQ1G"}},1664:function(e,t,n){e.exports=n(1032)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(2937)}),_N_E=e.O()}]);
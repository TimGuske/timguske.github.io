"use strict";(()=>{var e={};e.id=237,e.ids=[237],e.modules={1323:(e,n)=>{Object.defineProperty(n,"l",{enumerable:!0,get:function(){return function e(n,r){return r in n?n[r]:"then"in n&&"function"==typeof n.then?n.then(n=>e(n,r)):"function"==typeof n&&"default"===r?n:void 0}}})},6973:(e,n,r)=>{r.r(n),r.d(n,{config:()=>d,default:()=>P,routeModule:()=>s});var t={};r.r(t),r.d(t,{default:()=>l});var i=r(3105),o=r(5244),u=r(1323);let a=[{id:"1",name:"MeinPullover",groesse:43},{id:"2",name:"Gr\xfcner Pullover",groesse:46},{id:"3",name:"Toller Pullover",groesse:44}];function l(e,n){n.status(200).json(a)}let P=(0,u.l)(t,"default"),d=(0,u.l)(t,"config"),s=new i.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api",pathname:"/api",bundlePath:"",filename:""},userland:t})},5244:(e,n)=>{var r;Object.defineProperty(n,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},3105:(e,n,r)=>{e.exports=r(145)},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")}};var n=require("../webpack-runtime.js");n.C(e);var r=n(n.s=6973);module.exports=r})();
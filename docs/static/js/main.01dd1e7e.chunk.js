(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=(n(15),n(2)),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){o(e.target.value)}})})},j=n(10),d=function(e){e.id;var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},l=n(6),b=n.n(l),f=n(8),p=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,a,c,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=w2bG22bjvxQvCm8A2n32rD90vIv62AhX"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),console.log(i),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=p,h=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){m(e).then((function(e){setTimeout((function(){console.log(e),r({data:e,loading:!1})}),3e3)}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),r&&Object(u.jsx)("p",{className:"animate__animated flash",children:"Loading..."}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(d,Object(j.a)({},e),e.id)}))})]})},O=function(){var e=Object(a.useState)(["one Punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GigExpertApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(h,{category:e},e)}))})]})};r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.01dd1e7e.chunk.js.map
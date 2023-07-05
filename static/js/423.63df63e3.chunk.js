"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[423],{3068:function(e,r,n){n.d(r,{FL:function(){return Z},Hg:function(){return p},IQ:function(){return x},Jh:function(){return y},LJ:function(){return f},UN:function(){return v}});var t=n(1413),a=n(5861),c=n(4687),s=n.n(c),o=n(1243),i=n(3585),u=o.Z.create(i.fU),l=null;function d(){return(d=(0,a.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/configuration",e.prev=1,e.next=4,u("/configuration");case 4:return r=e.sent,l=r.data,e.abrupt("return",r.data);case 9:e.prev=9,e.t0=e.catch(1),console.error("Error in getting of API configuration:".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function f(e,r){return l.images.secure_base_url+r+e}function p(){return h.apply(this,arguments)}function h(){return h=(0,a.Z)(s().mark((function e(){var r,n,t,a,c,o=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>0&&void 0!==o[0]?o[0]:"day",n=o.length>1&&void 0!==o[1]?o[1]:"en-US",t="/trending/movie/".concat(r),a={language:n},e.prev=4,e.next=7,u(t,{params:a});case 7:return c=e.sent,e.abrupt("return",c.data.results);case 11:throw e.prev=11,e.t0=e.catch(4),console.error(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[4,11]])}))),h.apply(this,arguments)}function v(e,r){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(s().mark((function e(r,n){var a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/search/movie",a=(0,t.Z)((0,t.Z)({},i.CB),{},{query:r,page:n}),e.prev=2,e.next=5,u("/search/movie",{params:a});case 5:return c=e.sent,e.abrupt("return",c.data.results);case 9:throw e.prev=9,e.t0=e.catch(2),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function Z(e){return g.apply(this,arguments)}function g(){return g=(0,a.Z)(s().mark((function e(r){var n,t,a,c,o=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"en-US",t="/movie/".concat(r),a={language:n},e.prev=3,e.next=6,u(t,{params:a});case 6:return c=e.sent,e.abrupt("return",c.data);case 10:throw e.prev=10,e.t0=e.catch(3),console.error("Error loading movie details: ".concat(e.t0.message)),e.t0;case 14:case"end":return e.stop()}}),e,null,[[3,10]])}))),g.apply(this,arguments)}function x(e){return b.apply(this,arguments)}function b(){return b=(0,a.Z)(s().mark((function e(r){var n,t,a,c,o=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"en-US",t="/movie/".concat(r,"/credits"),a={language:n},e.prev=3,e.next=6,u(t,{params:a});case 6:return c=e.sent,e.abrupt("return",c.data.cast);case 10:throw e.prev=10,e.t0=e.catch(3),console.error(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[3,10]])}))),b.apply(this,arguments)}function y(e){return N.apply(this,arguments)}function N(){return N=(0,a.Z)(s().mark((function e(r){var n,t,a,c,o,i=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:1,t=i.length>2&&void 0!==i[2]?i[2]:"en-US",a="/movie/".concat(r,"/reviews"),c={language:t,page:n},e.prev=4,e.next=7,u(a,{params:c});case 7:return o=e.sent,e.abrupt("return",o.data);case 11:throw e.prev=11,e.t0=e.catch(4),console.error(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[4,11]])}))),N.apply(this,arguments)}!function(){d.apply(this,arguments)}()},8932:function(e,r,n){n(2791);var t=n(5316),a=n(4849),c=n(184);r.Z=function(){return(0,c.jsx)(t.Z,{show:!0,centered:!0,fullscreen:!0,contentClassName:"bg-transparent shadow-none",backdropClassName:"bg-dark",children:(0,c.jsx)(t.Z.Body,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh",backdropFilter:"blur(2px)"},children:(0,c.jsx)(a.Z,{animation:"border",role:"status"})})})}},423:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var t=n(9439),a=n(3068),c=n(2791),s=n(7689),o=n(3585),i=n(8932),u=n(1413),l=n(5987),d=n(9743),f=n(2677),p=n(9140),h=n(184),v=function(e){var r=e.author,n=e.created_at,t=e.content,a=new Date(n).toLocaleDateString("en-US",o.Zy);return(0,h.jsxs)(p.Z,{children:[(0,h.jsxs)(p.Z.Header,{children:["Written by ",(0,h.jsx)("span",{className:"text-success fw-bold",children:" ".concat(r," ")})," ","on "," ".concat(a)]}),(0,h.jsx)(p.Z.Body,{children:(0,h.jsxs)(p.Z.Text,{children:[t," "]})})]})},m=["id"],Z=function(e){var r=e.reviews;return(0,h.jsx)(d.Z,{xs:1,className:"g-4",children:r.map((function(e){var r=e.id,n=(0,l.Z)(e,m);return(0,h.jsx)(f.Z,{children:(0,h.jsx)(v,(0,u.Z)({},n))},r)}))})},g=function(){var e=(0,s.UO)().movieId,r=(0,c.useState)(null),n=(0,t.Z)(r,2),u=n[0],l=n[1],d=(0,c.useState)(o.$q.LOADING),f=(0,t.Z)(d,2),p=f[0],v=f[1];switch((0,c.useEffect)((function(){(0,a.Jh)(e).then((function(e){l(e),v(o.$q.LOADED)})).catch((function(e){return v(o.$q.LOADED)}))}),[e]),p){case o.$q.LOADING:return(0,h.jsx)(i.Z,{});case o.$q.LOADED:return(0,h.jsx)(Z,{reviews:u.results});case o.$q.ERROR:return(0,h.jsx)("p",{children:"Oops, something went wrong. Please try again later."});default:return null}}},3585:function(e,r,n){n.d(r,{$q:function(){return c},CB:function(){return a},Zy:function(){return s},fU:function(){return t}});var t={method:"GET",baseURL:"https://api.themoviedb.org/3",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGFhNzY1ZjlhMzVhOTdiNTBiZjI5NmNkZGIzZTBhNyIsInN1YiI6IjY0NTE4NGUwMzNhZDhmMDBmZWYyN2FhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryw4dh3H0xPOea1Y2cbKZvI8bFHdhr2M3oPtuPEBQes"}},a={include_adult:!1,language:"en-US",page:1},c={NO_RESULTS:"NO_RESULTS",LOADING:"LOADING",LOADED:"LOADED",ERROR:"ERROR"},s={year:"numeric",month:"long",day:"numeric"}},9140:function(e,r,n){n.d(r,{Z:function(){return k}});var t=n(1413),a=n(5987),c=n(1694),s=n.n(c),o=n(2791),i=n(162),u=n(6543),l=n(7472),d=n(184),f=["bsPrefix","className","variant","as"],p=o.forwardRef((function(e,r){var n=e.bsPrefix,c=e.className,o=e.variant,u=e.as,l=void 0===u?"img":u,p=(0,a.Z)(e,f),h=(0,i.vE)(n,"card-img");return(0,d.jsx)(l,(0,t.Z)({ref:r,className:s()(o?"".concat(h,"-").concat(o):h,c)},p))}));p.displayName="CardImg";var h=p,v=n(6040),m=["bsPrefix","className","as"],Z=o.forwardRef((function(e,r){var n=e.bsPrefix,c=e.className,u=e.as,l=void 0===u?"div":u,f=(0,a.Z)(e,m),p=(0,i.vE)(n,"card-header"),h=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:p}}),[p]);return(0,d.jsx)(v.Z.Provider,{value:h,children:(0,d.jsx)(l,(0,t.Z)((0,t.Z)({ref:r},f),{},{className:s()(c,p)}))})}));Z.displayName="CardHeader";var g=Z,x=["bsPrefix","className","bg","text","border","body","children","as"],b=(0,l.Z)("h5"),y=(0,l.Z)("h6"),N=(0,u.Z)("card-body"),w=(0,u.Z)("card-title",{Component:b}),j=(0,u.Z)("card-subtitle",{Component:y}),I=(0,u.Z)("card-link",{Component:"a"}),O=(0,u.Z)("card-text",{Component:"p"}),E=(0,u.Z)("card-footer"),D=(0,u.Z)("card-img-overlay"),L=o.forwardRef((function(e,r){var n=e.bsPrefix,c=e.className,o=e.bg,u=e.text,l=e.border,f=e.body,p=void 0!==f&&f,h=e.children,v=e.as,m=void 0===v?"div":v,Z=(0,a.Z)(e,x),g=(0,i.vE)(n,"card");return(0,d.jsx)(m,(0,t.Z)((0,t.Z)({ref:r},Z),{},{className:s()(c,g,o&&"bg-".concat(o),u&&"text-".concat(u),l&&"border-".concat(l)),children:p?(0,d.jsx)(N,{children:h}):h}))}));L.displayName="Card";var k=Object.assign(L,{Img:h,Title:w,Subtitle:j,Body:N,Link:I,Text:O,Header:g,Footer:E,ImgOverlay:D})}}]);
//# sourceMappingURL=423.63df63e3.chunk.js.map
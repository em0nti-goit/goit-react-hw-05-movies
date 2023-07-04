"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[696],{3068:function(e,a,t){t.d(a,{FL:function(){return b},Hg:function(){return v},IQ:function(){return Z},Jh:function(){return N},LJ:function(){return f},UN:function(){return p}});var r=t(1413),n=t(5861),i=t(4687),s=t.n(i),o=t(1243),c=t(3585),l=o.Z.create(c.fU),u=null;function d(){return(d=(0,n.Z)(s().mark((function e(){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/configuration",e.prev=1,e.next=4,l("/configuration");case 4:return a=e.sent,u=a.data,e.abrupt("return",a.data);case 9:e.prev=9,e.t0=e.catch(1),console.error("Error in getting of API configuration:".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function f(e,a){return u.images.secure_base_url+a+e}function v(){return m.apply(this,arguments)}function m(){return m=(0,n.Z)(s().mark((function e(){var a,t,r,n,i,o=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>0&&void 0!==o[0]?o[0]:"day",t=o.length>1&&void 0!==o[1]?o[1]:"en-US",r="/trending/movie/".concat(a),n={language:t},e.prev=4,e.next=7,l(r,{params:n});case 7:return i=e.sent,e.abrupt("return",i.data.results);case 11:throw e.prev=11,e.t0=e.catch(4),console.error(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[4,11]])}))),m.apply(this,arguments)}function p(e,a){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(a,t){var n,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/search/movie",n=(0,r.Z)((0,r.Z)({},c.CB),{},{query:a,page:t}),e.prev=2,e.next=5,l("/search/movie",{params:n});case 5:return i=e.sent,e.abrupt("return",i.data.results);case 9:throw e.prev=9,e.t0=e.catch(2),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function b(e){return x.apply(this,arguments)}function x(){return x=(0,n.Z)(s().mark((function e(a){var t,r,n,i,o=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"en-US",r="/movie/".concat(a),n={language:t},e.prev=3,e.next=6,l(r,{params:n});case 6:return i=e.sent,e.abrupt("return",i.data);case 10:throw e.prev=10,e.t0=e.catch(3),console.error("Error loading movie details: ".concat(e.t0.message)),e.t0;case 14:case"end":return e.stop()}}),e,null,[[3,10]])}))),x.apply(this,arguments)}function Z(e){return y.apply(this,arguments)}function y(){return y=(0,n.Z)(s().mark((function e(a){var t,r,n,i,o=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"en-US",r="/movie/".concat(a,"/credits"),n={language:t},e.prev=3,e.next=6,l(r,{params:n});case 6:return i=e.sent,e.abrupt("return",i.data.cast);case 10:throw e.prev=10,e.t0=e.catch(3),console.error(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[3,10]])}))),y.apply(this,arguments)}function N(e){return g.apply(this,arguments)}function g(){return g=(0,n.Z)(s().mark((function e(a){var t,r,n,i,o,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,r=c.length>2&&void 0!==c[2]?c[2]:"en-US",n="/movie/".concat(a,"/reviews"),i={language:r,page:t},e.prev=4,e.next=7,l(n,{params:i});case 7:return o=e.sent,e.abrupt("return",o.data);case 11:throw e.prev=11,e.t0=e.catch(4),console.error(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[4,11]])}))),g.apply(this,arguments)}!function(){d.apply(this,arguments)}()},8932:function(e,a,t){t(2791);var r=t(5316),n=t(4849),i=t(184);a.Z=function(){return(0,i.jsx)(r.Z,{show:!0,centered:!0,fullscreen:!0,contentClassName:"bg-transparent shadow-none",backdropClassName:"bg-dark",children:(0,i.jsx)(r.Z.Body,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh",backdropFilter:"blur(2px)"},children:(0,i.jsx)(n.Z,{animation:"border",role:"status"})})})}},5008:function(e,a,t){t.d(a,{Z:function(){return w}});var r=t(2791),n=t(1413),i=t(5987),s=t(1694),o=t.n(s),c=(t(2391),t(8580)),l=t(1561),u=t(162),d=t(9439),f=t(9007),v=t(4787),m=t(8633),p=t(184),h=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],b=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.active,s=e.disabled,c=e.eventKey,l=e.className,b=e.variant,x=e.action,Z=e.as,y=(0,i.Z)(e,h);t=(0,u.vE)(t,"list-group-item");var N=(0,v.v)((0,n.Z)({key:(0,m.h)(c,y.href),active:r},y)),g=(0,d.Z)(N,2),j=g[0],w=g[1],I=(0,f.Z)((function(e){if(s)return e.preventDefault(),void e.stopPropagation();j.onClick(e)}));s&&void 0===y.tabIndex&&(y.tabIndex=-1,y["aria-disabled"]=!0);var k=Z||(x?y.href?"a":"button":"div");return(0,p.jsx)(k,(0,n.Z)((0,n.Z)((0,n.Z)({ref:a},y),j),{},{onClick:I,className:o()(l,t,w.isActive&&"active",s&&"disabled",b&&"".concat(t,"-").concat(b),x&&"".concat(t,"-action"))}))}));b.displayName="ListGroupItem";var x=b,Z=["className","bsPrefix","variant","horizontal","numbered","as"],y=r.forwardRef((function(e,a){var t,r=(0,c.Ch)(e,{activeKey:"onSelect"}),s=r.className,d=r.bsPrefix,f=r.variant,v=r.horizontal,m=r.numbered,h=r.as,b=void 0===h?"div":h,x=(0,i.Z)(r,Z),y=(0,u.vE)(d,"list-group");return v&&(t=!0===v?"horizontal":"horizontal-".concat(v)),(0,p.jsx)(l.Z,(0,n.Z)((0,n.Z)({ref:a},x),{},{as:b,className:o()(s,y,f&&"".concat(y,"-").concat(f),t&&"".concat(y,"-").concat(t),m&&"".concat(y,"-numbered"))}))}));y.displayName="ListGroup";var N=Object.assign(y,{Item:x}),g=t(7689),j=t(1087),w=function(e){var a=e.movies,t=(0,g.TH)();return(0,p.jsx)(N,{as:"ol",numbered:!0,children:a.map((function(e){var a=e.id,r=e.title;return(0,p.jsx)(N.Item,{as:"li",children:(0,p.jsx)(j.OL,{to:"/movies/".concat(a),state:{from:t},children:r})},a)}))})}},696:function(e,a,t){t.r(a),t.d(a,{default:function(){return Ne}});var r=t(9439),n=t(3068),i=t(8932),s=t(5008),o=t(2791),c=t(1413),l=t(5987),u=t(1694),d=t.n(u),f=t(2007),v=t.n(f),m=t(184),p=["as","className","type","tooltip"],h={type:v().string,tooltip:v().bool,as:v().elementType},b=o.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,n=e.className,i=e.type,s=void 0===i?"valid":i,o=e.tooltip,u=void 0!==o&&o,f=(0,l.Z)(e,p);return(0,m.jsx)(r,(0,c.Z)((0,c.Z)({},f),{},{ref:a,className:d()(n,"".concat(s,"-").concat(u?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=h;var x=b,Z=o.createContext({}),y=t(162),N=["id","bsPrefix","className","type","isValid","isInvalid","as"],g=o.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.className,i=e.type,s=void 0===i?"checkbox":i,u=e.isValid,f=void 0!==u&&u,v=e.isInvalid,p=void 0!==v&&v,h=e.as,b=void 0===h?"input":h,x=(0,l.Z)(e,N),g=(0,o.useContext)(Z).controlId;return r=(0,y.vE)(r,"form-check-input"),(0,m.jsx)(b,(0,c.Z)((0,c.Z)({},x),{},{ref:a,type:s,id:t||g,className:d()(n,r,f&&"is-valid",p&&"is-invalid")}))}));g.displayName="FormCheckInput";var j=g,w=["bsPrefix","className","htmlFor"],I=o.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.htmlFor,i=(0,l.Z)(e,w),s=(0,o.useContext)(Z).controlId;return t=(0,y.vE)(t,"form-check-label"),(0,m.jsx)("label",(0,c.Z)((0,c.Z)({},i),{},{ref:a,htmlFor:n||s,className:d()(r,t)}))}));I.displayName="FormCheckLabel";var k=I;var E=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],P=o.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsSwitchPrefix,i=e.inline,s=void 0!==i&&i,u=e.reverse,f=void 0!==u&&u,v=e.disabled,p=void 0!==v&&v,h=e.isValid,b=void 0!==h&&h,N=e.isInvalid,g=void 0!==N&&N,w=e.feedbackTooltip,I=void 0!==w&&w,P=e.feedback,R=e.feedbackType,F=e.className,O=e.style,C=e.title,S=void 0===C?"":C,L=e.type,z=void 0===L?"checkbox":L,T=e.label,D=e.children,q=e.as,G=void 0===q?"input":q,U=(0,l.Z)(e,E);r=(0,y.vE)(r,"form-check"),n=(0,y.vE)(n,"form-switch");var _=(0,o.useContext)(Z).controlId,A=(0,o.useMemo)((function(){return{controlId:t||_}}),[_,t]),V=!D&&null!=T&&!1!==T||function(e,a){return o.Children.toArray(e).some((function(e){return o.isValidElement(e)&&e.type===a}))}(D,k),$=(0,m.jsx)(j,(0,c.Z)((0,c.Z)({},U),{},{type:"switch"===z?"checkbox":z,ref:a,isValid:b,isInvalid:g,disabled:p,as:G}));return(0,m.jsx)(Z.Provider,{value:A,children:(0,m.jsx)("div",{style:O,className:d()(F,V&&r,s&&"".concat(r,"-inline"),f&&"".concat(r,"-reverse"),"switch"===z&&n),children:D||(0,m.jsxs)(m.Fragment,{children:[$,V&&(0,m.jsx)(k,{title:S,children:T}),P&&(0,m.jsx)(x,{type:R,tooltip:I,children:P})]})})})}));P.displayName="FormCheck";var R=Object.assign(P,{Input:j,Label:k}),F=t(4942),O=(t(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),C=o.forwardRef((function(e,a){var t,r,n=e.bsPrefix,i=e.type,s=e.size,u=e.htmlSize,f=e.id,v=e.className,p=e.isValid,h=void 0!==p&&p,b=e.isInvalid,x=void 0!==b&&b,N=e.plaintext,g=e.readOnly,j=e.as,w=void 0===j?"input":j,I=(0,l.Z)(e,O),k=(0,o.useContext)(Z).controlId;(n=(0,y.vE)(n,"form-control"),N)?t=(0,F.Z)({},"".concat(n,"-plaintext"),!0):(r={},(0,F.Z)(r,n,!0),(0,F.Z)(r,"".concat(n,"-").concat(s),s),t=r);return(0,m.jsx)(w,(0,c.Z)((0,c.Z)({},I),{},{type:i,size:u,ref:a,readOnly:g,id:f||k,className:d()(v,t,h&&"is-valid",x&&"is-invalid","color"===i&&"".concat(n,"-color"))}))}));C.displayName="FormControl";var S=Object.assign(C,{Feedback:x}),L=t(6543),z=(0,L.Z)("form-floating"),T=["controlId","as"],D=o.forwardRef((function(e,a){var t=e.controlId,r=e.as,n=void 0===r?"div":r,i=(0,l.Z)(e,T),s=(0,o.useMemo)((function(){return{controlId:t}}),[t]);return(0,m.jsx)(Z.Provider,{value:s,children:(0,m.jsx)(n,(0,c.Z)((0,c.Z)({},i),{},{ref:a}))})}));D.displayName="FormGroup";var q=D,G=t(2677),U=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],_=o.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,n=e.bsPrefix,i=e.column,s=void 0!==i&&i,u=e.visuallyHidden,f=void 0!==u&&u,v=e.className,p=e.htmlFor,h=(0,l.Z)(e,U),b=(0,o.useContext)(Z).controlId;n=(0,y.vE)(n,"form-label");var x="col-form-label";"string"===typeof s&&(x="".concat(x," ").concat(x,"-").concat(s));var N=d()(v,n,f&&"visually-hidden",s&&x);return p=p||b,s?(0,m.jsx)(G.Z,(0,c.Z)({ref:a,as:"label",className:N,htmlFor:p},h)):(0,m.jsx)(r,(0,c.Z)({ref:a,className:N,htmlFor:p},h))}));_.displayName="FormLabel";var A=_,V=["bsPrefix","className","id"],$=o.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.id,i=(0,l.Z)(e,V),s=(0,o.useContext)(Z).controlId;return t=(0,y.vE)(t,"form-range"),(0,m.jsx)("input",(0,c.Z)((0,c.Z)({},i),{},{type:"range",ref:a,className:d()(r,t),id:n||s}))}));$.displayName="FormRange";var B=$,J=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],H=o.forwardRef((function(e,a){var t=e.bsPrefix,r=e.size,n=e.htmlSize,i=e.className,s=e.isValid,u=void 0!==s&&s,f=e.isInvalid,v=void 0!==f&&f,p=e.id,h=(0,l.Z)(e,J),b=(0,o.useContext)(Z).controlId;return t=(0,y.vE)(t,"form-select"),(0,m.jsx)("select",(0,c.Z)((0,c.Z)({},h),{},{size:n,ref:a,className:d()(i,t,r&&"".concat(t,"-").concat(r),u&&"is-valid",v&&"is-invalid"),id:p||b}))}));H.displayName="FormSelect";var M=H,Y=["bsPrefix","className","as","muted"],K=o.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.as,i=void 0===n?"small":n,s=e.muted,o=(0,l.Z)(e,Y);return t=(0,y.vE)(t,"form-text"),(0,m.jsx)(i,(0,c.Z)((0,c.Z)({},o),{},{ref:a,className:d()(r,t,s&&"text-muted")}))}));K.displayName="FormText";var Q=K,W=o.forwardRef((function(e,a){return(0,m.jsx)(R,(0,c.Z)((0,c.Z)({},e),{},{ref:a,type:"switch"}))}));W.displayName="Switch";var X=Object.assign(W,{Input:R.Input,Label:R.Label}),ee=["bsPrefix","className","children","controlId","label"],ae=o.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.children,i=e.controlId,s=e.label,o=(0,l.Z)(e,ee);return t=(0,y.vE)(t,"form-floating"),(0,m.jsxs)(q,(0,c.Z)((0,c.Z)({ref:a,className:d()(r,t),controlId:i},o),{},{children:[n,(0,m.jsx)("label",{htmlFor:i,children:s})]}))}));ae.displayName="FloatingLabel";var te=ae,re=["className","validated","as"],ne={_ref:v().any,validated:v().bool,as:v().elementType},ie=o.forwardRef((function(e,a){var t=e.className,r=e.validated,n=e.as,i=void 0===n?"form":n,s=(0,l.Z)(e,re);return(0,m.jsx)(i,(0,c.Z)((0,c.Z)({},s),{},{ref:a,className:d()(t,r&&"was-validated")}))}));ie.displayName="Form",ie.propTypes=ne;var se=Object.assign(ie,{Group:q,Control:S,Floating:z,Check:R,Switch:X,Label:A,Text:Q,Range:B,Select:M,FloatingLabel:te}),oe=o.createContext(null);oe.displayName="InputGroupContext";var ce=oe,le=["bsPrefix","size","hasValidation","className","as"],ue=(0,L.Z)("input-group-text",{Component:"span"}),de=o.forwardRef((function(e,a){var t=e.bsPrefix,r=e.size,n=e.hasValidation,i=e.className,s=e.as,u=void 0===s?"div":s,f=(0,l.Z)(e,le);t=(0,y.vE)(t,"input-group");var v=(0,o.useMemo)((function(){return{}}),[]);return(0,m.jsx)(ce.Provider,{value:v,children:(0,m.jsx)(u,(0,c.Z)((0,c.Z)({ref:a},f),{},{className:d()(i,t,r&&"".concat(t,"-").concat(r),n&&"has-validation")}))})}));de.displayName="InputGroup";var fe=Object.assign(de,{Text:ue,Radio:function(e){return(0,m.jsx)(ue,{children:(0,m.jsx)(j,(0,c.Z)({type:"radio"},e))})},Checkbox:function(e){return(0,m.jsx)(ue,{children:(0,m.jsx)(j,(0,c.Z)({type:"checkbox"},e))})}}),ve=t(5341),me=["as","bsPrefix","variant","size","active","disabled","className"],pe=o.forwardRef((function(e,a){var t=e.as,n=e.bsPrefix,i=e.variant,s=void 0===i?"primary":i,o=e.size,u=e.active,f=void 0!==u&&u,v=e.disabled,p=void 0!==v&&v,h=e.className,b=(0,l.Z)(e,me),x=(0,y.vE)(n,"btn"),Z=(0,ve.FT)((0,c.Z)({tagName:t,disabled:p},b)),N=(0,r.Z)(Z,2),g=N[0],j=N[1].tagName;return(0,m.jsx)(j,(0,c.Z)((0,c.Z)((0,c.Z)({},g),b),{},{ref:a,disabled:p,className:d()(h,x,f&&"active",s&&"".concat(x,"-").concat(s),o&&"".concat(x,"-").concat(o),b.href&&p&&"disabled")}))}));pe.displayName="Button";var he=pe,be=function(e){var a=e.formSubmit,t=e.query,n=(0,o.useState)(t),i=(0,r.Z)(n,2),s=i[0],c=i[1];(0,o.useEffect)((function(){c(t)}),[t]);return(0,m.jsx)(se,{onSubmit:function(e){e.preventDefault(),a(s.trim()),s.trim()||e.target.reset()},children:(0,m.jsxs)(fe,{className:"mb-3",children:[(0,m.jsx)(se.Control,{placeholder:"Film title","aria-label":"Film title",name:"query",value:s,onChange:function(e){c(e.target.value)}}),(0,m.jsx)(he,{type:"submit",variant:"outline-secondary",id:"search-button",children:"Search"})]})})},xe=t(1087),Ze=t(7689),ye=t(3585),Ne=function(){var e=(0,xe.lr)(),a=(0,r.Z)(e,2),t=a[0],c=a[1],l=(0,o.useState)((function(){var e;return null!==(e=t.get("query"))&&void 0!==e?e:""})),u=(0,r.Z)(l,2),d=u[0],f=u[1],v=(0,o.useState)([]),p=(0,r.Z)(v,2),h=p[0],b=p[1],x=(0,o.useState)(ye.$q.LOADED),Z=(0,r.Z)(x,2),y=Z[0],N=Z[1],g=(0,Ze.TH)();(0,o.useEffect)((function(){"/movies"!==g.pathname||g.search||(f(""),b([]),N(ye.$q.LOADED)),"/movies"===g.pathname&&g.search&&f((function(){var e;return null!==(e=t.get("query"))&&void 0!==e?e:""}))}),[g.pathname,g.search,t]),(0,o.useEffect)((function(){d?(N(ye.$q.LOADING),(0,n.UN)(d).then((function(e){e.length||N(ye.$q.NO_RESULTS),b(e)})).catch((function(e){N(ye.$q.ERROR)})).finally((function(){return setTimeout((function(){return N(ye.$q.LOADED)}),3e3)}))):b([])}),[d]);switch(y){case ye.$q.LOADING:return(0,m.jsx)(i.Z,{});case ye.$q.LOADED:return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(be,{formSubmit:function(e){e?d!==e&&(b([]),f(e),c({query:e})):c({})},query:d}),(0,m.jsx)(s.Z,{movies:h})]});case ye.$q.ERROR:return(0,m.jsx)("p",{children:"Oops, something went wrong. Please try again later."});case ye.$q.NO_RESULTS:return(0,m.jsx)("p",{children:"No matching movies found"});default:return null}}},3585:function(e,a,t){t.d(a,{$q:function(){return i},CB:function(){return n},Zy:function(){return s},fU:function(){return r}});var r={method:"GET",baseURL:"https://api.themoviedb.org/3",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGFhNzY1ZjlhMzVhOTdiNTBiZjI5NmNkZGIzZTBhNyIsInN1YiI6IjY0NTE4NGUwMzNhZDhmMDBmZWYyN2FhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryw4dh3H0xPOea1Y2cbKZvI8bFHdhr2M3oPtuPEBQes"}},n={include_adult:!1,language:"en-US",page:1},i={NO_RESULTS:"NO_RESULTS",LOADING:"LOADING",LOADED:"LOADED",ERROR:"ERROR"},s={year:"numeric",month:"long",day:"numeric"}},2391:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=696.df19bade.chunk.js.map
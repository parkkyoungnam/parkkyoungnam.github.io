(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,a,t){"use strict";var n=t(6),r=t(7),l=t(1),c=t.n(l),s=t(0),o=t.n(s),u=t(3),i=t.n(u),m=t(2),b={tag:m.h,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},p=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,s=e.tag,o=e.form,u=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),b=Object(m.e)(i()(a,l?"no-gutters":null,o?"form-row":"row"),t);return c.a.createElement(s,Object(n.a)({},u,{className:b}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},101:function(e,a,t){"use strict";var n=t(6),r=t(7),l=t(98),c=t.n(l),s=t(1),o=t.n(s),u=t(0),i=t.n(u),m=t(3),b=t.n(m),p=t(2),d=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),push:Object(p.d)(d,'Please use the prop "order"'),pull:Object(p.d)(d,'Please use the prop "order"'),order:d,offset:d})]),g={tag:p.h,xs:f,sm:f,md:f,lg:f,xl:f,className:i.a.string,cssModule:i.a.object,widths:i.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,l=e.widths,s=e.tag,u=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];l.forEach(function(a,n){var r=e[a];if(delete u[a],r||""===r){var l=!n;if(c()(r)){var s,o=l?"-":"-"+a+"-",m=v(l,a,r.size);i.push(Object(p.e)(b()(((s={})[m]=r.size||""===r.size,s["order"+o+r.order]=r.order||0===r.order,s["offset"+o+r.offset]=r.offset||0===r.offset,s)),t))}else{var d=v(l,a,r);i.push(d)}}}),i.length||i.push("col");var m=Object(p.e)(b()(a,i),t);return o.a.createElement(s,Object(n.a)({},u,{className:m}))};E.propTypes=g,E.defaultProps=h,a.a=E},102:function(e,a,t){"use strict";var n=t(6),r=t(7),l=t(1),c=t.n(l),s=t(0),o=t.n(s),u=t(3),i=t.n(u),m=t(2),b={tag:m.h,inverse:o.a.bool,color:o.a.string,block:Object(m.d)(o.a.bool,'Please use the props "body"'),body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p=function(e){var a=e.className,t=e.cssModule,l=e.color,s=e.block,o=e.body,u=e.inverse,b=e.outline,p=e.tag,d=e.innerRef,f=Object(r.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),g=Object(m.e)(i()(a,"card",!!u&&"text-white",!(!s&&!o)&&"card-body",!!l&&(b?"border":"bg")+"-"+l),t);return c.a.createElement(p,Object(n.a)({},f,{className:g,ref:d}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},103:function(e,a,t){"use strict";var n=t(6),r=t(7),l=t(1),c=t.n(l),s=t(0),o=t.n(s),u=t(3),i=t.n(u),m=t(2),b={tag:m.h,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),o=Object(m.e)(i()(a,"card-header"),t);return c.a.createElement(l,Object(n.a)({},s,{className:o}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},104:function(e,a,t){"use strict";var n=t(6),r=t(7),l=t(1),c=t.n(l),s=t(0),o=t.n(s),u=t(3),i=t.n(u),m=t(2),b={tag:m.h,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p=function(e){var a=e.className,t=e.cssModule,l=e.innerRef,s=e.tag,o=Object(r.a)(e,["className","cssModule","innerRef","tag"]),u=Object(m.e)(i()(a,"card-body"),t);return c.a.createElement(s,Object(n.a)({},o,{className:u,ref:l}))};p.propTypes=b,p.defaultProps={tag:"div"},a.a=p},105:function(e,a,t){},106:function(e,a,t){"use strict";function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=[],n=!0,r=!1,l=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(t.push(c.value),!a||t.length!==a);n=!0);}catch(o){r=!0,l=o}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(a,"a",function(){return n})},119:function(e,a,t){"use strict";t.r(a);var n=t(106),r=t(96),l=t(99),c=t(1),s=t.n(c),o=(t(105),t(100)),u=t(101),i=t(102),m=t(103),b=t(104);a.default=function(){var e=Object(c.useState)(""),a=Object(n.a)(e,2),t=a[0],p=a[1],d=Object(c.useState)(""),f=Object(n.a)(d,2),g=f[0],h=f[1],v=Object(c.useState)(""),E=Object(n.a)(v,2),O=E[0],y=E[1];return s.a.createElement(l.a,{title:"Auth API"},s.a.createElement(o.a,null,s.a.createElement(u.a,null,s.a.createElement(i.a,null,s.a.createElement(m.a,null,"\uc124\uba85"),s.a.createElement(b.a,null,s.a.createElement(r.a,null,"API \ud1a0\ud070 \uc0dd\uc131\ud558\ub294 API\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. ",s.a.createElement("br",null)))))),s.a.createElement(o.a,null,s.a.createElement(u.a,null,s.a.createElement(i.a,null,s.a.createElement(m.a,null,"API \ud1a0\ud070 \uc0dd\uc131 API"),s.a.createElement(b.a,null,s.a.createElement(r.a,null,"POST\ubc29\uc2dd : https://warranty-service-dev.auth.ap-northeast-2.amazoncognito.com/oauth2/token",s.a.createElement("br",null)),"scope(\ubc94\uc8fc) :  ",s.a.createElement("input",{onChange:function(e){p(e.target.value)},value:t})," ",s.a.createElement("br",null),"client_id(API\ud1a0\ud070 \ubc1c\uae09\uc73c\ub85c \ubc1c\uae09 \ubc1b\uc740 ID) :  ",s.a.createElement("input",{onChange:function(e){h(e.target.value)},value:g})," ",s.a.createElement("br",null),"client_secret(PI\ud1a0\ud070 \ubc1c\uae09\uc73c\ub85c \ubc1c\uae09 \ubc1b\uc740 KEY) : ",s.a.createElement("input",{onChange:function(e){y(e.target.value)},value:O})," ",s.a.createElement("br",null),s.a.createElement("pre",{className:"precode"},"async function getToken()",s.a.createElement("br",null),"{",s.a.createElement("br",null),"\xa0const data = querystring.stringify({",s.a.createElement("br",null),"\xa0\xa0grant_type: 'client_credentials',",s.a.createElement("br",null),"\xa0\xa0scope: ",s.a.createElement("p",{className:"valuepre"},"'",t,"'"),",",s.a.createElement("br",null),"\xa0\xa0client_id: ",s.a.createElement("p",{className:"valuepre"},"'",g,"'"),",",s.a.createElement("br",null),"\xa0\xa0client_secret: '",s.a.createElement("p",{className:"valuepre"},"'",O,"'"),s.a.createElement("br",null),"\xa0});",s.a.createElement("br",null),"\xa0const options = {",s.a.createElement("br",null),"\xa0\xa0hostname: 'warranty-service-dev.auth.ap-northeast-2.amazoncognito.com',",s.a.createElement("br",null),"\xa0\xa0port: 443,",s.a.createElement("br",null),"\xa0\xa0path: '/oauth2/token',",s.a.createElement("br",null),"\xa0\xa0method: 'POST',",s.a.createElement("br",null),"\xa0\xa0headers: {",s.a.createElement("br",null),"\xa0\xa0\xa0\xa0'Content-length':data.length,",s.a.createElement("br",null),"\xa0\xa0\xa0\xa0\"Content-Type\": 'application/x-www-form-urlencoded'",s.a.createElement("br",null),"\xa0\xa0\xa0}",s.a.createElement("br",null),"\xa0};",s.a.createElement("br",null),"\xa0return await commonModel.httpRequest(options,data)",s.a.createElement("br",null),"}",s.a.createElement("br",null)),s.a.createElement("p",{className:"ResultValue"}," \uacb0\uacfc \uac12 : access_token KEY \ubc1c\uae09"),s.a.createElement("br",null))))))}},96:function(e,a,t){"use strict";var n=t(33),r=t(17),l=t(3),c=t.n(l),s=t(1),o=t.n(s),u=(t(97),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),i=function(e){var a,t=e.tag,l=e.className,s=e.type,i=Object(r.a)(e,["tag","className","type"]),m=c()(Object(n.a)({},s,!!s),l);return a=t||(!t&&u[s]?u[s]:"p"),o.a.createElement(a,Object.assign({},i,{className:m}))};i.defaultProps={type:"p"},a.a=i},97:function(e,a,t){"use strict";var n=t(33);var r=t(0),l=t.n(r);!function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(a){Object(n.a)(e,a,t[a])})}}({},l.a,{ID:l.a.oneOfType([l.a.string,l.a.number]).isRequired,component:l.a.oneOfType([l.a.string,l.a.func]),date:l.a.oneOfType([l.a.instanceOf(Date),l.a.string])})},98:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},99:function(e,a,t){"use strict";var n=t(17),r=t(1),l=t.n(r),c=(t(97),t(18)),s=t(6),o=t(7),u=t(0),i=t.n(u),m=t(3),b=t.n(m),p=t(2),d={tag:p.h,listTag:p.h,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},f=function(e){var a=e.className,t=e.listClassName,n=e.cssModule,r=e.children,c=e.tag,u=e.listTag,i=e["aria-label"],m=Object(o.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),d=Object(p.e)(b()(a),n),f=Object(p.e)(b()("breadcrumb",t),n);return l.a.createElement(c,Object(s.a)({},m,{className:d,"aria-label":i}),l.a.createElement(u,{className:f},r))};f.propTypes=d,f.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};var g=f,h={tag:p.h,active:i.a.bool,className:i.a.string,cssModule:i.a.object},v=function(e){var a=e.className,t=e.cssModule,n=e.active,r=e.tag,c=Object(o.a)(e,["className","cssModule","active","tag"]),u=Object(p.e)(b()(a,!!n&&"active","breadcrumb-item"),t);return l.a.createElement(r,Object(s.a)({},c,{className:u,"aria-current":n?"page":void 0}))};v.propTypes=h,v.defaultProps={tag:"li"};var E=v,O=t(96),y=c.a.create("page"),j=function(e){var a=e.title,t=e.breadcrumbs,r=e.tag,c=e.className,s=e.children,o=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),u=y.b("px-3",c);return l.a.createElement(r,Object.assign({className:u},o),l.a.createElement("div",{className:y.e("header")},a&&"string"===typeof a?l.a.createElement(O.a,{type:"h1",className:y.e("title")},a):a,t&&l.a.createElement(g,{className:y.e("breadcrumb")},l.a.createElement(E,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,n=e.active;return l.a.createElement(E,{key:a,active:n},t)}))),s)};j.defaultProps={tag:"div",title:""};a.a=j}}]);
//# sourceMappingURL=4.2b1a422f.chunk.js.map
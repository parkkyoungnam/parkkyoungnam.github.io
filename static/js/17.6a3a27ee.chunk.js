(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{155:function(e,t,a){"use strict";var l=a(39),n=a(13),r=a(23),c=a.n(r),m=a(1),o=a.n(m),u=(a(24),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),s=function(e){var t,a=e.tag,r=e.className,m=e.type,s=Object(n.a)(e,["tag","className","type"]),E=c()(Object(l.a)({},m,!!m),r);return t=a||(!a&&u[m]?u[m]:"p"),o.a.createElement(t,Object.assign({},s,{className:E}))};s.defaultProps={type:"p"},t.a=s},157:function(e,t,a){"use strict";var l=a(13),n=a(1),r=a.n(n),c=(a(24),a(30)),m=a(161),o=a(162),u=a(155),s=c.a.create("page"),E=function(e){var t=e.title,a=e.breadcrumbs,n=e.tag,c=e.className,E=e.children,d=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]),i=s.b("px-3",c);return r.a.createElement(n,Object.assign({className:i},d),r.a.createElement("div",{className:s.e("header")},t&&"string"===typeof t?r.a.createElement(u.a,{type:"h1",className:s.e("title")},t):t,a&&r.a.createElement(m.a,{className:s.e("breadcrumb")},r.a.createElement(o.a,null,"Home"),a.length&&a.map(function(e,t){var a=e.name,l=e.active;return r.a.createElement(o.a,{key:t,active:l},a)}))),E)};E.defaultProps={tag:"div",title:""},t.a=E},161:function(e,t,a){"use strict";var l=a(5),n=a(6),r=a(1),c=a.n(r),m=a(2),o=a.n(m),u=a(4),s=a.n(u),E=a(3),d={tag:E.q,listTag:E.q,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},i=function(e){var t=e.className,a=e.listClassName,r=e.cssModule,m=e.children,o=e.tag,u=e.listTag,d=e["aria-label"],i=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),h=Object(E.m)(s()(t),r),b=Object(E.m)(s()("breadcrumb",a),r);return c.a.createElement(o,Object(l.a)({},i,{className:h,"aria-label":d}),c.a.createElement(u,{className:b},m))};i.propTypes=d,i.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=i},162:function(e,t,a){"use strict";var l=a(5),n=a(6),r=a(1),c=a.n(r),m=a(2),o=a.n(m),u=a(4),s=a.n(u),E=a(3),d={tag:E.q,active:o.a.bool,className:o.a.string,cssModule:o.a.object},i=function(e){var t=e.className,a=e.cssModule,r=e.active,m=e.tag,o=Object(n.a)(e,["className","cssModule","active","tag"]),u=Object(E.m)(s()(t,!!r&&"active","breadcrumb-item"),a);return c.a.createElement(m,Object(l.a)({},o,{className:u,"aria-current":r?"page":void 0}))};i.propTypes=d,i.defaultProps={tag:"li"},t.a=i},420:function(e,t,a){"use strict";var l=a(5),n=a(6),r=a(1),c=a.n(r),m=a(2),o=a.n(m),u=a(4),s=a.n(u),E=a(3),d={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,inverse:Object(E.h)(o.a.bool,'Please use the prop "dark"'),dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:E.q,responsiveTag:E.q,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},i=function(e){var t=e.className,a=e.cssModule,r=e.size,m=e.bordered,o=e.borderless,u=e.striped,d=e.inverse,i=e.dark,h=e.hover,b=e.responsive,p=e.tag,C=e.responsiveTag,g=e.innerRef,N=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(E.m)(s()(t,"table",!!r&&"table-"+r,!!m&&"table-bordered",!!o&&"table-borderless",!!u&&"table-striped",!(!i&&!d)&&"table-dark",!!h&&"table-hover"),a),w=c.a.createElement(p,Object(l.a)({},N,{ref:g,className:v}));if(b){var f=!0===b?"table-responsive":"table-responsive-"+b;return c.a.createElement(C,{className:f},w)}return w};i.propTypes=d,i.defaultProps={tag:"table",responsiveTag:"div"},t.a=i},494:function(e,t,a){"use strict";a.r(t);var l=a(39),n=a(157),r=a(1),c=a.n(r),m=a(149),o=a(150),u=a(133),s=a(138),E=a(134),d=a(420),i=["","bordered","striped","hover"];t.default=function(){return c.a.createElement(n.a,{title:"Tables",breadcrumbs:[{name:"tables",active:!0}],className:"TablePage"},i.map(function(e,t){return c.a.createElement(m.a,{key:t},c.a.createElement(o.a,null,c.a.createElement(u.a,{className:"mb-3"},c.a.createElement(s.a,null,e||"default"),c.a.createElement(E.a,null,c.a.createElement(m.a,null,c.a.createElement(o.a,null,c.a.createElement(u.a,{body:!0},c.a.createElement(d.a,Object(l.a)({},e||"default",!0),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"First Name"),c.a.createElement("th",null,"Last Name"),c.a.createElement("th",null,"Username"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"1"),c.a.createElement("td",null,"Mark"),c.a.createElement("td",null,"Otto"),c.a.createElement("td",null,"@mdo")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"2"),c.a.createElement("td",null,"Jacob"),c.a.createElement("td",null,"Thornton"),c.a.createElement("td",null,"@fat")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"3"),c.a.createElement("td",null,"Larry"),c.a.createElement("td",null,"the Bird"),c.a.createElement("td",null,"@twitter")))))),c.a.createElement(o.a,null,c.a.createElement(u.a,{body:!0},c.a.createElement(d.a,{dark:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"First Name"),c.a.createElement("th",null,"Last Name"),c.a.createElement("th",null,"Username"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"1"),c.a.createElement("td",null,"Mark"),c.a.createElement("td",null,"Otto"),c.a.createElement("td",null,"@mdo")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"2"),c.a.createElement("td",null,"Jacob"),c.a.createElement("td",null,"Thornton"),c.a.createElement("td",null,"@fat")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"3"),c.a.createElement("td",null,"Larry"),c.a.createElement("td",null,"the Bird"),c.a.createElement("td",null,"@twitter")))))))))))}),c.a.createElement(m.a,null,c.a.createElement(o.a,null,c.a.createElement(u.a,{className:"mb-3"},c.a.createElement(s.a,null,"Contextual"),c.a.createElement(E.a,null,c.a.createElement(d.a,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Type"),c.a.createElement("th",{scope:"col"},"Column heading"),c.a.createElement("th",{scope:"col"},"Column heading"),c.a.createElement("th",{scope:"col"},"Column heading"))),c.a.createElement("tbody",null,c.a.createElement("tr",{className:"table-active"},c.a.createElement("th",{scope:"row"},"Active"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"Default"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-primary"},c.a.createElement("th",{scope:"row"},"Primary"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-secondary"},c.a.createElement("th",{scope:"row"},"Secondary"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-success"},c.a.createElement("th",{scope:"row"},"Success"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-danger"},c.a.createElement("th",{scope:"row"},"Danger"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-warning"},c.a.createElement("th",{scope:"row"},"Warning"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-info"},c.a.createElement("th",{scope:"row"},"Info"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-light"},c.a.createElement("th",{scope:"row"},"Light"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-dark"},c.a.createElement("th",{scope:"row"},"Dark"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"))))))),c.a.createElement(o.a,null,c.a.createElement(u.a,{className:"mb-3"},c.a.createElement(s.a,null,"Contextual"),c.a.createElement(E.a,null,c.a.createElement(d.a,{dark:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Type"),c.a.createElement("th",{scope:"col"},"Column heading"),c.a.createElement("th",{scope:"col"},"Column heading"),c.a.createElement("th",{scope:"col"},"Column heading"))),c.a.createElement("tbody",null,c.a.createElement("tr",{className:"table-active"},c.a.createElement("th",{scope:"row"},"Active"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"Default"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-primary"},c.a.createElement("th",{scope:"row"},"Primary"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-secondary"},c.a.createElement("th",{scope:"row"},"Secondary"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-success"},c.a.createElement("th",{scope:"row"},"Success"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-danger"},c.a.createElement("th",{scope:"row"},"Danger"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-warning"},c.a.createElement("th",{scope:"row"},"Warning"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-info"},c.a.createElement("th",{scope:"row"},"Info"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-light"},c.a.createElement("th",{scope:"row"},"Light"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-dark"},c.a.createElement("th",{scope:"row"},"Dark"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")))))))),c.a.createElement(m.a,null,c.a.createElement(o.a,null,c.a.createElement(u.a,{className:"mb-3"},c.a.createElement(s.a,null,"Responsive"),c.a.createElement(E.a,null,c.a.createElement(d.a,{responsive:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"First Name"),c.a.createElement("th",null,"Last Name"),c.a.createElement("th",null,"Username"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"1"),c.a.createElement("td",null,"Mark"),c.a.createElement("td",null,"Otto"),c.a.createElement("td",null,"@mdo")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"2"),c.a.createElement("td",null,"Jacob"),c.a.createElement("td",null,"Thornton"),c.a.createElement("td",null,"@fat")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"3"),c.a.createElement("td",null,"Larry"),c.a.createElement("td",null,"the Bird"),c.a.createElement("td",null,"@twitter")))))))),c.a.createElement(m.a,null,c.a.createElement(o.a,null,c.a.createElement(u.a,{className:"mb-3"},c.a.createElement(s.a,null,"Size"),c.a.createElement(E.a,null,c.a.createElement(d.a,{size:"sm"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"First Name"),c.a.createElement("th",null,"Last Name"),c.a.createElement("th",null,"Username"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"1"),c.a.createElement("td",null,"Mark"),c.a.createElement("td",null,"Otto"),c.a.createElement("td",null,"@mdo")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"2"),c.a.createElement("td",null,"Jacob"),c.a.createElement("td",null,"Thornton"),c.a.createElement("td",null,"@fat")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"3"),c.a.createElement("td",null,"Larry"),c.a.createElement("td",null,"the Bird"),c.a.createElement("td",null,"@twitter")))))))))}}}]);
//# sourceMappingURL=17.6a3a27ee.chunk.js.map
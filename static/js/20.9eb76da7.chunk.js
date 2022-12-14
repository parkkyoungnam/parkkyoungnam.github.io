(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{155:function(e,a,t){"use strict";var l=t(39),n=t(13),r=t(23),c=t.n(r),s=t(1),m=t.n(s),i=(t(24),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var a,t=e.tag,r=e.className,s=e.type,u=Object(n.a)(e,["tag","className","type"]),d=c()(Object(l.a)({},s,!!s),r);return a=t||(!t&&i[s]?i[s]:"p"),m.a.createElement(a,Object.assign({},u,{className:d}))};u.defaultProps={type:"p"},a.a=u},157:function(e,a,t){"use strict";var l=t(13),n=t(1),r=t.n(n),c=(t(24),t(30)),s=t(161),m=t(162),i=t(155),u=c.a.create("page"),d=function(e){var a=e.title,t=e.breadcrumbs,n=e.tag,c=e.className,d=e.children,o=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]),E=u.b("px-3",c);return r.a.createElement(n,Object.assign({className:E},o),r.a.createElement("div",{className:u.e("header")},a&&"string"===typeof a?r.a.createElement(i.a,{type:"h1",className:u.e("title")},a):a,t&&r.a.createElement(s.a,{className:u.e("breadcrumb")},r.a.createElement(m.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,l=e.active;return r.a.createElement(m.a,{key:a,active:l},t)}))),d)};d.defaultProps={tag:"div",title:""},a.a=d},161:function(e,a,t){"use strict";var l=t(5),n=t(6),r=t(1),c=t.n(r),s=t(2),m=t.n(s),i=t(4),u=t.n(i),d=t(3),o={tag:d.q,listTag:d.q,className:m.a.string,listClassName:m.a.string,cssModule:m.a.object,children:m.a.node,"aria-label":m.a.string},E=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,s=e.children,m=e.tag,i=e.listTag,o=e["aria-label"],E=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(d.m)(u()(a),r),h=Object(d.m)(u()("breadcrumb",t),r);return c.a.createElement(m,Object(l.a)({},E,{className:p,"aria-label":o}),c.a.createElement(i,{className:h},s))};E.propTypes=o,E.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=E},162:function(e,a,t){"use strict";var l=t(5),n=t(6),r=t(1),c=t.n(r),s=t(2),m=t.n(s),i=t(4),u=t.n(i),d=t(3),o={tag:d.q,active:m.a.bool,className:m.a.string,cssModule:m.a.object},E=function(e){var a=e.className,t=e.cssModule,r=e.active,s=e.tag,m=Object(n.a)(e,["className","cssModule","active","tag"]),i=Object(d.m)(u()(a,!!r&&"active","breadcrumb-item"),t);return c.a.createElement(s,Object(l.a)({},m,{className:i,"aria-current":r?"page":void 0}))};E.propTypes=o,E.defaultProps={tag:"li"},a.a=E},495:function(e,a,t){"use strict";t.r(a);var l=t(157),n=t(155),r=t(1),c=t.n(r),s=t(149),m=t(150),i=t(133),u=t(138),d=t(134);a.default=function(){return c.a.createElement(l.a,{title:"Typography",breadcrumbs:[{name:"typography",active:!0}]},c.a.createElement(s.a,null,c.a.createElement(m.a,null,c.a.createElement(i.a,null,c.a.createElement(u.a,null,"Headings"),c.a.createElement(d.a,null,c.a.createElement(n.a,{type:"h1"},"h1 Heading"),c.a.createElement(n.a,{type:"h2"},"h2 Heading"),c.a.createElement(n.a,{type:"h3"},"h3 Heading"),c.a.createElement(n.a,{type:"h4"},"h4 Heading"),c.a.createElement(n.a,{type:"h5"},"h5 Heading"),c.a.createElement(n.a,{type:"h6"},"h6 Heading")))),c.a.createElement(m.a,null,c.a.createElement(i.a,null,c.a.createElement(u.a,null,"Display"),c.a.createElement(d.a,null,c.a.createElement(n.a,{type:"display-1"},"Display 1"),c.a.createElement(n.a,{type:"display-2"},"Display 2"),c.a.createElement(n.a,{type:"display-3"},"Display 3"),c.a.createElement(n.a,{type:"display-4"},"Display 4"))))),c.a.createElement(s.a,{className:"mb-3"}),c.a.createElement(s.a,null,c.a.createElement(m.a,null,c.a.createElement(i.a,null,c.a.createElement(u.a,null,"Text Colors"),c.a.createElement(d.a,null,c.a.createElement(n.a,{className:"text-primary"},".text-primary"),c.a.createElement(n.a,{className:"text-secondary"},".text-secondary"),c.a.createElement(n.a,{className:"text-success"},".text-success"),c.a.createElement(n.a,{className:"text-danger"},".text-danger"),c.a.createElement(n.a,{className:"text-warning"},".text-warning"),c.a.createElement(n.a,{className:"text-info"},".text-info"),c.a.createElement(n.a,{className:"text-light bg-dark"},".text-light"),c.a.createElement(n.a,{className:"text-dark"},".text-dark"),c.a.createElement(n.a,{className:"text-muted"},".text-muted"),c.a.createElement(n.a,{className:"text-white bg-dark"},".text-white")))),c.a.createElement(m.a,null,c.a.createElement(i.a,null,c.a.createElement(u.a,null,"Inline text elements"),c.a.createElement(d.a,null,c.a.createElement("p",null,"You can use the mark tag to ",c.a.createElement("mark",null,"highlight")," text."),c.a.createElement("p",null,c.a.createElement("del",null,"This line of text is meant to be treated as deleted text.")),c.a.createElement("p",null,c.a.createElement("s",null,"This line of text is meant to be treated as no longer accurate.")),c.a.createElement("p",null,c.a.createElement("ins",null,"This line of text is meant to be treated as an addition to the document.")),c.a.createElement("p",null,c.a.createElement("u",null,"This line of text will render as underlined")),c.a.createElement("p",null,c.a.createElement("small",null,"This line of text is meant to be treated as fine print.")),c.a.createElement("p",null,c.a.createElement("strong",null,"This line rendered as bold text.")),c.a.createElement("p",null,c.a.createElement("em",null,"This line rendered as italicized text.")))))),c.a.createElement(s.a,null,c.a.createElement(m.a,null,c.a.createElement(i.a,null,c.a.createElement(u.a,null,"Blockquote"),c.a.createElement(d.a,null,c.a.createElement(n.a,{type:"blockquote"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")))),c.a.createElement(m.a,null,c.a.createElement(i.a,null,c.a.createElement(u.a,null,"Lead"),c.a.createElement(d.a,null,c.a.createElement(n.a,{type:"lead"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."))))))}}}]);
//# sourceMappingURL=20.9eb76da7.chunk.js.map
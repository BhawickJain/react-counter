(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(5),s=n.n(a),o=(n(4),n(2)),r=n(0),u=function(e){return Object(r.jsx)("p",{children:e.value})},i=(n(11),function(e){var t=function(t){t.key===e.keyCode&&(console.log(e.keyCode),e.handleClick())};return Object(c.useEffect)((function(){return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[e]),Object(r.jsx)("button",{className:e.className,onClick:e.handleClick,children:e.name})}),d=function(e){var t=e.darkState,n=t.darkMode,c=t.setDarkMode,a=e.countState,s=a.count,o=a.setCount;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i,{name:"reset",keyCode:"r",handleClick:function(){o(0)}}),Object(r.jsx)(i,{name:"more",keyCode:"k",handleClick:function(){o(s+1)}}),Object(r.jsx)(i,{name:"less",keyCode:"j",handleClick:function(){o(s-1)}}),Object(r.jsx)(i,{name:n?"\ud83c\udf16":"\ud83c\udf12",keyCode:" ",handleClick:function(){c(!0!==n)}})]})},j=function(e){return Object(r.jsx)("body",{className:e.className,children:e.children})},l=(n(12),function(e){return Object(r.jsx)("span",{children:e.value})}),b=function(){return Object(r.jsxs)("div",{className:"helper",children:["keyboard shortcuts: more ",Object(r.jsx)(l,{value:"k"}),", less ",Object(r.jsx)(l,{value:"j"}),", reset"," ",Object(r.jsx)(l,{value:"r"}),", darkmode ",Object(r.jsx)(l,{value:"space"})]})},k=function(){var e,t=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2);return[t[0],t[1]]}(),n=Object(o.a)(t,2),a=n[0],s=n[1],i=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2);return[t[0],t[1]]}(),l=Object(o.a)(i,2),k=l[0],O=l[1];return e="You clicked ".concat(a," times"),Object(c.useEffect)((function(){document.title=e}),[e]),Object(r.jsx)(j,{className:k?"dark":"",children:Object(r.jsxs)("div",{className:"middle",children:[Object(r.jsx)(u,{value:"You clicked ".concat(a," times")}),Object(r.jsx)(d,{countState:{count:a,setCount:s},darkState:{darkMode:k,setDarkMode:O}}),Object(r.jsx)(b,{})]})})};s.a.render(Object(r.jsx)(k,{}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.6c04bc35.chunk.js.map
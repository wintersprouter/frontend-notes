"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[5430],{1639:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var c=l(4848),s=l(8453);const r={},o="\u8acb\u8aaa\u660e JavaScript \u4e2d.call \u548c .apply \u7684\u5dee\u7570\u70ba\u4f55\uff1f",a={id:"Javascript/apply&call",title:"\u8acb\u8aaa\u660e JavaScript \u4e2d.call \u548c .apply \u7684\u5dee\u7570\u70ba\u4f55\uff1f",description:".call\u8ddf.apply \u90fd\u53ef\u4ee5\u76f4\u63a5\u547c\u53eb\u51fd\u5f0f\u4e26\u4e14\u6539\u8b8a\u51fd\u5f0f\u5167 this \u7684\u6307\u5411\uff0c\u5169\u8005\u6700\u4e3b\u8981\u7684\u5dee\u7570\u662f\u50b3\u5165\u7684\u53c3\u6578\u5f62\u5f0f\u4e0d\u540c\u3002",source:"@site/docs/Javascript/11.apply&call.md",sourceDirName:"Javascript",slug:"/Javascript/apply&call",permalink:"/frontend-notes/docs/Javascript/apply&call",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/11.apply&call.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"notesSidebar",previous:{title:"\u8acb\u63cf\u8ff0 JavaScript \u4e2d null, undefined \u548c undeclared \u7684\u5dee\u7570\u70ba\u4f55\uff1f",permalink:"/frontend-notes/docs/Javascript/null&undefined&undeclared"},next:{title:"\u8acb\u8aaa\u660e closure \u9589\u5305\u662f\u4ec0\u9ebc\uff1f\u5982\u4f55\u61c9\u7528\uff1f",permalink:"/frontend-notes/docs/Javascript/closure"}},t={},d=[{value:"<code>.call</code>",id:"call",level:2},{value:"<code>.apply</code>",id:"apply",level:2}];function i(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u8acb\u8aaa\u660e-javascript-\u4e2dcall-\u548c-apply-\u7684\u5dee\u7570\u70ba\u4f55",children:"\u8acb\u8aaa\u660e JavaScript \u4e2d.call \u548c .apply \u7684\u5dee\u7570\u70ba\u4f55\uff1f"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:".call"}),"\u8ddf",(0,c.jsx)(n.code,{children:".apply"})," \u90fd\u53ef\u4ee5\u76f4\u63a5\u547c\u53eb\u51fd\u5f0f\u4e26\u4e14\u6539\u8b8a\u51fd\u5f0f\u5167 this \u7684\u6307\u5411\uff0c\u5169\u8005\u6700\u4e3b\u8981\u7684\u5dee\u7570\u662f\u50b3\u5165\u7684\u53c3\u6578\u5f62\u5f0f\u4e0d\u540c\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"call",children:(0,c.jsx)(n.code,{children:".call"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5b9a\u7fa9\uff1a",(0,c.jsx)(n.code,{children:".call"})," \u65b9\u6cd5\u6703\u7acb\u5373\u57f7\u884c\u51fd\u5f0f\uff0c\u4e26\u5c07 this \u6307\u5411\u50b3\u5165\u7684\u7b2c\u4e00\u500b\u53c3\u6578\uff0c\u63a5\u4e0b\u4f86\u7684\u53c3\u6578\u662f\u8981\u50b3\u7d66\u51fd\u5f0f\u7684\u5177\u9ad4\u503c\uff0c\u4e00\u500b\u4e00\u500b\u5730\u50b3\u5165\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u53c3\u6578\u5f62\u5f0f\uff1a",(0,c.jsx)(n.code,{children:".call"}),"\u662f \u9010\u500b\u50b3\u5165\u53c3\u6578\u7684\u3002"]}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"fn.call(thisArg, arg1, arg2, ...)"})}),"\n",(0,c.jsx)(n.li,{children:"\u4f7f\u7528\u6642\u6a5f\uff1a\u6240\u6709\u53c3\u6578\u7684\u6578\u91cf\uff0c\u4e26\u4e14\u60f3\u9010\u500b\u50b3\u905e\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'function order(food, count) {\n  console.log(this.name, "\u9ede\u4e86", food, count);\n  //Ashley \u9ede\u4e86 \u8c5a\u9aa8\u62c9\u9eb5 \u4e00\u4efd\n}\nconst person = {\n  name: "Ashley",\n};\norder.call(person, "\u8c5a\u9aa8\u62c9\u9eb5", "\u4e00\u4efd");\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0cthis \u88ab\u8a2d\u5b9a\u70ba person\uff0c\u4e26\u4e14 food \u548c count \u662f\u9010\u500b\u50b3\u5165\u7684\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"apply",children:(0,c.jsx)(n.code,{children:".apply"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5b9a\u7fa9\uff1a",(0,c.jsx)(n.code,{children:".apply"})," \u8207 ",(0,c.jsx)(n.code,{children:".call"})," \u985e\u4f3c\uff0c\u4e5f\u6703\u7acb\u5373\u57f7\u884c\u51fd\u5f0f\uff0c\u4e26\u5c07 this \u6307\u5411\u50b3\u5165\u7684\u7b2c\u4e00\u500b\u53c3\u6578\u3002\u4f46\u662f\uff0c\u63a5\u4e0b\u4f86\u7684\u53c3\u6578\u5fc5\u9808\u4ee5\u9663\u5217\u7684\u5f62\u5f0f\u50b3\u905e\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u53c3\u6578\u5f62\u5f0f\uff1a",(0,c.jsx)(n.code,{children:".apply"})," \u662f\u7528 ",(0,c.jsx)(n.strong,{children:"\u9663\u5217"})," \u50b3\u905e\u53c3\u6578\u7684\u3002"]}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"fn.apply(thisArg, [arg1, arg2, ...])"})}),"\n",(0,c.jsx)(n.li,{children:"\u4f7f\u7528\u6642\u6a5f\uff1a\u53c3\u6578\u662f\u4ee5\u9663\u5217\u7684\u5f62\u5f0f\u5b58\u5728\uff0c\u6216\u8005\u6578\u91cf\u4e0d\u78ba\u5b9a\u6642\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'function order(food, count) {\n  console.log(this.name, "\u9ede\u4e86", food, count);\n  //Andy \u9ede\u4e86 \u6cbe\u9eb5 \u5169\u4efd\n}\nconst person = {\n  name: "Andy",\n};\norder.apply(person, ["\u6cbe\u9eb5", "\u5169\u4efd"]);\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0cthis \u88ab\u8a2d\u5b9a\u70ba person\uff0c\u800c\u53c3\u6578 food \u548c count \u662f\u4ee5\u9663\u5217\u7684\u5f62\u5f0f\u50b3\u905e\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>o,x:()=>a});var c=l(6540);const s={},r=c.createContext(s);function o(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);
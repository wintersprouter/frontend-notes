"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[5430],{7218:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"Javascript/apply&call","title":".call \u548c .apply \u7684\u5dee\u7570","description":".call\u8ddf.apply \u90fd\u53ef\u4ee5\u76f4\u63a5\u547c\u53eb\u51fd\u5f0f\u4e26\u4e14\u6539\u8b8a\u51fd\u5f0f\u5167 this \u7684\u6307\u5411\uff0c\u5169\u8005\u6700\u4e3b\u8981\u7684\u5dee\u7570\u662f\u50b3\u5165\u7684\u53c3\u6578\u5f62\u5f0f\u4e0d\u540c\u3002","source":"@site/docs/Javascript/11.apply&call.md","sourceDirName":"Javascript","slug":"/Javascript/call-apply","permalink":"/frontend-notes/docs/Javascript/call-apply","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/11.apply&call.md","tags":[{"inline":true,"label":"2024iT\u9435\u4eba\u8cfd","permalink":"/frontend-notes/docs/tags/2024-i-t\u9435\u4eba\u8cfd"},{"inline":true,"label":"JavaScript","permalink":"/frontend-notes/docs/tags/java-script"},{"inline":true,"label":"call","permalink":"/frontend-notes/docs/tags/call"},{"inline":true,"label":"apply","permalink":"/frontend-notes/docs/tags/apply"}],"version":"current","sidebarPosition":11,"frontMatter":{"slug":"call-apply","title":".call \u548c .apply \u7684\u5dee\u7570","authors":["ashley"],"tags":["2024iT\u9435\u4eba\u8cfd","JavaScript","call","apply"],"keywords":["2024iT\u9435\u4eba\u8cfd","JavaScript","call","apply"]},"sidebar":"notesSidebar","previous":{"title":"null, undefined \u548c undeclared \u7684\u5dee\u7570","permalink":"/frontend-notes/docs/Javascript/null-undefined-undeclared"},"next":{"title":"closure \u9589\u5305\u662f\u4ec0\u9ebc\uff1f\u5982\u4f55\u61c9\u7528\uff1f","permalink":"/frontend-notes/docs/Javascript/closure"}}');var s=l(6070),c=l(5248);const r={slug:"call-apply",title:".call \u548c .apply \u7684\u5dee\u7570",authors:["ashley"],tags:["2024iT\u9435\u4eba\u8cfd","JavaScript","call","apply"],keywords:["2024iT\u9435\u4eba\u8cfd","JavaScript","call","apply"]},t=".call \u548c .apply \u7684\u5dee\u7570",o={},i=[{value:"<code>.call</code>",id:"call",level:2},{value:"<code>.apply</code>",id:"apply",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"call-\u548c-apply-\u7684\u5dee\u7570",children:".call \u548c .apply \u7684\u5dee\u7570"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:".call"}),"\u8ddf",(0,s.jsx)(n.code,{children:".apply"})," \u90fd\u53ef\u4ee5\u76f4\u63a5\u547c\u53eb\u51fd\u5f0f\u4e26\u4e14\u6539\u8b8a\u51fd\u5f0f\u5167 this \u7684\u6307\u5411\uff0c\u5169\u8005\u6700\u4e3b\u8981\u7684\u5dee\u7570\u662f\u50b3\u5165\u7684\u53c3\u6578\u5f62\u5f0f\u4e0d\u540c\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"call",children:(0,s.jsx)(n.code,{children:".call"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5b9a\u7fa9\uff1a",(0,s.jsx)(n.code,{children:".call"})," \u65b9\u6cd5\u6703\u7acb\u5373\u57f7\u884c\u51fd\u5f0f\uff0c\u4e26\u5c07 this \u6307\u5411\u50b3\u5165\u7684\u7b2c\u4e00\u500b\u53c3\u6578\uff0c\u63a5\u4e0b\u4f86\u7684\u53c3\u6578\u662f\u8981\u50b3\u7d66\u51fd\u5f0f\u7684\u5177\u9ad4\u503c\uff0c\u4e00\u500b\u4e00\u500b\u5730\u50b3\u5165\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53c3\u6578\u5f62\u5f0f\uff1a",(0,s.jsx)(n.code,{children:".call"}),"\u662f \u9010\u500b\u50b3\u5165\u53c3\u6578\u7684\u3002"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"fn.call(thisArg, arg1, arg2, ...)"})}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u6642\u6a5f\uff1a\u6240\u6709\u53c3\u6578\u7684\u6578\u91cf\uff0c\u4e26\u4e14\u60f3\u9010\u500b\u50b3\u905e\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'function order(food, count) {\n  console.log(this.name, "\u9ede\u4e86", food, count);\n  //Ashley \u9ede\u4e86 \u8c5a\u9aa8\u62c9\u9eb5 \u4e00\u4efd\n}\nconst person = {\n  name: "Ashley",\n};\norder.call(person, "\u8c5a\u9aa8\u62c9\u9eb5", "\u4e00\u4efd");\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0cthis \u88ab\u8a2d\u5b9a\u70ba person\uff0c\u4e26\u4e14 food \u548c count \u662f\u9010\u500b\u50b3\u5165\u7684\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"apply",children:(0,s.jsx)(n.code,{children:".apply"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5b9a\u7fa9\uff1a",(0,s.jsx)(n.code,{children:".apply"})," \u8207 ",(0,s.jsx)(n.code,{children:".call"})," \u985e\u4f3c\uff0c\u4e5f\u6703\u7acb\u5373\u57f7\u884c\u51fd\u5f0f\uff0c\u4e26\u5c07 this \u6307\u5411\u50b3\u5165\u7684\u7b2c\u4e00\u500b\u53c3\u6578\u3002\u4f46\u662f\uff0c\u63a5\u4e0b\u4f86\u7684\u53c3\u6578\u5fc5\u9808\u4ee5\u9663\u5217\u7684\u5f62\u5f0f\u50b3\u905e\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53c3\u6578\u5f62\u5f0f\uff1a",(0,s.jsx)(n.code,{children:".apply"})," \u662f\u7528 ",(0,s.jsx)(n.strong,{children:"\u9663\u5217"})," \u50b3\u905e\u53c3\u6578\u7684\u3002"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"fn.apply(thisArg, [arg1, arg2, ...])"})}),"\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u6642\u6a5f\uff1a\u53c3\u6578\u662f\u4ee5\u9663\u5217\u7684\u5f62\u5f0f\u5b58\u5728\uff0c\u6216\u8005\u6578\u91cf\u4e0d\u78ba\u5b9a\u6642\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'function order(food, count) {\n  console.log(this.name, "\u9ede\u4e86", food, count);\n  //Andy \u9ede\u4e86 \u6cbe\u9eb5 \u5169\u4efd\n}\nconst person = {\n  name: "Andy",\n};\norder.apply(person, ["\u6cbe\u9eb5", "\u5169\u4efd"]);\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0cthis \u88ab\u8a2d\u5b9a\u70ba person\uff0c\u800c\u53c3\u6578 food \u548c count \u662f\u4ee5\u9663\u5217\u7684\u5f62\u5f0f\u50b3\u905e\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5248:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>t});var a=l(758);const s={},c=a.createContext(s);function r(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);
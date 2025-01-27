"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[537],{4107:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>t});const l=JSON.parse('{"id":"Javascript/event_loop","title":"Event loop \u4e8b\u4ef6\u5faa\u74b0","description":"JavaScript \u662f\u55ae\u57f7\u884c\u7dd2\u7684\u8a9e\u8a00\uff0c\u6240\u4ee5\u4e00\u6b21\u53ea\u80fd\u57f7\u884c\u4e00\u4ef6\u4e8b\u3002\u4e8b\u4ef6\u5faa\u74b0 Event loop \u662f\u53ef\u4ee5\u78ba\u4fdd\u4f5c\u70ba\u55ae\u884c\u7dd2\u8a9e\u8a00\u7684 Javascript \u53ef\u4ee5\u5728\u57f7\u884c\u74b0\u5883(\u700f\u89bd\u5668\u6216Node.js)\u4e2d\u57f7\u884c\u975e\u540c\u6b65 (asynchronous)\u7a0b\u5f0f\u78bc\u800c\u4e0d\u6703\u963b\u585e\u4e3b\u57f7\u884c\u7dd2\u7684\u6a5f\u5236\u3002","source":"@site/docs/Javascript/04-event_loop.md","sourceDirName":"Javascript","slug":"/Javascript/event-loop","permalink":"/frontend-notes/docs/Javascript/event-loop","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Javascript/04-event_loop.md","tags":[{"inline":true,"label":"2024iT\u9435\u4eba\u8cfd","permalink":"/frontend-notes/docs/tags/2024-i-t\u9435\u4eba\u8cfd"},{"inline":true,"label":"event-loop","permalink":"/frontend-notes/docs/tags/event-loop"},{"inline":true,"label":"JavaScript","permalink":"/frontend-notes/docs/tags/java-script"}],"version":"current","sidebarPosition":4,"frontMatter":{"slug":"event-loop","title":"Event loop \u4e8b\u4ef6\u5faa\u74b0","authors":["ashley"],"tags":["2024iT\u9435\u4eba\u8cfd","event-loop","JavaScript"],"keywords":["2024iT\u9435\u4eba\u8cfd","event-loop","JavaScript"]},"sidebar":"notesSidebar","previous":{"title":"== \u548c === \u7684\u5dee\u7570","permalink":"/frontend-notes/docs/Javascript/equality-operator"},"next":{"title":"Event delegation \u4e8b\u4ef6\u59d4\u6d3e","permalink":"/frontend-notes/docs/Javascript/event-delegation"}}');var o=s(6070),c=s(5248);const i={slug:"event-loop",title:"Event loop \u4e8b\u4ef6\u5faa\u74b0",authors:["ashley"],tags:["2024iT\u9435\u4eba\u8cfd","event-loop","JavaScript"],keywords:["2024iT\u9435\u4eba\u8cfd","event-loop","JavaScript"]},r="JavaScript \u4e2d\u7684\u4e8b\u4ef6\u5faa\u74b0 event loop \u662f\u4ec0\u9ebc?",d={},t=[{value:"\u4e8b\u4ef6\u5faa\u74b0 event loop \u9032\u884c\u7684\u6d41\u7a0b",id:"\u4e8b\u4ef6\u5faa\u74b0-event-loop-\u9032\u884c\u7684\u6d41\u7a0b",level:2},{value:"\u5be6\u4f8b\u7df4\u7fd21",id:"\u5be6\u4f8b\u7df4\u7fd21",level:2},{value:"\u89e3\u984c1",id:"\u89e3\u984c1",level:2},{value:"\u5be6\u4f8b\u7df4\u7fd22",id:"\u5be6\u4f8b\u7df4\u7fd22",level:2},{value:"\u89e3\u984c2",id:"\u89e3\u984c2",level:2},{value:"\u5be6\u4f8b\u7df4\u7fd23",id:"\u5be6\u4f8b\u7df4\u7fd23",level:2},{value:"\u89e3\u984c3",id:"\u89e3\u984c3",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"javascript-\u4e2d\u7684\u4e8b\u4ef6\u5faa\u74b0-event-loop-\u662f\u4ec0\u9ebc",children:"JavaScript \u4e2d\u7684\u4e8b\u4ef6\u5faa\u74b0 event loop \u662f\u4ec0\u9ebc?"})}),"\n",(0,o.jsx)(n.p,{children:"JavaScript \u662f\u55ae\u57f7\u884c\u7dd2\u7684\u8a9e\u8a00\uff0c\u6240\u4ee5\u4e00\u6b21\u53ea\u80fd\u57f7\u884c\u4e00\u4ef6\u4e8b\u3002\u4e8b\u4ef6\u5faa\u74b0 Event loop \u662f\u53ef\u4ee5\u78ba\u4fdd\u4f5c\u70ba\u55ae\u884c\u7dd2\u8a9e\u8a00\u7684 Javascript \u53ef\u4ee5\u5728\u57f7\u884c\u74b0\u5883(\u700f\u89bd\u5668\u6216Node.js)\u4e2d\u57f7\u884c\u975e\u540c\u6b65 (asynchronous)\u7a0b\u5f0f\u78bc\u800c\u4e0d\u6703\u963b\u585e\u4e3b\u57f7\u884c\u7dd2\u7684\u6a5f\u5236\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u4e8b\u4ef6\u5faa\u74b0-event-loop-\u9032\u884c\u7684\u6d41\u7a0b",children:"\u4e8b\u4ef6\u5faa\u74b0 event loop \u9032\u884c\u7684\u6d41\u7a0b"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Javascript \u7684\u4e3b\u57f7\u884c\u7dd2\u958b\u59cb\u57f7\u884c scripts\uff0c\u4e26\u4e14\u5c07\u540c\u6b65\u4efb\u52d9\u653e\u5165\u57f7\u884c\u68e7 \uff08call stack\uff09\uff0c\u76f4\u5230\u8a72\u4efb\u52d9\u5b8c\u6210\u5f8c\u624d\u6703\u88ab\u79fb\u9664\u3002"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u68e7 stack : \u662f\u4e00\u7a2e\u8cc7\u6599\u7d50\u69cb\uff0c\u7279\u8272\u662f\u5148\u9032\u5f8c\u51fa\uff0c\u7576\u7a0b\u5f0f\u78bc\u57f7\u884c\u6642\u51fd\u5f0f\u6703\u5148\u88ab\u653e\u5165\u57f7\u884c\u68e7\u7684\u6700\u4e0a\u65b9\uff0c\u7576\u51fd\u5f0f\u57f7\u884c\u5b8c\u6210\u5c31\u6703\u5f9e\u6700\u4e0a\u65b9\u79fb\u9664\uff0c\u63a5\u8457\u57f7\u884c\u57f7\u884c\u68e7\u6700\u4e0a\u65b9\u7684\u51fd\u5f0f\uff0c\u76f4\u5230\u6574\u500b\u57f7\u884c\u68e7\u88ab\u6e05\u7a7a\u3002"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u7576\u57f7\u884c\u6642\u9047\u5230\u975e\u540c\u6b65\u7684\u4efb\u52d9\u6642\uff0c\u4f8b\u5982\uff1a\u547c\u53eb api \u6216 ",(0,o.jsx)(n.code,{children:"setTimeout()"}),"\uff0c\u57f7\u884c\u74b0\u5883\u5c31\u6703\u547c\u53eb Web API or Node.js API \u8b93\u5176\u5728\u80cc\u666f\u904b\u4f5c\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u7b49\u5f85\u975e\u540c\u6b65\u7684\u4efb\u52d9\u7372\u5f97\u7d50\u679c\u5f8c\uff0c\u5c07\u5176 callback \u653e\u5230\u4efb\u52d9\u968a\u5217(task queues)\u4e2d\u3002"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u968a\u5217 queue: \u662f\u4e00\u7a2e\u8cc7\u6599\u7d50\u69cb\uff0c\u7279\u8272\u662f\u5148\u9032\u5148\u51fa\uff0c\u53ef\u4ee5\u60f3\u50cf\u662f\u6392\u968a\u7684\u6982\u5ff5\u3002"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u4efb\u52d9\u968a\u5217(task queues)\u53c8\u53ef\u4ee5\u5206\u6210\u5fae\u4efb\u52d9\u548c\u5b8f\u4efb\u52d9\uff1a"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u5fae\u4efb\u52d9 Micro task queue\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Promise.then"}),"\n",(0,o.jsx)(n.li,{children:"Promise.catch"}),"\n",(0,o.jsx)(n.li,{children:"Promise.finally"}),"\n",(0,o.jsx)(n.li,{children:"process.nextTick\uff08Node.js \u74b0\u5883\uff09"}),"\n",(0,o.jsx)(n.li,{children:"MutationObserver\uff08\u700f\u89bd\u5668\u74b0\u5883\uff09"}),"\n",(0,o.jsx)(n.li,{children:"queueMicrotask()"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u5b8f\u4efb\u52d9 Macro task queue"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"setTimeout()"}),"\n",(0,o.jsx)(n.li,{children:"HTTP \u8acb\u6c42"}),"\n",(0,o.jsxs)(n.li,{children:["UI handler",":clicks",", scrolls"]}),"\n",(0,o.jsx)(n.li,{children:"setInterval()"}),"\n",(0,o.jsx)(n.li,{children:"script(\u6574\u9ad4\u7a0b\u5f0f\u78bc)"}),"\n",(0,o.jsx)(n.li,{children:"UI \u6e32\u67d3"}),"\n",(0,o.jsx)(n.li,{children:"postMessage"}),"\n",(0,o.jsx)(n.li,{children:"MessageChannel"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u7576\u57f7\u884c\u68e7 \uff08call stack\uff09\u88e1\u9762\u6240\u6709\u7684\u540c\u6b65\u4efb\u52d9\u88ab\u57f7\u884c\u5b8c\uff0c\u5c31\u6703\u53bb\u8b80\u53d6\u4efb\u52d9\u968a\u5217(task queues)\uff0c\u7136\u5f8c\u628a\u4efb\u52d9\u968a\u5217\u7684\u7b2c\u4e00\u500b\u4efb\u52d9\u52a0\u5230\u57f7\u884c\u68e7 \uff08call stack\uff09\u57f7\u884c\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"\u5fae\u4efb\u52d9\u512a\u5148\u65bc\u5b8f\u4efb\u52d9"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u6703\u512a\u5148\u57f7\u884c\u6240\u6709\u7684\u5fae\u4efb\u52d9\uff0c\u7576\u6240\u6709\u5fae\u4efb\u52d9\u57f7\u884c\u5b8c\u7562\u5f8c\uff0c\u5982\u679c\u6709\u65b0\u7684\u5fae\u4efb\u52d9\u88ab\u6dfb\u52a0\u5230\u968a\u5217\u4e2d\uff0c\u5247\u7e7c\u7e8c\u4f9d\u5e8f\u57f7\u884c\u65b0\u7684\u5fae\u4efb\u52d9\uff0c\u76f4\u5230\u5fae\u4efb\u52d9\u968a\u5217\u6e05\u7a7a\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u5f9e\u5b8f\u4efb\u52d9\u968a\u5217\u4e2d\u53d6\u51fa\u4e00\u500b\u4efb\u52d9\u57f7\u884c\uff0c\u57f7\u884c\u5b8c\uff0c\u4e8b\u4ef6\u5faa\u74b0\u6703\u53bb\u6aa2\u67e5\u5fae\u4efb\u52d9\u7684\u968a\u5217\uff0c\u5982\u679c\u6709\u672a\u57f7\u884c\u7684\u5fae\u4efb\u52d9\u5c31\u6703\u5148\u628a\u5fae\u4efb\u52d9\u57f7\u884c\u5b8c\u7562\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u9019\u500b\u904e\u7a0b\u6703\u4e00\u76f4\u7121\u9650\u5faa\u74b0\u4e0b\u53bb\uff0cJavascript \u6709\u6548\u5730\u53bb\u8655\u7406\u975e\u540c\u6b65\u8207\u540c\u6b65\u7684\u904b\u884c\uff0c\u4e26\u4e14\u53ef\u4ee5\u907f\u514d\u4e3b\u57f7\u884c\u7dd2\u963b\u585e\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\uff0a \u6587\u5b57\u8f03\u70ba\u62bd\u8c61\uff0c\u9019\u500b\u5f71\u7247\u7684\u8aaa\u660e\u66f4\u6709\u52a9\u65bc\u7406\u89e3\u6574\u500b\u89c0\u5ff5\uff1a\n",(0,o.jsx)(n.a,{href:"https://www.youtube.com/watch?v=eiC58R16hb8",children:"JavaScript Visualized - Event Loop, Web APIs, (Micro)task Queue"})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"\u5be6\u4f8b\u7df4\u7fd21",children:"\u5be6\u4f8b\u7df4\u7fd21"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://bigfrontend.dev/quiz/1-promise-order",children:"1. Promise order"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// This is a JavaScript Quiz from BFE.dev\n\nconsole.log(1);\nconst promise = new Promise((resolve) => {\n  console.log(2);\n  resolve();\n  console.log(3);\n});\n\nconsole.log(4);\n\npromise\n  .then(() => {\n    console.log(5);\n  })\n  .then(() => {\n    console.log(6);\n  });\n\nconsole.log(7);\n\nsetTimeout(() => {\n  console.log(8);\n}, 10);\n\nsetTimeout(() => {\n  console.log(9);\n}, 0);\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"\u89e3\u984c1",children:"\u89e3\u984c1"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c ",(0,o.jsx)(n.code,{children:"console.log(1)"}),"\uff0c\u5370\u51fa ",(0,o.jsx)(n.code,{children:"1"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c ",(0,o.jsx)(n.code,{children:"const promise = new Promise((resolve) => {...}"}),"\u4e2d\u7684 ",(0,o.jsx)(n.code,{children:"console.log(2)"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"2"}),"\uff0c",(0,o.jsx)(n.code,{children:"console.log(3)"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"3"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"console.log(4)"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"4"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u5c07 ",(0,o.jsx)(n.code,{children:"promise.then(() => {console.log(5)}).then(() => {console.log(6)})"}),"\u7684 callback \u653e\u5230\u5fae\u4efb\u52d9\u968a\u5217\uff0c"]}),"\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c ",(0,o.jsx)(n.code,{children:"console.log(7)"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"7"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u5c07 ",(0,o.jsx)(n.code,{children:"setTimeout(() => {console.log(8)}, 10)"}),"\u653e\u5230\u5b8f\u4efb\u52d9\u968a\u5217\uff0c\u7b49\u5f85 10ms \u5f8c\u57f7\u884c\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u5c07 ",(0,o.jsx)(n.code,{children:"setTimeout(() => {console.log(9)}, 0)"}),"\u653e\u5230\u5b8f\u4efb\u52d9\u968a\u5217\uff0c\u4f46\u56e0\u70ba\u5ef6\u9072\u662f 0ms\uff0c\u6240\u4ee5\u9019\u500b\u5b8f\u4efb\u52d9\u6703\u5728\u6240\u6709\u540c\u6b65\u4ee3\u78bc\u57f7\u884c\u5b8c\u5f8c\u7684\u4e0b\u4e00\u6b21\u4e8b\u4ef6\u5faa\u74b0\u4e2d\u512a\u5148\u57f7\u884c\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u540c\u6b65\u4ee3\u78bc\u5168\u90e8\u57f7\u884c\u5b8c\u7562\uff0c\u6aa2\u67e5\u5fae\u4efb\u52d9\u968a\u5217\uff0c\u767c\u73fe\u6709\u5fae\u4efb\u52d9","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u5c07\u5fae\u4efb\u52d9\u968a\u5217\u7684",(0,o.jsx)(n.code,{children:"promise.then(() => {console.log(5)}).then(() => {console.log(6)})"}),"\u653e\u5230 call stack \u57f7\u884c"]}),"\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c",(0,o.jsx)(n.code,{children:"console.log(5)"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"5"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c",(0,o.jsx)(n.code,{children:"console.log(6)"}),"\u5370\u51fa",(0,o.jsx)(n.code,{children:"6"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\u6aa2\u67e5\u5fae\u4efb\u52d9\u968a\u5217\uff0c\u767c\u73fe\u6c92\u6709\u5fae\u4efb\u52d9\uff0c\u6aa2\u67e5\u5b8f\u4efb\u52d9\u968a\u5217\uff0c\u767c\u73fe\u6709\u5b8f\u4efb\u52d9","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c",(0,o.jsx)(n.code,{children:"setTimeout(() => {console.log(9)}, 0)"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"9"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c",(0,o.jsx)(n.code,{children:"setTimeout(() => {console.log(8)}, 10)"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"8"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u5be6\u4f8b\u7df4\u7fd22",children:"\u5be6\u4f8b\u7df4\u7fd22"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://bigfrontend.dev/quiz/promise-order-II",children:"47. Promise Order II"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// This is a JavaScript Quiz from BFE.dev\n\nconsole.log(1);\n\nsetTimeout(() => {\n  console.log(2);\n}, 10);\n\nsetTimeout(() => {\n  console.log(3);\n}, 0);\n\nnew Promise((_, reject) => {\n  console.log(4);\n  reject(5);\n  console.log(6);\n})\n  .then(() => console.log(7))\n  .catch(() => console.log(8))\n  .then(() => console.log(9))\n  .catch(() => console.log(10))\n  .then(() => console.log(11))\n  .then(console.log)\n  .finally(() => console.log(12));\n\nconsole.log(13);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u89e3\u984c2",children:"\u89e3\u984c2"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u57f7\u884c",(0,o.jsx)(n.code,{children:"console.log(1)"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"1"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u628a ",(0,o.jsx)(n.code,{children:"setTimeout(() => { console.log(2); }, 10)"}),"\u653e\u5230\u5b8f\u4efb\u52d9\u968a\u5217\uff0c\u5ef6\u9072 10ms \u5f8c\u57f7\u884c\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u628a ",(0,o.jsx)(n.code,{children:"setTimeout(() => { console.log(3); }, 0)"}),"\u653e\u5230\u5b8f\u4efb\u52d9\u968a\u5217\u4e2d\uff0c\u5ef6\u9072 0ms\uff0c\u6703\u5728\u4e8b\u4ef6\u5faa\u74b0\u7684\u4e0b\u4e00\u8f2a\u57f7\u884c\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u57f7\u884c",(0,o.jsx)(n.code,{children:"new Promise((_, reject) => {...})"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c",(0,o.jsx)(n.code,{children:"console.log(4)"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"4"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c ",(0,o.jsx)(n.code,{children:"reject(5)"}),"\uff0c\u5c07 ",(0,o.jsx)(n.code,{children:".catch()"})," \u7684\u56de\u8abf\u653e\u5165\u5fae\u4efb\u52d9\u968a\u5217\uff0c\u4f46\u4e0d\u6703\u7acb\u5373\u57f7\u884c"]}),"\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c",(0,o.jsx)(n.code,{children:"console.log(6)"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"6"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u57f7\u884c",(0,o.jsx)(n.code,{children:"console.log(13)"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"13"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u6240\u6709\u540c\u6b65\u7684\u7a0b\u5f0f\u78bc\u90fd\u57f7\u884c\u5b8c\u4e86\uff0c\u6aa2\u67e5\u5fae\u4efb\u52d9\u968a\u5217"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"reject(5)"}),"\u89f8\u767c",(0,o.jsx)(n.code,{children:".catch(() => console.log(8))"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"8"}),"\uff0c"]}),"\n",(0,o.jsxs)(n.li,{children:["\u63a5\u8457\u57f7\u884c ",(0,o.jsx)(n.code,{children:".then(() => console.log(9))"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"9"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u63a5\u8457\u57f7\u884c ",(0,o.jsx)(n.code,{children:".then(() => console.log(11))"}),"\u5370\u51fa",(0,o.jsx)(n.code,{children:"11"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u63a5\u8457\u57f7\u884c ",(0,o.jsx)(n.code,{children:".then(console.log)"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"undefined"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u63a5\u8457\u57f7\u884c ",(0,o.jsx)(n.code,{children:".finally(() => console.log(12))"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"12"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u6aa2\u67e5\u5fae\u4efb\u52d9\u968a\u5217\uff0c\u767c\u73fe\u5df2\u6e05\u7a7a\uff0c\u57f7\u884c\u5b8f\u4efb\u52d9\u968a\u5217"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c ",(0,o.jsx)(n.code,{children:"setTimeout(() => {console.log(3);}, 0);"}),"\u5370\u51fa",(0,o.jsx)(n.code,{children:"3"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c ",(0,o.jsx)(n.code,{children:"setTimeout(() => {console.log(2);}, 10);"}),"\u5370\u51fa",(0,o.jsx)(n.code,{children:"2"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u5be6\u4f8b\u7df4\u7fd23",children:"\u5be6\u4f8b\u7df4\u7fd23"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://bigfrontend.dev/quiz/Promise-Order-III",children:"103. Promise Order III"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const createPromise = () => Promise.resolve(1);\n\nfunction func1() {\n  createPromise().then(console.log);\n  console.log(2);\n}\n\nasync function func2() {\n  await createPromise();\n  console.log(3);\n}\n\nconsole.log(4);\nfunc1();\nfunc2();\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u89e3\u984c3",children:"\u89e3\u984c3"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u57f7\u884c ",(0,o.jsx)(n.code,{children:"console.log(4)"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"4"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u57f7\u884c ",(0,o.jsx)(n.code,{children:"func1()"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c",(0,o.jsx)(n.code,{children:"createPromise().then(console.log)"}),"\uff0c\u9019\u88e1 ",(0,o.jsx)(n.code,{children:"Promise.resolve(1)"})," \u6703\u7acb\u5373 resolve\uff0c\u5c07 ",(0,o.jsx)(n.code,{children:"console.log"})," \u653e\u5230\u5fae\u4efb\u52d9\u5217\u968a"]}),"\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c ",(0,o.jsx)(n.code,{children:"console.log(2)"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"2"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u57f7\u884c ",(0,o.jsx)(n.code,{children:"async function func2()"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c",(0,o.jsx)(n.code,{children:"await createPromise()"}),"\uff0c\u6b64\u6642",(0,o.jsx)(n.code,{children:"createPromise()"}),"\u6703\u7acb\u5373 resolve\uff0c\u4e26\u66ab\u505c ",(0,o.jsx)(n.code,{children:"func2"})," \u7684\u57f7\u884c\uff0cawait \u5c07\u63a7\u5236\u6b0a\u4ea4\u9084\u7d66\u4e3b\u57f7\u884c\u7dd2\uff0c\u4e26\u5c07\u5269\u4e0b\u7684\u90e8\u5206",(0,o.jsx)(n.code,{children:"console.log(3)"}),"\u653e\u5165\u5fae\u4efb\u52d9\u968a\u5217"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u6240\u6709\u540c\u6b65\u7a0b\u5f0f\u78bc\u57f7\u884c\u5b8c\u7562\uff0c\u6aa2\u67e5\u5fae\u4efb\u52d9\u5217\u968a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c",(0,o.jsx)(n.code,{children:"console.log"}),"\uff0c\u53c8",(0,o.jsx)(n.code,{children:"console.log"}),"\u70ba",(0,o.jsx)(n.code,{children:"Promise.resolve(1)"}),"\u7684callback\uff0c\u6545\u6703\u5370\u51fa",(0,o.jsx)(n.code,{children:"1"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u57f7\u884c",(0,o.jsx)(n.code,{children:"async function func2()"}),"\uff0c\u57f7\u884c",(0,o.jsx)(n.code,{children:"console.log(3)"}),"\uff0c\u5370\u51fa",(0,o.jsx)(n.code,{children:"3"})]}),"\n"]}),"\n"]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},5248:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var l=s(758);const o={},c=l.createContext(o);function i(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);
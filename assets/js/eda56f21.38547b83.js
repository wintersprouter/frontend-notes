"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[3561],{8952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>a});const c=JSON.parse('{"id":"react/react-zet-book/\u6df1\u5165\u7406\u89e3 batch update \u8207 updater function","title":"\u6df1\u5165\u7406\u89e3 batch update \u8207 updater function","description":"batch update","source":"@site/docs/react/react-zet-book/11.\u6df1\u5165\u7406\u89e3 batch update \u8207 updater function.mdx","sourceDirName":"react/react-zet-book","slug":"/react/react-zet-book/\u6df1\u5165\u7406\u89e3 batch update \u8207 updater function","permalink":"/frontend-notes/docs/react/react-zet-book/\u6df1\u5165\u7406\u89e3 batch update \u8207 updater function","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/react-zet-book/11.\u6df1\u5165\u7406\u89e3 batch update \u8207 updater function.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{},"sidebar":"notesSidebar","previous":{"title":"\u5982\u4f55\u5728\u5b50 component \u88e1\u89f8\u767c\u66f4\u65b0 \u7236 componet \u7684\u8cc7\u6599","permalink":"/frontend-notes/docs/react/react-zet-book/\u5982\u4f55\u5728\u5b50 component \u88e1\u89f8\u767c\u66f4\u65b0 \u7236 componet \u7684\u8cc7\u6599"},"next":{"title":"\u7dad\u6301 React \u8cc7\u6599\u6d41\u53ef\u9760\u6027\u7684\u95dc\u9375\uff1aimmutable state","permalink":"/frontend-notes/docs/react/react-zet-book/\u7dad\u6301 React \u8cc7\u6599\u6d41\u53ef\u9760\u6027\u7684\u95dc\u9375\uff1aimmutable state"}}');var s=t(6070),i=t(5248),d=t(2360);const l={},r=void 0,o={},a=[{value:"batch update",id:"batch-update",level:2},{value:"<code>flushSync</code> api",id:"flushsync-api",level:2},{value:"updater function",id:"updater-function",level:2},{value:"\u9700\u8981\u4f7f\u7528 updater function \u7684\u60c5\u5883",id:"\u9700\u8981\u4f7f\u7528-updater-function-\u7684\u60c5\u5883",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"batch-update",children:"batch update"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"setState"})," \u7684\u8cc7\u6599\u66f4\u65b0\u5f8c\u6703\u89f8\u767c component re-render\uff0creact \u6703\u5728\u5c07\u6240\u6709\u57f7\u884c\u7684\u4e8b\u4ef6\u5b8c\u6210\u5f8c\uff0c\u624d\u6703\u9032\u884c re-render\u3002"]}),"\n",(0,s.jsx)(d.A,{codeSandboxId:"batch-update-sglxr9?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clvnk1xmq00063b6jb3oifd5y%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clvnk1xmq00023b6juqyzn2kd%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clvnk1xmq00033b6jwvh3ib50%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clvnk1xmq00053b6jx8mem72v%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clvnk1xmq00023b6juqyzn2kd%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clvnk1xmq00013b6jjcsksb5f%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.js%2522%257D%255D%252C%2522id%2522%253A%2522clvnk1xmq00023b6juqyzn2kd%2522%252C%2522activeTabId%2522%253A%2522clvnk1xmq00013b6jjcsksb5f%2522%257D%252C%2522clvnk1xmq00053b6jx8mem72v%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clvnk1xmq00043b6jxhtib4qx%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clvnk1xmq00053b6jx8mem72v%2522%252C%2522activeTabId%2522%253A%2522clvnk1xmq00043b6jxhtib4qx%2522%257D%252C%2522clvnk1xmq00033b6jwvh3ib50%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clvnk1xmq00033b6jwvh3ib50%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"react \u57f7\u884c App compoent function \u5f8c\u6703\u7522\u751f\u63cf\u8ff0\u756b\u9762\u7684 React element \uff0c\u4e26\u5c07\u9019\u500b React element \u7522\u751f\u76f8\u5c0d\u61c9\u7684 DOM element \u6e32\u67d3\u5230\u700f\u89bd\u5668\u4e0a\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728 App component \u4e2d\u521d\u59cb\u7684 count state \u662f 0 ,clickCount state \u662f 0"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7576\u9ede\u64ca button \u5f8c\u6703\u53bb\u57f7\u884c ",(0,s.jsx)(n.code,{children:"handleClick"})," function"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7576\u57f7\u884c\u5230 ",(0,s.jsx)(n.code,{children:"setCount(1)"}),"\u6642\uff0creact \u6703\u5c07\u9019\u500b\u66f4\u65b0\u7684\u52d5\u4f5c\u4f9d\u7167\u9806\u5e8f\u653e\u5230\u4e00\u500b\u4ee3\u57f7\u884c\u8a08\u7b97\u4f47\u5217 (queue)\u4e2d"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6b64\u6642\u7684\u4f47\u5217\u4f9d\u5e8f\u7531\u820a\u81f3\u65b0\u6709\uff1a",(0,s.jsx)(n.code,{children:"setCount(1)"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6b64\u6642 count \u7684\u503c\u70ba 0"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6b64\u6642 clickCount \u7684\u503c\u70ba 0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7576\u57f7\u884c\u5230 ",(0,s.jsx)(n.code,{children:"setCount(3)"}),"\u6642\uff0creact \u6703\u5c07\u9019\u500b\u66f4\u65b0\u7684\u52d5\u4f5c\u653e\u5230\u4f47\u5217 (queue)\u4e2d"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6b64\u6642\u7684\u4f47\u5217\u7531\u820a\u81f3\u65b0\u4f9d\u5e8f\u6709\uff1a",(0,s.jsx)(n.code,{children:"setCount(1)"}),"\u3001",(0,s.jsx)(n.code,{children:"setCount(3)"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6b64\u6642 count \u7684\u503c\u70ba 0"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6b64\u6642 clickCount \u7684\u503c\u70ba 0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7576\u57f7\u884c\u5230 ",(0,s.jsx)(n.code,{children:"setCount(5)"}),"\u6642\uff0creact \u6703\u5c07\u9019\u500b\u66f4\u65b0\u7684\u52d5\u4f5c\u653e\u5230\u4f47\u5217 (queue)\u4e2d"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6b64\u6642\u7684\u4f47\u5217\u7531\u820a\u81f3\u65b0\u4f9d\u5e8f\u6709\uff1a",(0,s.jsx)(n.code,{children:"setCount(1)"}),"\u3001",(0,s.jsx)(n.code,{children:"setCount(3)"}),"\u3001",(0,s.jsx)(n.code,{children:"setCount(5)"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6b64\u6642 count \u7684\u503c\u70ba 0"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6b64\u6642 clickCount \u7684\u503c\u70ba 0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u7576\u57f7\u884c\u5230 ",(0,s.jsx)(n.code,{children:"setClickCount((clickCount) => clickCount + 1)"}),"\u6642\uff0creact \u6703\u5c07\u9019\u500b\u66f4\u65b0\u7684\u52d5\u4f5c\u653e\u5230\u4f47\u5217 (queue)\u4e2d"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6b64\u6642\u7684\u4f47\u5217\u7531\u820a\u81f3\u65b0\u4f9d\u5e8f\u6709\uff1a",(0,s.jsx)(n.code,{children:"setCount(1)"}),"\u3001",(0,s.jsx)(n.code,{children:"setCount(3)"}),"\u3001",(0,s.jsx)(n.code,{children:"setCount(5)"}),"\u3001setClickCount((clickCount) => clickCount + 1)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6b64\u6642 count \u7684\u503c\u70ba 0"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6b64\u6642 clickCount \u7684\u503c\u70ba 0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u57f7\u884c\u5b8c\u6240\u6709\u7684\u4e8b\u4ef6\u5f8c\uff0creact \u6703\u4f9d\u7167\u6700\u65b0\u4f47\u5217\u7684\u9806\u5e8f\u81ea\u52d5\u5408\u4f75\u76f8\u540c\u7684 ",(0,s.jsx)(n.code,{children:"setState"})," \u65b9\u6cd5\uff0c\u4e26\u4e14\u53ea\u57f7\u884c\u6700\u5f8c\u4e00\u6b21\u7684 ",(0,s.jsx)(n.code,{children:"setState"})," \u65b9\u6cd5\uff0c"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6b64\u6642 count \u7684\u503c\u70ba 5\uff0c"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6b64\u6642 clickCount \u7684\u503c\u70ba 1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u66f4\u65b0 state \u5f8c\u624d\u6703\u9032\u884c\u4e00\u6b21 re-render\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["batch update \u7684\u6a5f\u5236\u5c31\u662f React \u6703\u81ea\u52d5\u5c07\u6240\u6709\u7684 ",(0,s.jsx)(n.code,{children:"setState"})," \u65b9\u6cd5\u4f9d\u5e8f\u5408\u4f75\u6210\u4e00\u6b21\u66f4\u65b0\uff0c\u85c9\u6b64\u53ef\u4ee5\u7701\u53bb\u6bcf\u66f4\u65b0\u4e00\u6b21 state \u5c31\u9032\u884c\u4e00\u6b21 re-render \u7684\u6548\u80fd\u554f\u984c\uff0c\u4e5f\u53ef\u4ee5\u907f\u514d\u534a\u6210\u54c1\u7684\u8cc7\u6599\u9032\u884c render\u3002"]}),"\n",(0,s.jsxs)(n.h2,{id:"flushsync-api",children:[(0,s.jsx)(n.code,{children:"flushSync"})," api"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5927\u591a\u6578\u7684\u60c5\u6cc1\u4e0b react \u90fd\u6703\u81ea\u52d5\u5e6b\u6211\u5011\u8655\u7406\u597d ",(0,s.jsx)(n.code,{children:"setState"})," \u5408\u4f75\u66f4\u65b0\u8cc7\u6599\uff0c\u4f46\u5982\u679c\u60f3\u8981\u91dd\u5c0d\u67d0\u4e9b\u72c0\u614b\u9700\u8981\u7576\u4e0b\u5c31\u89c0\u5bdf\u5230 DOM element \u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"flushSync"})," \u65b9\u6cd5\uff0c",(0,s.jsx)(n.code,{children:"flushSync"})," \u53ef\u4ee5\u6307\u5b9a\u67d0\u4e9b ",(0,s.jsx)(n.code,{children:"setState"})," \u65b9\u6cd5\u4e0d\u8981 batch update\uff0c\u800c\u662f\u7acb\u523b re-render\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f46\u662f\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"flushSync"})," \u9700\u8981\u6ce8\u610f\u7684\u662f ",(0,s.jsx)(n.code,{children:"flushSync"})," blocking \u7684\uff0c\u5982\u679c DOM \u8655\u7406\u592a\u4e45\u6703\u963b\u64cb\u5f8c\u7e8c\u7684\u756b\u9762\u66f4\u65b0\u7e7c\u7e8c\u9032\u884c\uff0c\u53ef\u80fd\u6703\u9020\u6210\u756b\u9762\u5361\u9813\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"updater-function",children:"updater function"}),"\n",(0,s.jsxs)(n.p,{children:["updater function \u53ef\u4ee5\u4f5c\u70ba\u53c3\u6578\u50b3\u5165 ",(0,s.jsx)(n.code,{children:"setState"})," \u65b9\u6cd5\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const [count, setCount] = useState(0);\nconst handleClick = () => {\n    //highlight-next-line\n  setCount((prevCount) => prevCount + 1);\n   //(prevCount) => prevCount + 1 \u5c31\u662f updater function\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0cupdater function \u6703\u8b93 ",(0,s.jsx)(n.code,{children:"setCount"})," \u6839\u64da\u5230\u76ee\u524d\u70ba\u6b62\u7684 ",(0,s.jsx)(n.code,{children:"count"})," \u503c prevCount \u53bb\u8a08\u7b97\u7522\u751f\u65b0\u7684 ",(0,s.jsx)(n.code,{children:"count"})," \u503c\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u9700\u8981\u4f7f\u7528-updater-function-\u7684\u60c5\u5883",children:"\u9700\u8981\u4f7f\u7528 updater function \u7684\u60c5\u5883"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u9700\u8981\u62ff\u5230\u7576\u4e0b state \u6301\u7e8c\u505a\u8a08\u7b97"}),"\n",(0,s.jsx)(n.li,{children:"\u53ef\u4ee5\u5728\u5b50\u5143\u4ef6\u4e2d\u76f4\u63a5\u53bb\u62ff\u5230 state \u7684\u503c"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2360:(e,n,t)=>{t.d(n,{A:()=>d});var c=t(5248),s=t(4778),i=t(6070);function d(e){return(0,i.jsx)(c.x,{children:(0,i.jsx)(s.dH,{...e})})}}}]);
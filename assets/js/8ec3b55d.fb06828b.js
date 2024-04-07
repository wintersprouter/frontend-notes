"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[4863],{4889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var r=n(5893),c=n(1151);const o={},a=void 0,d={id:"react/react-zet-book/Render React element",title:"Render React element",description:"react-dom",source:"@site/docs/react/react-zet-book/03-Render React element.mdx",sourceDirName:"react/react-zet-book",slug:"/react/react-zet-book/Render React element",permalink:"/frontend-notes/docs/react/react-zet-book/Render React element",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/react-zet-book/03-Render React element.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"notesSidebar",previous:{title:"\u5efa\u69cb\u756b\u9762\u7684\u6700\u5c0f\u55ae\u4f4d\uff1aReact Element",permalink:"/frontend-notes/docs/react/react-zet-book/\u5efa\u69cb\u756b\u9762\u7684\u6700\u5c0f\u55ae\u4f4d\uff1aReact Element"},next:{title:"React Native",permalink:"/frontend-notes/docs/category/react-native"}},l={},i=[{value:"<code>react-dom</code>",id:"react-dom",level:2},{value:"\u5c07 React Element \u7e6a\u88fd\u6210\u5be6\u969b DOM \u7684\u6d41\u7a0b",id:"\u5c07-react-element-\u7e6a\u88fd\u6210\u5be6\u969b-dom-\u7684\u6d41\u7a0b",level:2},{value:"1.\u6e96\u5099\u8f38\u51fa DOM \u5143\u7d20\u7684\u76ee\u6a19\u5bb9\u5668",id:"1\u6e96\u5099\u8f38\u51fa-dom-\u5143\u7d20\u7684\u76ee\u6a19\u5bb9\u5668",level:3},{value:"2.\u5efa\u7acb Root \u4e26\u6307\u5b9a\u76ee\u6a19\u5bb9\u5668",id:"2\u5efa\u7acb-root-\u4e26\u6307\u5b9a\u76ee\u6a19\u5bb9\u5668",level:3},{value:"3. \u5efa\u7acb React Element",id:"3-\u5efa\u7acb-react-element",level:3},{value:"4.\u5c07 React Element \u7e6a\u88fd\u6210\u5be6\u969b DOM \u5143\u7d20",id:"4\u5c07-react-element-\u7e6a\u88fd\u6210\u5be6\u969b-dom-\u5143\u7d20",level:3},{value:"Virtual DOM \u7684\u756b\u9762\u7ba1\u7406\u6d41\u7a0b",id:"virtual-dom-\u7684\u756b\u9762\u7ba1\u7406\u6d41\u7a0b",level:2},{value:"Reconciler",id:"reconciler",level:3},{value:"Render",id:"render",level:3}];function s(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"react-dom",children:(0,r.jsx)(t.code,{children:"react-dom"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"react-dom"})," \u662f react \u7528\u4f86\u5c07 React Element \u7e6a\u88fd\u6210\u5be6\u969b DOM \u7684\u5de5\u5177\u3002\u900f\u904e ",(0,r.jsx)(t.code,{children:"react-dom"})," \u53ef\u4ee5\u6307\u5b9a\u76ee\u6a19\u5bb9\u5668\u53bb\u7522\u751f\u6216\u64cd\u4f5c\u5be6\u969b\u7684 DOM \u5143\u7d20\uff0c\u5728 React \u5c08\u6848\u4e2d\u6703\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"root"})," \u4f5c\u70ba\u76ee\u6a19\u5bb9\u5668\u7684\u5165\u53e3\uff0c\u4ee5\u6b64\u5c07 React Element \u7e6a\u88fd\u6210\u5be6\u969b DOM \u8f38\u51fa\u81f3 ",(0,r.jsx)(t.code,{children:"root"})," \u7684\u5bb9\u5668\u4e2d\uff0c\u800c\u5728\u9019\u500b\u5bb9\u5668\u4e2d\u6240\u8f38\u51fa\u7684 DOM \u5143\u7d20\u5c07\u6703\u4ea4\u7531 React \u7ba1\u8f44\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u5c07-react-element-\u7e6a\u88fd\u6210\u5be6\u969b-dom-\u7684\u6d41\u7a0b",children:"\u5c07 React Element \u7e6a\u88fd\u6210\u5be6\u969b DOM \u7684\u6d41\u7a0b"}),"\n",(0,r.jsx)(t.h3,{id:"1\u6e96\u5099\u8f38\u51fa-dom-\u5143\u7d20\u7684\u76ee\u6a19\u5bb9\u5668",children:"1.\u6e96\u5099\u8f38\u51fa DOM \u5143\u7d20\u7684\u76ee\u6a19\u5bb9\u5668"}),"\n",(0,r.jsxs)(t.p,{children:["\u9019\u500b ",(0,r.jsx)(t.code,{children:'<div id="root"></div>'})," \u5c31\u662f React \u7e6a\u88fd\u6210\u5be6\u969b DOM \u7684\u76ee\u6a19\u5bb9\u5668\u3002\u5728\u6b64\u5bb9\u5668\u5167\u7684\u5143\u7d20\u5c07\u6703\u88ab React \u7ba1\u8f44\u3002"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<body>\n  <div id="root"></div>\n</body>\n'})}),"\n",(0,r.jsx)(t.h3,{id:"2\u5efa\u7acb-root-\u4e26\u6307\u5b9a\u76ee\u6a19\u5bb9\u5668",children:"2.\u5efa\u7acb Root \u4e26\u6307\u5b9a\u76ee\u6a19\u5bb9\u5668"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"title=index.js",children:'import React from "react";\nimport ReactDOM from "react-dom/client";\n\n//\u53d6\u5f97\u76ee\u6a19\u5bb9\u5668 DOM \u7bc0\u9ede\nconst rootContainer = document.getElementById("root");\n\n//\u5efa\u7acbReact app \u756b\u9762\u7ba1\u8f44\u5165\u53e3\nconst root = ReactDOM.createRoot(rootContainer);\n'})}),"\n",(0,r.jsx)(t.h3,{id:"3-\u5efa\u7acb-react-element",children:"3. \u5efa\u7acb React Element"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"title=index.js",children:'import React from "react";\nimport ReactDOM from "react-dom/client";\n\n//\u53d6\u5f97\u76ee\u6a19\u5bb9\u5668 DOM \u7bc0\u9ede\nconst rootContainer = document.getElementById("root");\n\n//\u5efa\u7acbReact app \u756b\u9762\u7ba1\u8f44\u5165\u53e3\nconst root = ReactDOM.createRoot(rootContainer);\n\n// highlight-start\nconst h1Element = React.createElement(\n  "h1",\n  { className: "title" },\n  "Hello World",\n);\n// highlight-end\n'})}),"\n",(0,r.jsx)(t.h3,{id:"4\u5c07-react-element-\u7e6a\u88fd\u6210\u5be6\u969b-dom-\u5143\u7d20",children:"4.\u5c07 React Element \u7e6a\u88fd\u6210\u5be6\u969b DOM \u5143\u7d20"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"title=index.js",children:'import React from "react";\nimport ReactDOM from "react-dom/client";\n\n//\u53d6\u5f97\u76ee\u6a19\u5bb9\u5668 DOM \u7bc0\u9ede\nconst rootContainer = document.getElementById("root");\n\n//\u5efa\u7acbReact app \u756b\u9762\u7ba1\u8f44\u5165\u53e3\nconst root = ReactDOM.createRoot(rootContainer);\n\nconst h1Element = React.createElement(\n  "h1",\n  { className: "title" },\n  "Hello World",\n);\n\n// highlight-next-line\nroot.render(h1Element);\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"react-dom"})," \u900f\u904e ",(0,r.jsx)(t.code,{children:"root.render()"})," \u5c07 React Element \u9032\u884c\u7e6a\u88fd\u6210\u771f\u5be6\u7684 DOM \u5143\u7d20\u4e26\u4e14\u6ce8\u5165 root \u5bb9\u5668\u4e2d\uff0c\u5728\u4f7f\u7528 root \u5bb9\u5668\u9032\u884c\u756b\u9762\u6e32\u67d3\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"virtual-dom-\u7684\u756b\u9762\u7ba1\u7406\u6d41\u7a0b",children:"Virtual DOM \u7684\u756b\u9762\u7ba1\u7406\u6d41\u7a0b"}),"\n",(0,r.jsx)(t.p,{children:"Virtual DOM \u5c07\u756b\u9762\u7684\u7ba1\u7406\u6d41\u7a0b\u62c6\u5206\u6210\u5169\u500b\u968e\u6bb5\uff1aReconciler \u548c Render\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"reconciler",children:"Reconciler"}),"\n",(0,r.jsx)(t.p,{children:"Reconciler \u4e3b\u8981\u662f\u7528\u4f86\u5b9a\u7fa9\u8207\u7ba1\u7406\u756b\u9762\u7684\u7d50\u69cb\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u700f\u89bd\u5668\u7684\u74b0\u5883\uff0cReconciler \u8ca0\u8cac\u5efa\u7acb\u548c\u5b9a\u7fa9 React Element\uff0c\u4ee5\u63cf\u8ff0\u9810\u671f\u7684 DOM \u7d50\u69cb\uff0c\u53e6\u4e00\u500b\u91cd\u8981\u7684\u529f\u80fd\u662f\u7576\u756b\u9762\u9700\u8981\u66f4\u65b0\u6642\uff0c\u6703\u627e\u51fa\u65b0\u820a\u7684 React Element \u4e4b\u9593\u7684\u5dee\u7570\uff0c\u5c07\u5dee\u7570\u7684\u90e8\u5206\u544a\u8a34 Render \u3002"}),"\n",(0,r.jsx)(t.h3,{id:"render",children:"Render"}),"\n",(0,r.jsxs)(t.p,{children:["Render \u5247\u662f\u5c07 Reconciler \u6240\u5b9a\u7fa9\u597d\u7684\u63cf\u8ff0\u7d50\u69cb\u8f49\u63db\u6210\u756b\u9762\u3002\n\u5728\u700f\u89bd\u5668\u7684\u74b0\u5883\u4e0b\u7684 Render \u5c31\u662f ",(0,r.jsx)(t.code,{children:"react-dom"}),"\uff0c React Element \u5c07\u900f\u904e ",(0,r.jsx)(t.code,{children:"react-dom"})," \u6240\u7522\u751f\u7684 root \u53bb\u7e6a\u88fd\u6210\u5be6\u969b DOM \u5143\u7d20\uff0c\u7576\u756b\u9762\u9700\u8981\u66f4\u65b0\u6642\uff0c\u6703\u5c07 Reconciler \u6bd4\u5c0d\u65b0\u820a\u5dee\u7570\u7684\u90e8\u5206\u540c\u6b65\u5316\u5230\u5be6\u969b\u7684 DOM \u66f4\u65b0\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u756b\u9762\u7ba1\u7406\u62c6\u5206\u6210 Reconciler \u8207 Render \u8655\u7406\u7684\u4e00\u5927\u597d\u8655\u662f\uff0cReact \u53ef\u4ee5\u66ff\u63db Render \u53bb\u7522\u751f\u700f\u89bd\u5668\u4ee5\u5916\u7684 UI \u63db\u756b\u9762\uff0c\u4f8b\u5982\uff1aReact Native\uff0c\u5c31\u662f\u628a React \u900f\u904e\u5c08\u7528\u7684 Render \u4f86\u8f49\u63db\u6210 Android \u6216 IOS \u7684\u539f\u751f\u7684 UI \u756b\u9762\u3002"})]})}function m(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>a});var r=n(7294);const c={},o=r.createContext(c);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
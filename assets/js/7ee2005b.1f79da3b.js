"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[3349],{7775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var o=t(5893),c=t(1151);const r={},s=void 0,p={id:"react/react-zet-book/\u5982\u4f55\u5728\u5b50 component \u88e1\u89f8\u767c\u66f4\u65b0 \u7236 componet \u7684\u8cc7\u6599",title:"\u5982\u4f55\u5728\u5b50 component \u88e1\u89f8\u767c\u66f4\u65b0 \u7236 componet \u7684\u8cc7\u6599",description:"\u70ba\u4ec0\u9ebc React \u4e26\u6c92\u6709\u4e5f\u4e0d\u9700\u8981\u5b50 component \u5411\u4e0a\u6e9d\u901a\u7236 component \u7684\u5c08\u9580\u6a5f\u5236\uff1f",source:"@site/docs/react/react-zet-book/10-\u5982\u4f55\u5728\u5b50 component \u88e1\u89f8\u767c\u66f4\u65b0 \u7236 componet \u7684\u8cc7\u6599.mdx",sourceDirName:"react/react-zet-book",slug:"/react/react-zet-book/\u5982\u4f55\u5728\u5b50 component \u88e1\u89f8\u767c\u66f4\u65b0 \u7236 componet \u7684\u8cc7\u6599",permalink:"/frontend-notes/docs/react/react-zet-book/\u5982\u4f55\u5728\u5b50 component \u88e1\u89f8\u767c\u66f4\u65b0 \u7236 componet \u7684\u8cc7\u6599",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/react-zet-book/10-\u5982\u4f55\u5728\u5b50 component \u88e1\u89f8\u767c\u66f4\u65b0 \u7236 componet \u7684\u8cc7\u6599.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"notesSidebar",previous:{title:"React \u756b\u9762\u66f4\u65b0\u7684\u6d41\u7a0b\u6a5f\u5236\uff1areconcilliation",permalink:"/frontend-notes/docs/react/react-zet-book/React \u756b\u9762\u66f4\u65b0\u7684\u6d41\u7a0b\u6a5f\u5236\uff1areconcilliation"},next:{title:"\u6df1\u5165\u7406\u89e3 batch update \u8207 updater function",permalink:"/frontend-notes/docs/react/react-zet-book/\u6df1\u5165\u7406\u89e3 batch update \u8207 updater function"}},a={},i=[{value:"\u70ba\u4ec0\u9ebc React \u4e26\u6c92\u6709\u4e5f\u4e0d\u9700\u8981\u5b50 component \u5411\u4e0a\u6e9d\u901a\u7236 component \u7684\u5c08\u9580\u6a5f\u5236\uff1f",id:"\u70ba\u4ec0\u9ebc-react-\u4e26\u6c92\u6709\u4e5f\u4e0d\u9700\u8981\u5b50-component-\u5411\u4e0a\u6e9d\u901a\u7236-component-\u7684\u5c08\u9580\u6a5f\u5236",level:2},{value:"\u5982\u4f55\u5728\u5b50 component \u88e1\u89f8\u767c\u66f4\u65b0\u7236 component \u8cc7\u6599\uff1f",id:"\u5982\u4f55\u5728\u5b50-component-\u88e1\u89f8\u767c\u66f4\u65b0\u7236-component-\u8cc7\u6599",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u70ba\u4ec0\u9ebc-react-\u4e26\u6c92\u6709\u4e5f\u4e0d\u9700\u8981\u5b50-component-\u5411\u4e0a\u6e9d\u901a\u7236-component-\u7684\u5c08\u9580\u6a5f\u5236",children:"\u70ba\u4ec0\u9ebc React \u4e26\u6c92\u6709\u4e5f\u4e0d\u9700\u8981\u5b50 component \u5411\u4e0a\u6e9d\u901a\u7236 component \u7684\u5c08\u9580\u6a5f\u5236\uff1f"}),"\n",(0,o.jsx)(n.p,{children:"React \u7684\u6838\u5fc3\u6982\u5ff5\u5c31\u662f\u55ae\u5411\u8cc7\u6599\u6d41\uff0c\u8cc7\u6599\u53ea\u80fd\u7531\u4e0a\u800c\u4e0b\u50b3\u905e\uff0c\u4e0d\u9700\u8981\u6709\u5b50 component \u5411\u4e0a\u6e9d\u901a\u7236 component \u7684\u5c08\u9580\u6a5f\u5236\u7684\u539f\u56e0\u5728\u65bc\uff1a"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"setState"})," \u7684\u51fd\u5f0f\u53ef\u4ee5\u900f\u904e props \u50b3\u905e\u81f3\u5b50 component \u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u547c\u53eb ",(0,o.jsx)(n.code,{children:"setState"})," \u51fd\u5f0f\u66f4\u65b0 state \u8cc7\u6599\u548c\u89f8\u767c re-render component \u662f\u56fa\u5b9a\u7684\uff0c\u56e0\u70ba\u5728\u5b50 component \u547c\u53eb\u7531\u7236 component \u50b3\u4e0b\u4f86\u7684 ",(0,o.jsx)(n.code,{children:"setState"})," \u5c31\u6703\u53bb\u66f4\u65b0\u7236 component \u7684 state\uff0c\u7576 state \u66f4\u65b0\u5c31\u6703 re-render \u7236 component\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u7236 component \u7684 state \u8cc7\u6599\u66f4\u65b0\u6642\uff0cReact \u5c31\u6703\u6839\u64da\u65b0\u7248\u672c\u7684 props \u53bb re-render \u5b50 component\u3002"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u57fa\u65bc\u4ee5\u4e0a\u4e09\u500b React \u7684\u7279\u6027\u5c31\u8db3\u4ee5\u9054\u6210\u9019\u500b\u76ee\u7684\uff0c\u56e0\u6b64 React \u4e26\u6c92\u6709\u4e5f\u4e0d\u9700\u8981\u5b50 component \u5411\u4e0a\u6e9d\u901a\u7236 component \u7684\u5c08\u9580\u6a5f\u5236\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u5982\u4f55\u5728\u5b50-component-\u88e1\u89f8\u767c\u66f4\u65b0\u7236-component-\u8cc7\u6599",children:"\u5982\u4f55\u5728\u5b50 component \u88e1\u89f8\u767c\u66f4\u65b0\u7236 component \u8cc7\u6599\uff1f"}),"\n",(0,o.jsxs)(n.p,{children:["\u5229\u7528 props \u5c07\u7236 component \u7684 ",(0,o.jsx)(n.code,{children:"setState"})," \u65b9\u6cd5\u50b3\u905e\u7d66\u5b50 component\uff0c\u5b50 component \u63a5\u6536\u5230",(0,o.jsx)(n.code,{children:"setState"})," \u65b9\u6cd5\u4fbf\u53ef\u4ee5\u5728\u9700\u8981\u7684\u6642\u5019\u53bb\u547c\u53eb\u9019\u500b\u65b9\u6cd5\uff0c\u9032\u800c\u66f4\u65b0\u7236 component \u7684\u8cc7\u6599\uff0c\u7576\u7236 component \u7684\u8cc7\u6599\u66f4\u65b0\u6642\uff0cReact \u5c31\u6703 re-render \u5b50 component\u3002"]})]})}function m(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>p,a:()=>s});var o=t(7294);const c={},r=o.createContext(c);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
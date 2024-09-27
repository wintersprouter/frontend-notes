"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[5022],{8408:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var o=t(4848),r=t(8453);const c={},s=void 0,d={id:"react/react-zet-book/Componet \u7684\u751f\u547d\u9031\u671f",title:"Componet \u7684\u751f\u547d\u9031\u671f",description:"Component \u7684\u4e09\u5927\u751f\u547d\u9031\u671f",source:"@site/docs/react/react-zet-book/14-Componet \u7684\u751f\u547d\u9031\u671f.mdx",sourceDirName:"react/react-zet-book",slug:"/react/react-zet-book/Componet \u7684\u751f\u547d\u9031\u671f",permalink:"/frontend-notes/docs/react/react-zet-book/Componet \u7684\u751f\u547d\u9031\u671f",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/react-zet-book/14-Componet \u7684\u751f\u547d\u9031\u671f.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"notesSidebar",previous:{title:"Immutable update",permalink:"/frontend-notes/docs/react/react-zet-book/Immutable update"},next:{title:"React Native",permalink:"/frontend-notes/docs/category/react-native"}},i={},l=[{value:"Component \u7684\u4e09\u5927\u751f\u547d\u9031\u671f",id:"component-\u7684\u4e09\u5927\u751f\u547d\u9031\u671f",level:2},{value:"\u4e00. Mount",id:"\u4e00-mount",level:3},{value:"render phase:",id:"render-phase",level:4},{value:"commit phase:",id:"commit-phase",level:4},{value:"\u57f7\u884c side effect:",id:"\u57f7\u884c-side-effect",level:4},{value:"\u4e8c. Update",id:"\u4e8c-update",level:3},{value:"render phase:",id:"render-phase-1",level:4},{value:"commit phase:",id:"commit-phase-1",level:4},{value:"\u6e05\u9664\u524d\u4e00\u6b21 render \u7684 side effect:",id:"\u6e05\u9664\u524d\u4e00\u6b21-render-\u7684-side-effect",level:4},{value:"\u57f7\u884c\u672c\u6b21 render \u7684 side effect",id:"\u57f7\u884c\u672c\u6b21-render-\u7684-side-effect",level:4},{value:"\u4e09. Unmount",id:"\u4e09-unmount",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"component-\u7684\u4e09\u5927\u751f\u547d\u9031\u671f",children:"Component \u7684\u4e09\u5927\u751f\u547d\u9031\u671f"}),"\n",(0,o.jsx)(n.p,{children:"\u751f\u547d\u9031\u671f\u5c31\u662f\u6307\u4e00\u500b React Component \u5728\u88ab\u5275\u5efa\u5230\u88ab\u92b7\u6bc0\u7684\u904e\u7a0b\u4e2d\uff0c\u6703\u7d93\u6b77\u7684\u4e00\u7cfb\u5217\u968e\u6bb5\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u4e00-mount",children:"\u4e00. Mount"}),"\n",(0,o.jsx)(n.p,{children:"Mount \u6d41\u7a0b\u6703\u5728 component \u4ee5 React component \u7684\u5f62\u5f0f\u7b2c\u4e00\u6b21\u51fa\u73fe\u5728\u756b\u9762\u4e0a\u6642\u89f8\u767c\u3002"}),"\n",(0,o.jsx)(n.h4,{id:"render-phase",children:"render phase:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"React \u6703\u57f7\u884c component function \u4ee5\u50b3\u5165\u7684 props \u548c state \u7522\u751f\u521d\u59cb\u756b\u9762\u5340\u584a\u7684 react element\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u6b64\u6642 React \u5167\u90e8\u6703\u5efa\u7acb fiber node \u4ee5\u5132\u5b58 component \u7684\u5be6\u4f8b\uff0c\u9019\u500b component \u5be6\u4f8b\u6703\u5305\u542b component \u756b\u9762\u7d50\u69cb\u3001state\u3001side effect...\u7b49\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u63a5\u8457\u5c07\u751f\u6210\u7684 react element \u4ea4\u5230 commit phase \u8655\u7406\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"commit-phase",children:"commit phase:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u7531\u65bc\u6b64\u6642\u662f\u7b2c\u4e00\u6b21 render\uff0c\u700f\u89bd\u5668\u5be6\u969b\u7684 DOM \u4e2d\u4e26\u6c92\u6709\u76f8\u5c0d\u61c9\u7684 component \u5be6\u4f8b DOM element\uff0c\u56e0\u6b64\u6703\u5c07 react element \u5168\u90e8\u8f49\u6210\u76f8\u5c0d\u61c9\u7684\u5be6\u969b DOM element\u3002"}),"\n",(0,o.jsxs)(n.li,{children:["\u4f7f\u7528\u700f\u89bd\u5668\u7684 DOM API ",(0,o.jsx)(n.code,{children:"appendChild()"})," \u5c07\u751f\u6210\u7684 DOM element \u639b\u8f09\u5230\u5be6\u969b\u7684\u700f\u89bd\u5668 DOM \u4e0a\u3002"]}),"\n",(0,o.jsx)(n.li,{children:"\u6b64\u6642 component \u5c31\u6703\u88ab\u639b\u8f09\u5230\u700f\u89bd\u5668\u7684\u756b\u9762\u4e0a\uff0c\u53ef\u4ee5\u5728\u5be6\u969b\u7684 DOM Element \u4e2d\u627e\u5230\u76f8\u5c0d\u61c9\u7684\u5be6\u4f8b\u7684 DOM element\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"\u57f7\u884c-side-effect",children:"\u57f7\u884c side effect:"}),"\n",(0,o.jsx)(n.p,{children:"\u57f7\u884c useEffect hook \u4e2d\u7684 \u526f\u4f5c\u7528\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"\u4e8c-update",children:"\u4e8c. Update"}),"\n",(0,o.jsxs)(n.p,{children:["Update \u6d41\u7a0b\u6703\u5728 component \u5b58\u5728\u65bc\u756b\u9762\u4e2d\uff0c\u7576 component \u7684 props \u6216 state \u8cc7\u6599\u767c\u751f\u8b8a\u5316\u6642\u89f8\u767c re-render\u3002\u5728 react \u4e2d\u80fd\u5920\u89f8\u767c re-render \u7684\u624b\u6bb5\u5c31\u662f\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"setState"})," \u53bb\u66f4\u65b0 state \u8cc7\u6599\uff0c\u800c component \u6709\u53ef\u80fd\u6703\u56e0\u70ba\u7236\u5c64\u6216\u7956\u7236\u5c64\u7684 component ",(0,o.jsx)(n.code,{children:"setState"})," \u53bb\u66f4\u65b0 state \u800c\u50b3\u5165\u65b0\u7684 props \u800c\u89f8\u767c re-render\uff1b\u4e5f\u6709\u53ef\u80fd\u56e0\u70ba component \u672c\u8eab state \u66f4\u65b0\u4e86\u800c\u89f8\u767c re-render\u3002"]}),"\n",(0,o.jsx)(n.h4,{id:"render-phase-1",children:"render phase:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"React \u6703\u57f7\u884c component function \u4ee5\u65b0\u7248\u672c\u50b3\u5165\u7684 props \u548c state \u91cd\u65b0\u7522\u751f react element\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u63a5\u8457\u5c07\u65b0\u7248\u672c\u6240\u7522\u751f\u7684 react element \u8207\u4e0a\u4e00\u6b21 render \u7684\u820a\u7248 react element \u9032\u884c\u6a39\u72c0\u7d50\u69cb\u7684\u6bd4\u8f03\uff0c\u627e\u51fa\u5dee\u7570\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u5c07\u5dee\u7570\u7684\u90e8\u5206\u4ea4\u5230 commit phase \u8655\u7406\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"commit-phase-1",children:"commit phase:"}),"\n",(0,o.jsx)(n.p,{children:"\u53ea\u6703\u53bb\u64cd\u4f5c\u65b0\u820a react element \u5dee\u7570\u6240\u5c0d\u61c9\u7684\u5be6\u969b DOM element\u3002"}),"\n",(0,o.jsx)(n.h4,{id:"\u6e05\u9664\u524d\u4e00\u6b21-render-\u7684-side-effect",children:"\u6e05\u9664\u524d\u4e00\u6b21 render \u7684 side effect:"}),"\n",(0,o.jsx)(n.p,{children:"\u57f7\u884c\u524d\u4e00\u6b21 useEffect hook \u4e2d\u5b9a\u7fa9\u7684\u6e05\u9664\u526f\u4f5c\u7528 cleanup \u51fd\u5f0f\u3002"}),"\n",(0,o.jsx)(n.h4,{id:"\u57f7\u884c\u672c\u6b21-render-\u7684-side-effect",children:"\u57f7\u884c\u672c\u6b21 render \u7684 side effect"}),"\n",(0,o.jsx)(n.h3,{id:"\u4e09-unmount",children:"\u4e09. Unmount"}),"\n",(0,o.jsx)(n.p,{children:"\u7576 component \u5728 re-render \u5f8c\u5728\u65b0\u756b\u9762\u4e2d\u88ab\u79fb\u9664\u6642\uff0c\u5c31\u6703\u89f8\u767c unmount \u6d41\u7a0b\u3002"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u6703\u5148\u5c07 component \u5f9e\u700f\u89bd\u5668\u7684\u5be6\u969b DOM element \u4e2d\u79fb\u9664\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u63a5\u8457\u6703\u57f7\u884c\u6700\u5f8c\u4e00\u6b21 useEffect hook \u4e2d\u526f\u4f5c\u7528\u4e2d\u7684 cleanup \u51fd\u5f0f\uff0c\u4ee5\u6e05\u9664\u7559\u4e0b\u7684\u526f\u4f5c\u7528\u5f71\u97ff\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u79fb\u9664 React \u5167\u90e8\u7684 fiber node\u3002"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var o=t(6540);const r={},c=o.createContext(r);function s(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);